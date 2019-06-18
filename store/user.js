export const state = () => ({
  id: null,
  username: null
})

export const mutations = {
  updateUser(state, { id, username }) {
    state.id = id
    state.username = username
  }
}

export const actions = {
  async signIn({ commit, dispatch }, username) {
    try {
      const auth = await this.$fireAuth.signInAnonymously()
      commit('updateUser', {
        id: auth.user.uid,
        username
      })

      dispatch('store', { username, progress: 0 })

      const player = this.$fireDb.ref(`players/${auth.user.uid}`)
      player.onDisconnect().remove()
    } catch (e) {
      alert(e)
    }
  },

  async store({ state }, { username, progress }) {
    if (state.id) {
      try {
        await this.$fireDb.ref(`players`).update({
          [state.id]: {
            username,
            progress
          }
        })
      } catch (e) {
        alert(e)
      }
    }
  },

  async progress({ state }, progress) {
    if (state.id) {
      try {
        await this.$fireDb
          .ref(`players/${[state.id]}`)
          .child('progress')
          .set(progress)
      } catch (e) {
        alert(e)
      }
    }
  }
}

export const getters = {
  loggedIn(state) {
    return !!state.id && !!state.username
  }
}
