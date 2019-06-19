const env = require('dotenv').config()
const {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID
} = env.parsed || process.env

export default {
  mode: 'spa',
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
        apiKey: FIREBASE_API_KEY,
        authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com"`,
        databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID
      },
      production: {
        apiKey: FIREBASE_API_KEY,
        authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
        databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID
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
