<template>
  <div class="flex min-h-screen">
    <player-list class="bg-darker w-320px p-6 sm:hidden" />

    <div class="flex-1 p-6">
      <nuxt />
    </div>

    <login />
    <app-menu @new="$refs.confirm.show()" />
    <confirm
      ref="confirm"
      text="This game will be deleted!"
      @confirm="$store.dispatch('game/reset')"
    />
  </div>
</template>

<script>
import PlayerList from '~/components/Player/List'
import Login from '~/components/Login'
import AppMenu from '~/components/Menu'
import Confirm from '~/components/Confirm'

export default {
  components: {
    PlayerList,
    Login,
    AppMenu,
    Confirm
  }
}
</script>
