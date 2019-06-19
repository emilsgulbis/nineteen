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
  fetchUser({ commit }, uid) {
    this.$fireDb
      .ref(`players`)
      .child(uid)
      .once('value', snap => {
        const username = snap.val() && snap.val().username

        if (username) {
          commit('SET_USERNAME', username)
        }
      })
  },

  async signIn({ commit, dispatch }) {
    try {
      const auth = await this.$fireAuth.signInAnonymously()
      commit('SET_ID', auth.user.uid)

      dispatch('fetchUser', auth.user.uid)

      const player = this.$fireDb.ref(`players/${auth.user.uid}`)
      player.onDisconnect().remove()
    } catch (e) {
      alert(e)
    }
  },

  async setUsername({ state, commit }, username) {
    try {
      if (state.id) {
        await this.$fireDb.ref(`players`).update({
          [state.id]: {
            username
          }
        })
        commit('SET_USERNAME', username)
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
