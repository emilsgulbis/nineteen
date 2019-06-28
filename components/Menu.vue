<template>
  <div class="sm-min:p-6">
    <div
      class="sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:flex sm:shadow w-200px"
    >
      <button
        v-for="action in actions"
        :key="action.key"
        class="block w-full px-6 py-3 sm:py-2 uppercase text-white font-bold sm-min:mb-2 focus:outline-none"
        :class="action.class"
        @click.prevent="action.function()"
      >
        <span class="sm:block hidden text-center text-2xl">
          <component :is="action.icon" class="svg-inline" />
        </span>
        <span class="sm:hidden">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import AutorenewIcon from '~/assets/icons/autorenew.svg?inline'
import HelpIcon from '~/assets/icons/help.svg?inline'
import PeopleIcon from '~/assets/icons/people.svg?inline'
import SearchIcon from '~/assets/icons/search.svg?inline'
import UndoIcon from '~/assets/icons/undo.svg?inline'

export default {
  components: {
    AutorenewIcon,
    HelpIcon,
    PeopleIcon,
    SearchIcon,
    UndoIcon
  },

  computed: {
    actions() {
      return [
        {
          key: 'back',
          label: 'Back',
          icon: 'undo-icon',
          function: () => {
            this.$store.dispatch('game/backHistory')
          },
          class: 'bg-blue'
        },

        {
          key: 'hint',
          label: 'Hint',
          icon: 'search-icon',
          function: () => {
            this.$store.dispatch('game/showHint')
          },
          class: 'bg-orange'
        },

        {
          key: 'new',
          label: 'New Game',
          icon: 'autorenew-icon',
          function: () => {
            this.$emit('new')
          },
          class: 'bg-salmon'
        },

        {
          key: 'tutorial',
          label: 'Tutorial',
          icon: 'help-icon',
          function: () => {
            alert('WIP')
          },
          class: 'bg-darkest'
        },

        {
          key: 'players',
          label: 'Players',
          icon: 'people-icon',
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
