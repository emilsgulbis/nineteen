<template>
  <div class="flex min-h-screen">
    <sidebar />
    <div class="flex-1 p-6">
      <nuxt />
    </div>

    <login />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Login from '~/components/Login'
export default {
  components: {
    Sidebar,
    Login
  }
}
</script>
