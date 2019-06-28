<template>
  <div class="p-6">
    <div
      class="sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:flex sm:shadow w-200px"
    >
      <button
        v-for="action in actions"
        :key="action.key"
        class="block w-full px-6 py-3 uppercase text-white font-bold mb-2"
        :class="action.class"
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
          class: 'bg-blue'
        },

        {
          key: 'hint',
          label: 'Hint',
          icon: 'h',
          function: () => {
            this.$store.dispatch('game/showHint')
          },
          class: 'bg-orange'
        },

        {
          key: 'new',
          label: 'New Game',
          icon: 'n',
          function: () => {
            this.$store.dispatch('game/reset')
          },
          class: 'bg-salmon'
        },

        {
          key: 'tutorial',
          label: 'Tutorial',
          icon: 't',
          function: () => {
            alert('WIP')
          },
          class: 'bg-darkest'
        },

        {
          key: 'players',
          label: 'Players',
          icon: 'p',
          function: () => {
            alert('WIP')
          },
          class: 'sm-min:hidden bg-lime'
        }
      ]
    }
  }
}
</script>
