<template>
  <div class="flex flex-col">
    <transition-group name="players" tag="div" class="p-6 flex-1">
      <player
        key="fake"
        :player="{
          username: 'John Doe',
          progress: fakeProgress,
          key: 'fake'
        }"
        class="player-item mb-2"
      />

      <player
        v-for="player in otherPlayers"
        :key="player.key"
        class="player-item mb-2"
        :player="player"
      />
    </transition-group>

    <div v-if="userPlayer" class="p-6 bg-darkest">
      <player :player="userPlayer" />
    </div>
  </div>
</template>

<script>
import Player from '~/components/Player'

export default {
  components: {
    Player
  },

  data() {
    return {
      players: [], // TODO: store to access easily
      fakeProgress: 30
    }
  },

  computed: {
    userID() {
      return this.$store.state.user.id
    },

    otherPlayers() {
      return this.players.filter(player => player.key !== this.userID)
    },

    userPlayer() {
      return this.players.find(player => player.key === this.userID)
    }
  },

  mounted() {
    setInterval(() => {
      this.fakeProgress += Math.floor(Math.random() * Math.floor(30)) - 15
      if (this.fakeProgress < 0) {
        this.fakeProgress = 5
      } else if (this.fakeProgress > 95) {
        this.fakeProgress = 90
      }
    }, 1500)

    const players = this.$fireDb
      .ref()
      .child('players')
      .orderByChild('online')
      .equalTo(true)

    players.on('child_added', snap => {
      this.players.push({
        key: snap.key,
        username: snap.child('username').val(),
        progress: snap.child('progress').val() || 0,
        online: snap.child('online').val() || false
      })
    })

    players.on('child_changed', snap => {
      this.players = this.players.map(player => ({
        ...player,
        ...(snap.key === player.key && {
          progress: snap.child('progress').val() || 0,
          online: snap.child('online').val() || false
        })
      }))
    })

    players.on('child_removed', snap => {
      this.players = this.players.filter(({ key }) => key !== snap.key)
    })
  }
}
</script>
