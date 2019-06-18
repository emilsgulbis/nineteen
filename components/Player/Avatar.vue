<template>
  <img :src="adorableAPI" />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50
    },

    userId: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    adorableAPI() {
      return `https://api.adorable.io/avatars/${this.size}/${this.userId}.png`
    }
  }
}
</script>
