<template>
  <div>
    <div
      class="sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:bg-blue-100 sm:flex sm:shadow w-200px"
    >
      <button
        v-for="action in actions"
        :key="action.key"
        :class="[desktopClass, action.class]"
        @click.prevent="action.function()"
      >
        <span class="sm:block hidden">{{ action.icon }}</span>
        <span class="sm:hidden">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktopClass: 'block w-full px-6 py-3 uppercase text-white font-bold',
      mobileClass: 'w-1/5 py-3 px-2 text-white'
    }
  },

  computed: {
    actions() {
      return [
        {
          key: 'back',
          label: 'Back',
          icon: 'b',
          function: () => {
            this.$store.dispatch('game/backHistory')
          },
          class: 'bg-green-100 hover:bg-green-200'
        },

        {
          key: 'hint',
          label: 'Hint',
          icon: 'h',
          function: () => {
            this.$store.dispatch('game/showHint')
          },
          class: 'bg-orange hover:bg-orange-500'
        },

        {
          key: 'new',
          label: 'New Game',
          icon: 'n',
          function: () => {
            this.$store.dispatch('game/reset')
          },
          class: 'bg-salmon hover:bg-salmon-500'
        },

        {
          key: 'tutorial',
          label: 'Tutorial',
          icon: 't',
          function: () => {
            alert('WIP')
          },
          class: 'bg-blue-900 hover:bg-blue-700'
        },

        {
          key: 'players',
          label: 'Players',
          icon: 'p',
          function: () => {
            alert('WIP')
          },
          class: 'sm-min:hidden bg-blue-300 hover:bg-blue-100'
        }
      ]
    }
  }
}
</script>
