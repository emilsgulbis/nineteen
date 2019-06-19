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
      @new="$store.dispatch('game/reset')"
    />
  </div>
</template>

<script>
import GameItem from './Item'
import GameMenu from './Menu'
import GameProgress from './Progress'

export default {
  components: {
    GameItem,
    GameMenu,
    GameProgress
  },

  computed: {
    items() {
      return this.$store.state.game.items
    },

    visible() {
      return this.$store.getters.visible
    },

    progress() {
      return this.$store.getters.progress
    }
  },

  watch: {
    progress: {
      handler(progress) {
        // this.$store.dispatch('game/update', {
        //   progress,
        //   history: this.history
        // })
      }
    }
  },

  created() {
    this.$store.dispatch('game/reset')
  },

  methods: {
    select(item) {
      this.$store.dispatch('game/toggle', item)
    },

    duplicate() {
      this.$store.dispatch('game/duplicate')
    },

    stepBack() {
      this.$store.dispatch('game/backHistory')
    },

    showHint() {
      this.$store.dispatch('game/showHint')
    }
  }
}
</script>
