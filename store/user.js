export const state = () => ({
  loading: true,
  id: null,
  username: null
})

export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username
  },

  SET_ID(state, id) {
    state.id = id
  },

  UPDATE_LOADING(state, value) {
    state.loading = value
  }
}

export const actions = {
  async fetchPlayer({ dispatch, commit }, uid) {
    const snap = await this.$fireDb
      .ref(`players`)
      .child(uid)
      .once('value')
    return snap.val()
  },

  async signIn({ commit, dispatch }) {
    try {
      const auth = await this.$fireAuth.signInAnonymously()
      commit('SET_ID', auth.user.uid)

      const user = await dispatch('fetchPlayer', auth.user.uid)
      if (user && user.username) {
        dispatch('auth', user.username)

        if (user.history) {
          dispatch('game/buildFromHistory', user.history, { root: true })
        }
      }
      commit('UPDATE_LOADING', false)

      const player = this.$fireDb.ref(`players/${auth.user.uid}`)
      player.onDisconnect().update({
        online: false
      })
    } catch (e) {
      alert(e)
    }
  },

  async update({ state }, obj = {}) {
    try {
      if (state.id) {
        await this.$fireDb
          .ref(`players`)
          .child(state.id)
          .update(obj)
      }
    } catch (e) {
      alert(e)
    }
  },

  async auth({ state, commit }, username) {
    if (state.id && username !== '') {
      commit('SET_USERNAME', username)

      await this.$fireDb
        .ref(`players`)
        .child(state.id)
        .update({
          username,
          online: true
        })
    }
  }
}

export const getters = {
  loggedIn(state) {
    return !!state.id && !!state.username
  }
}
