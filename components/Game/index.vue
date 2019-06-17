<template>
  <div class="flex flex-1">
    <div class="flex-1">
      <div class="w-450px mx-auto">
        <div class="p-sm">
          <game-progress :value="progress" />
        </div>

        <div class="flex flex-wrap">
          <game-item
            v-for="item in items"
            :key="item.index"
            :item="item"
            @select="select(item)"
          />
        </div>

        <div class="p-sm">
          <button
            class="bg-blue-300 text-blue-700 font-bold px-4 py-2 w-full rounded-full focus:outline-none uppercase"
            @click.prevent="duplicate()"
          >
            Pievienot
          </button>
        </div>
      </div>
    </div>

    <game-menu
      :hints="0"
      @back="stepBack"
      @hint="showHint"
      @new="resetNumbers"
    />
  </div>
</template>

<script>
import GameItem from './Item'
import GameMenu from './Menu'
import GameProgress from './Progress'
import { patterns } from '~/utils/variables'

export default {
  components: {
    GameItem,
    GameMenu,
    GameProgress
  },

  data() {
    return {
      items: [],
      history: []
    }
  },

  computed: {
    selected() {
      return this.items.filter(item => item.selected)
    },

    visible() {
      return this.items.filter(item => item.visible)
    },

    progress() {
      return 100 - (this.visible.length / this.items.length) * 100
    }
  },

  created() {
    this.resetNumbers()
  },

  methods: {
    resetNumbers() {
      this.items = []
      this.addNumbers(patterns.default.split(','))
    },

    addNumbers(numbers) {
      this.items = [
        ...this.items,
        ...numbers.map((number, index) => ({
          value: Number(number),
          index: this.items.length + index,

          visible: true,
          selected: false,
          highlight: false
        }))
      ]
    },

    select(item) {
      if (item.visible) {
        item.selected = !item.selected
      }

      // Select callback (validate and remove)
      if (this.selected.length === 2) {
        if (this.isValid(this.selected)) {
          this.removeSelected()
        } else {
          this.toggleSelected()
        }
      }
    },

    removeSelected() {
      this.history.push({
        type: 'remove',
        index: this.selected.map(item => item.index)
      })
      this.selected.map(item => {
        item.visible = false
        item.selected = false
      })
    },

    toggleSelected() {
      this.selected.map(item => (item.selected = !item.selected))
    },

    isValid([first, second]) {
      if (first && second) {
        if (this.isSiblings(first, second)) {
          if (first.value === second.value) {
            return true
          } else if (first.value + second.value === 10) {
            return true
          }
        }
      }

      return false
    },

    isSiblings(first, second) {
      const difference = Math.abs(
        this.visible.indexOf(first) - this.visible.indexOf(second)
      )

      return (
        difference === 1 ||
        this.upperNumberIndex(first) === second.index ||
        this.lowerNumberIndex(first) === second.index
      )
    },

    upperNumberIndex(number) {
      let index = this.items.indexOf(number)

      do {
        index = index - 9
      } while (this.items[index] && !this.items[index].visible)

      return index
    },

    lowerNumberIndex(number) {
      let index = this.items.indexOf(number)

      do {
        index = index + 9
      } while (this.items[index] && !this.items[index].visible)

      return index
    },

    duplicate() {
      this.history.push({
        type: 'duplicate',
        index: this.items.length
      })
      this.addNumbers(this.visible.map(item => item.value))
    },

    stepBack() {
      if (this.history.length > 0) {
        const step = this.history.pop()
        if (step.type === 'remove') {
          this.items[step.index[0]].visible = true
          this.items[step.index[1]].visible = true
        } else if (step.type === 'duplicate') {
          this.items.splice(step.index)
        }
      }
    },

    getHints() {
      return [].concat(
        ...this.visible.map((first, i) => {
          return this.visible
            .filter((second, j) => j > i && this.isValid([first, second]))
            .map(second => {
              return [first.index, second.index]
            })
        })
      )
    },

    showHint() {
      const hints = this.getHints()
      if (hints.length > 0) {
        const [i, j] = hints[Math.floor(Math.random() * hints.length)] // Random hint - indexes to highlight

        this.items[i].highlight = true
        this.items[j].highlight = true

        setTimeout(() => {
          this.items[i].highlight = false
          this.items[j].highlight = false
        }, 1000)
      } else {
      }
    }
  }
}
</script>
