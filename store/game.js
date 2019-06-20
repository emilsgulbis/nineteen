import { patterns } from '~/utils/variables'

export const state = () => ({
  items: [],
  history: []
})

export const mutations = {
  SET_HISTORY(state, history) {
    state.history = history
  },

  SET_ITEMS(state, items) {
    state.items = items
  },

  CLEAR(state) {
    state.items = []
  },

  ADD(state, arr) {
    state.items = [
      ...state.items,
      ...arr.map((item, index) => ({
        value: Number(item),
        index: state.items.length + index,

        visible: true,
        selected: false,
        highlight: false
      }))
    ]
  },

  TOGGLE(state, { index }) {
    state.items = state.items.map(item => ({
      ...item,
      // eslint-disable-next-line
      ...(item.index === index && item.visible) && { selected: !item.selected }
    }))
  },

  HIDE(state, { index }) {
    state.items = state.items.map(item => ({
      ...item,
      ...(item.index === index && { visible: false, selected: false })
    }))
  },

  HISTORY_ADD(state, history) {
    state.history.push(history)
  },

  HISTORY_BACK(state) {
    if (state.history.length > 0) {
      const step = state.history.pop()
      if (step.type === 'hide') {
        state.items = state.items.map(item => ({
          ...item,
          ...(step.index.includes(item.index) && {
            visible: true
          })
        }))
      } else if (step.type === 'duplicate') {
        state.items.splice(step.index)
      }
    }
  },

  HIGHLIGHT(state, index) {
    state.items = state.items.map(item => ({
      ...item,
      ...(item.index === index && {
        highlight: true
      })
    }))
  },

  UNHIGHLIGHT(state, index) {
    state.items = state.items.map(item => ({
      ...item,
      ...(item.index === index && {
        highlight: false
      })
    }))
  }
}

export const actions = {
  buildFromHistory({ state, commit, getters }, history) {
    commit('SET_HISTORY', history)

    history.forEach(({ type, index }) => {
      if (type === 'hide') {
        index.map(i => commit('HIDE', { index: i }))
      } else if (type === 'duplicate') {
        const numbers = getters.visible.map(({ value }) => value)
        commit('ADD', numbers)
      }
    })
  },

  async reset({ commit, dispatch }) {
    await commit('CLEAR')
    await commit('ADD', patterns.default.split(','))
    await commit('SET_HISTORY', [])
    dispatch('syncGame')
  },

  toggle({ commit, dispatch, getters }, item) {
    commit('TOGGLE', item)

    if (getters.selected.length === 2) {
      if (getters.isValid(getters.selected)) {
        dispatch('addHistory', {
          type: 'hide',
          index: getters.selected.map(({ index }) => index)
        })
        getters.selected.map(item => commit('HIDE', item))
      } else {
        getters.selected.map(item => commit('TOGGLE', item))
      }
    }
  },

  duplicate({ state, commit, dispatch, getters }) {
    dispatch('addHistory', {
      type: 'duplicate',
      index: state.items.length
    })

    const numbers = getters.visible.map(({ value }) => value)
    commit('ADD', numbers)
  },

  getHints({ getters }) {
    return [].concat(
      ...getters.visible.map((first, i) => {
        return getters.visible
          .filter((second, j) => j > i && getters.isValid([first, second]))
          .map(second => {
            return [first.index, second.index]
          })
      })
    )
  },

  async showHint({ dispatch, commit }) {
    const hints = await dispatch('getHints')

    if (hints.length > 0) {
      const hintIndexes = hints[Math.floor(Math.random() * hints.length)]

      hintIndexes.map(index => commit('HIGHLIGHT', index))

      setTimeout(() => {
        hintIndexes.map(index => commit('UNHIGHLIGHT', index))
      }, 1000)
    } else {
      // TODO: button
    }
  },

  async addHistory({ commit, dispatch }, obj) {
    await commit('HISTORY_ADD', obj)
    dispatch('syncGame')
  },

  async backHistory({ commit, dispatch }) {
    await commit('HISTORY_BACK')
    dispatch('syncGame')
  },

  async syncGame({ state, dispatch, getters }) {
    await dispatch(
      'user/update',
      {
        history: state.history,
        progress: getters.progress
      },
      { root: true }
    )
  }
}

export const getters = {
  selected(state) {
    return state.items.filter(item => item.selected)
  },

  visible(state) {
    return state.items.filter(item => item.visible)
  },

  progress(state, getters) {
    return 100 - (getters.visible.length / state.items.length) * 100
  },

  isSiblings: (state, getters) => (first, second) => {
    const difference = Math.abs(
      getters.visible.indexOf(first) - getters.visible.indexOf(second)
    )

    return (
      difference === 1 ||
      getters.upperNumberIndex(first) === second.index ||
      getters.lowerNumberIndex(first) === second.index
    )
  },

  isValid: (state, getters) => ([first, second]) => {
    if (first && second) {
      if (getters.isSiblings(first, second)) {
        if (first.value === second.value) {
          return true
        } else if (first.value + second.value === 10) {
          return true
        }
      }
    }

    return false
  },

  upperNumberIndex: state => number => {
    let index = state.items.indexOf(number)

    do {
      index = index - 9
    } while (state.items[index] && !state.items[index].visible)

    return index
  },

  lowerNumberIndex: state => number => {
    let index = state.items.indexOf(number)

    do {
      index = index + 9
    } while (state.items[index] && !state.items[index].visible)

    return index
  }
}
