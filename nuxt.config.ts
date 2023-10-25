// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  experimental: {
    asyncContext: true,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swapi", "@vueuse/nuxt"],
});
