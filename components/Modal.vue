<template>
  <transition name="zoom">
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center">
      <div
        class="fixed inset-0 bg-darkest opacity-75 z-0"
        @click="$emit('close')"
      ></div>
      <div
        class="zoom-in rounded bg-dark px-6 pt-8 pb-6 mx-auto shadow-xl relative z-10"
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
