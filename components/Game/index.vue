<template>
  <div class="flex flex-1">
    <div class="flex-1">
      <div class="w-450px mx-auto sm:pb-10">
        <div class="p-sm">
          <game-progress
            :value="progress"
            class="z-10 sm:fixed sm:top-0 sm:left-0 sm:h-2"
          />
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
            Duplicate remaining
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameItem from './Item'
import GameProgress from './Progress'

export default {
  components: {
    GameItem,
    GameProgress
  },

  computed: {
    items() {
      return this.$store.state.game.items
    },

    progress() {
      return this.$store.getters['game/progress']
    }
  },

  methods: {
    select(item) {
      this.$store.dispatch('game/toggle', item)
    },

    duplicate() {
      this.$store.dispatch('game/duplicate')
    }
  }
}
</script>
