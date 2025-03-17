// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      TOKEN_API: '',
      URL_REQUEST: ''
    }
  },
})
