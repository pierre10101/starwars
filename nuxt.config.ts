// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      ENV: process.env.NODE_ENV,
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swapi", "@vueuse/nuxt"],
});
