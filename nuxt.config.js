export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'bg-blue-500'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/custom.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', 'nuxt-fire'],

  eslint: {
    fix: true
  },

  fire: {
    useOnly: ['realtimeDb', 'auth'],
    config: {
      development: {
        apiKey: "AIzaSyBbMpTZysW9v7FZq3j32NkRugfP4va7Ngk",
        authDomain: "nineteen-19191.firebaseapp.com",
        databaseURL: "https://nineteen-19191.firebaseio.com",
        projectId: "nineteen-19191",
        storageBucket: "nineteen-19191.appspot.com",
        messagingSenderId: "168238774500",
        appId: "1:168238774500:web:24851221658e8c3c"
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
