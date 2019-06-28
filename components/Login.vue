<template>
  <loading v-if="loading" />

  <modal v-else :visible="!loggedIn">
    <form class="w-280px" @submit.prevent.stop="setUsername">
      <fieldset class="block mb-3">
        <label
          for="username"
          class="uppercase text-xs font-bold mb-2 block text-gray-100"
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
        <app-button class="bg-lime text-darkest ">
          Let's go
        </app-button>
      </div>
    </form>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'
import Loading from '~/components/Loading'
import AppButton from '~/components/Button'

export default {
  components: {
    Modal,
    Loading,
    AppButton
  },

  data() {
    return {
      username: ''
    }
  },

  computed: {
    loggedIn() {
      return this.$store.getters['user/loggedIn']
    },

    loading() {
      return this.$store.state.user.loading
    }
  },

  mounted() {
    this.$store.dispatch('user/signIn')
  },

  methods: {
    setUsername() {
      this.$store.dispatch('user/auth', this.username)
    }
  }
}
</script>
