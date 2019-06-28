<template>
  <footer class="text-center">
    <p class="text-lighter text-sm">
      Made with
      <span class="text-pink">
        <favorite-icon class="svg-inline fill-current" />
      </span>
      in
      <a href="https://front-end.lv/contact" target="_blank" rel="noopener"
        >Liepaja</a
      >
      &middot; Powered by
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener"
        title="Vue.js"
      >
        <vue-icon class="svg-inline" />
      </a>
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener"
        title="Nuxt.js"
      >
        <nuxt-icon class="svg-inline" />
      </a>
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener"
        title="Tailwind CSS"
      >
        <tailwind-icon class="svg-inline" />
      </a>
      <a
        href="https://firebase.google.com"
        target="_blank"
        rel="noopener"
        title="Firebase"
      >
        <firebase-icon class="svg-inline" />
      </a>
      <a
        href="https://netlify.com"
        target="_blank"
        rel="noopener"
        title="Netlify"
      >
        <netlify-icon class="svg-inline" />
      </a>
      &middot; Open Source
      <a
        href="https://github.com/emilsgulbis/nineteen"
        target="_blank"
        rel="noopener"
        title="Github"
      >
        <github-icon class="svg-inline fill-current" />
      </a>
    </p>
  </footer>
</template>

<script>
import FavoriteIcon from '~/assets/icons/favorite.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import VueIcon from '~/assets/icons/vue.svg?inline'
import NuxtIcon from '~/assets/icons/nuxt.svg?inline'
import FirebaseIcon from '~/assets/icons/firebase.svg?inline'
import TailwindIcon from '~/assets/icons/tailwind.svg?inline'
import NetlifyIcon from '~/assets/icons/netlify.svg?inline'

export default {
  components: {
    FavoriteIcon,
    GithubIcon,
    VueIcon,
    NuxtIcon,
    FirebaseIcon,
    TailwindIcon,
    NetlifyIcon
  }
}
</script>
