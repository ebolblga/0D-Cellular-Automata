// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  publicRuntimeConfig: {
    base: process.env.NODE_ENV == "production" ? "/0D-CA/" : "/"
  },
  app: {
    baseURL: process.env.NODE_ENV == "production" ? "/0D-CA" : "/",
    buildAssetsDir: "/nuxt/",
    cdnURL: "/0D-CA"
  },
  router: {
    base: process.env.NODE_ENV == "production" ? "/0D-CA/" : "/"
  }
})
