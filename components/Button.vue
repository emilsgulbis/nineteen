<template>
  <component
    :is="tag"
    class="text-xs font-bold uppercase px-6 py-2 rounded focus:outline-none"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    }
  }
}
</script>
