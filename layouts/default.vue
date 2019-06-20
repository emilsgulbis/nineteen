<template>
  <div class="flex min-h-screen">
    <player-list class="bg-blue-700 w-320px p-6 sm:hidden" />

    <div class="flex-1 p-6">
      <nuxt />
    </div>

    <login />
    <app-menu />
  </div>
</template>

<script>
import PlayerList from '~/components/Player/List'
import Login from '~/components/Login'
import AppMenu from '~/components/Menu'

export default {
  components: {
    PlayerList,
    Login,
    AppMenu
  }
}
</script>
