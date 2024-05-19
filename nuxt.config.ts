import { NuxtConfig } from '@nuxt/types';



const config: NuxtConfig = {

  
  target: 'static',

  head: {
    title: 'acnh-fish',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', body:true }
    ]
  },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'animate.css/animate.min.css'
    // other CSS files...
  ],

  plugins: [
    // Add your plugins here
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Poppins: [700], // Corrected the format
      }
    }],
  ],

  modules: [
    'nuxt-time'
    // No need for 'bootstrap-vue/nuxt' if using Bootstrap 5 directly
  ],

  build: {
    // Add build configuration options here
  }
};

export default config;
