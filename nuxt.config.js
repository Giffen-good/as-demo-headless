import path from 'path'
import dynamicRoutes from './dynamicRoutes'
import Config from './wp-config'

export default {
  titleTemplate: (titleChunk) => {
    // If undefined or blank then we don't need the hyphen
    return titleChunk ? `${titleChunk} - Nuxt Headless` : 'Nuxt Headless'
  },
  generate: {
    routes: dynamicRoutes,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'as_demo',
    bodyAttrs: {
      class: 'min-h-full font-sans',
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt Headless',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Nuxt, headless, CMS, Vue, Vue.js, Nuxt.js',
      },
      {
        hid: 'image',
        name: 'image',
        content:
          'https://as-demo.rock-media.ca/wp-content/uploads/2021/11/hero-1024x576.png',
      },
      { hid: 'name', itemprop: 'name', content: 'Nuxt Headless' },
      {
        hid: 'description',
        itemprop: 'description',
        content: 'Nuxt Headless',
      },
      {
        hid: 'image',
        itemprop: 'image',
        content:
          'https://as-demo.rock-media.ca/wp-content/uploads/2021/11/hero-1024x576.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Nuxt Headless',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Nuxt Headless',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@moustacheDsign' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@moustacheDsign',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://as-demo.rock-media.ca/wp-content/uploads/2021/11/hero-1024x576.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'My Website Image',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nuxt Headless',
      },
      { hid: 'og:url', property: 'og:url', content: Config.url },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Nuxt Headless Website',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Nuxt Headless',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://as-demo.rock-media.ca/wp-content/uploads/2021/11/hero-1024x576.png',
      },
      {
        hid: 'og:image:url',
        property: 'og:image:url',
        content:
          'https://as-demo.rock-media.ca/wp-content/uploads/2021/11/hero-1024x576.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '628',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/tailwind.css', '~assets/css/nav-icon.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    'nuxt-purgecss',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
    paths: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', '**/*.svg'],
  },
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700'],
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
  },
}
