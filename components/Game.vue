<template>
  <div>
    <button
      v-for="item in game.items"
      :key="item.index"
      class="w-36px h-36px bg-white focus:outline-none rounded shadow mx-7px mb-7px"
      :class="{
        'bg-gray-200': item.selected,
        'hover:bg-gray-100': !item.selected && item.visible,
        'bg-gray-900': !item.visible
      }"
      @click.prevent="game.select(item)"
    >
      {{ item.value }}
    </button>

    <button @click.prevent="game.duplicate()">+</button>
  </div>
</template>

<script>
import { Game } from '~/utils/classes'
const numbers = '1,2,3,4,5,6,7,8,9,1,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9'

export default {
  data() {
    return {
      game: new Game()
    }
  },

  computed: {
    selected() {
      return this.game.selected
    },

    siblings() {
      return this.game.isSiblings()
    }
  },

  mounted() {
    this.game.addNumbers(numbers.split(','))
  }
}
</script>
