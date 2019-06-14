<template>
  <div class="relative w-full h-1 radius bg-blue-900">
    <div
      class="absolute left-0 top-0 h-full bg-gray-300"
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
