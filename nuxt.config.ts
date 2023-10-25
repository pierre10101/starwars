// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swapi", "@vueuse/nuxt"],
});
