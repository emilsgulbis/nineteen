<template>
  <div class="w-50px h-50px p-sm relative">
    <button
      class="w-full h-full text-blue-100 focus:outline-none rounded-full shadow font-bold"
      :class="{
        'bg-white text-blue-700': item.selected,
        'bg-blue-900 hover:bg-blue-700': !item.selected && item.visible,
        'bg-blue-500 text-blue-300': !item.visible,
        highlight: item.highlight
      }"
      @click.prevent="$emit('select')"
    >
      {{ item.value }}
    </button>

    <boom v-if="!item.visible" />
  </div>
</template>

<script>
import Boom from '~/components/Boom'
export default {
  components: {
    Boom
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
