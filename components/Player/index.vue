<template>
  <div class="flex">
    <div class="flex-shrink-0 flex-grow-0">
      <avatar :user="player" />
    </div>
    <div class="flex-1 flex items-center">
      <div class="px-3 flex-1">
        <span class="block text-sm text-white mb-2">{{ player.username }}</span>
        <game-progress :value="player.progress" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/Player/Avatar'
import GameProgress from '~/components/Game/Progress'
export default {
  components: {
    Avatar,
    GameProgress
  },
  props: {
    player: {
      type: Object,
      required: true
    }
  }
}
</script>
