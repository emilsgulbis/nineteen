<template>
  <modal :visible="visible">
    <div class="w-320px">
      <div class="bg-salmon px-6 py-3 rounded -mx-6 -mt-8">
        <p class="text-lg text-lightest uppercase font-bold">{{ title }}</p>
      </div>
      <div class="py-8">
        <p class="text-lightest">{{ text }}</p>
      </div>
      <div class="text-center">
        <app-button class="bg-salmon text-white mr-2" @click.prevent="confirm">
          Yes
        </app-button>

        <app-button
          class="bg-lightest text-darkest"
          @click.prevent="visible = false"
        >
          Cancel
        </app-button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'
import AppButton from '~/components/Button'

export default {
  components: {
    Modal,
    AppButton
  },

  props: {
    title: {
      type: String,
      default: 'Continue?'
    },

    text: {
      type: String,
      default: 'Are you sure?'
    }
  },

  data() {
    return {
      visible: false
    }
  },

  methods: {
    show() {
      this.visible = true
    },

    confirm() {
      this.$emit('confirm')
      this.visible = false
    }
  }
}
</script>
