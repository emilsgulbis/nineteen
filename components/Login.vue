<template>
  <transition name="zoom">
    <div v-if="loggedIn" class="fixed inset-0 flex items-center justify-center">
      <div class="fixed inset-0 bg-blue-900 opacity-75 z-0"></div>
      <form
        class="zoom-in rounded bg-blue-500 px-6 pt-8 pb-6 mx-auto shadow-xl w-320px relative z-10"
        @submit.prevent.stop="setUsername"
      >
        <fieldset class="block mb-3">
          <label
            for="username"
            class="uppercase text-xs font-bold mb-2 block text-blue-100"
            >Enter username</label
          >
          <input
            id="username"
            v-model="username"
            type="text"
            class="rounded bg-gray-200 focus:bg-gray-300 focus:outline-none px-4 py-2 w-full text-sm"
            placeholder="Username"
            autofocus
          />
        </fieldset>

        <div class="text-center">
          <button
            class="text-xs font-bold uppercase px-6 py-2 bg-blue-300 text-blue-100 rounded"
          >
            Let's go
          </button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },

  computed: {
    loggedIn() {
      return !this.$store.getters['user/loggedIn']
    }
  },

  mounted() {
    this.$store.dispatch('user/signIn')
  },

  methods: {
    setUsername() {
      this.$store.dispatch('user/setUsername', this.username)
    }
  }
}
</script>
