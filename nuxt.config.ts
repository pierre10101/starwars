// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.NODE_ENV !== "development",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swapi",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Starwars Movies",
      short_name: "starwars_movies",
      theme_color: "#FFE81F",
      icons: [
        {
          src: "Attack_of_the_Clones.jpg",
          sizes: "192x192",
          type: "image/jpg",
        },
        {
          src: "Attack_of_the_Clones.jpg",
          sizes: "512x512",
          type: "image/jpg",
        },
        {
          src: "Attack_of_the_Clones.jpg",
          sizes: "512x512",
          type: "image/jpg",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});
