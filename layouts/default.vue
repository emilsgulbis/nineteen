<template>
  <div class="flex min-h-screen">
    <sidebar />
    <div class="flex-1 p-6">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>
