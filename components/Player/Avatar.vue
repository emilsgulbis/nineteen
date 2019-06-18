<template>
  <img :src="adorableAPI" :alt="user.username" />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50
    },

    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    adorableAPI() {
      return `https://api.adorable.io/avatars/${this.size}/${this.user.key}.png`
    }
  }
}
</script>
