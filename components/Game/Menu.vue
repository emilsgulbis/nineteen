<template>
  <div class="w-200px">
    <button
      :class="linkClass"
      class="bg-green-100 hover:bg-green-200"
      @click.prevent="$emit('back')"
    >
      Back
    </button>
    <button
      :class="linkClass"
      class="bg-orange hover:bg-orange-500"
      @click.prevent="$emit('hint')"
    >
      Hint
    </button>
    <button
      :class="linkClass"
      class="bg-salmon hover:bg-salmon-500"
      @click.prevent="$emit('new')"
    >
      New game
    </button>
    <button
      :class="linkClass"
      class="bg-blue-900 hover:bg-blue-700"
      @click.prevent="$emit('tutorial')"
    >
      Tutorial
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkClass: 'block w-full px-6 py-3 uppercase text-white font-bold'
    }
  }
}
</script>
