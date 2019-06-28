<template>
  <div class="relative w-full h-1 radius bg-light">
    <div
      class="absolute left-0 top-0 h-full transition bg-lime"
      :style="{ width: `${value}%`, opacity }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    opacity() {
      return (this.value < 10 ? 10 : this.value) / 100
    }
  }
}
</script>

<style scoped>
.transition {
  transition: 0.25s opacity, 0.25s width;
}
</style>
