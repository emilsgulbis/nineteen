<template>
  <div class="flex min-h-screen">
    <player-list class="bg-darker w-320px p-6 sm:hidden" />

    <div class="flex-1 flex flex-col">
      <div class="flex-1">
        <nuxt class="p-6" />
      </div>

      <app-footer class="p-6" />
    </div>

    <app-menu @new="$refs.confirm.show()" />

    <login />
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
import AppFooter from '~/components/Footer'

export default {
  components: {
    PlayerList,
    Login,
    AppMenu,
    Confirm,
    AppFooter
  }
}
</script>
