<template>
  <div class="relative w-full h-1 radius bg-blue-900">
    <div
      class="absolute left-0 top-0 h-full transition"
      :class="{
        'bg-progress-0': value < 20,
        'bg-progress-20': value >= 20 && value < 40,
        'bg-progress-40': value >= 40 && value < 60,
        'bg-progress-60': value >= 60 && value < 80,
        'bg-progress-80': value >= 80 && value < 100
      }"
      :style="{ width: `${value}%` }"
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
  }
}
</script>

<style scoped>
.transition {
  transition: 0.25s background-color, 0.25s width;
}
</style>
