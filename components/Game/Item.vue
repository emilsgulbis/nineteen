<template>
  <div class="w-50px h-50px p-sm relative">
    <button
      class="w-full h-full text-lighter focus:outline-none rounded-full shadow font-bold"
      :class="{
        'bg-white text-darker': item.selected,
        'bg-darkest': !item.selected && item.visible,
        'bg-dark text-light': !item.visible,
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
