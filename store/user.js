export const state = () => ({
  id: null,
  username: null
})

export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username
  },

  SET_ID(state, id) {
    state.id = id
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
        commit('SET_USERNAME', user.username)
        dispatch('update')

        if (user.history) {
          dispatch('game/buildFromHistory', user.history, { root: true })
        }
      }

      const player = this.$fireDb.ref(`players/${auth.user.uid}`)
      player.onDisconnect().update({
        online: false
      })
    } catch (e) {
      alert(e)
    }
  },

  async update({ state, commit }, obj = {}) {
    try {
      if (state.id) {
        await this.$fireDb
          .ref(`players`)
          .child(state.id)
          .update({
            ...obj,
            online: true
          })

        if (obj.hasOwnProperty('username')) {
          commit('SET_USERNAME', obj.username)
        }
      }
    } catch (e) {
      alert(e)
    }
  }
}

export const getters = {
  loggedIn(state) {
    return !!state.id && !!state.username
  }
}
