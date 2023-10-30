<script setup lang="ts">
import { IFilm } from "#build/types/nuxt-swapi";
const { filteredFilms } = defineProps<{
  filteredFilms: (IFilm | null)[];
}>();
</script>

<template>
  <section
    v-for="(film, index) in filteredFilms"
    :key="index"
    class="cursor-pointer max-w-sm rounded m-3 shadow-lg border border-starwars-yellow"
    @click="$router.push(`/admin/display?id=${film?.episode_id}`)"
  >
    <img
      class="w-full"
      :src="`/img/${film?.title.replace(/\s+/g, '_')}.jpg`"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ film?.title }}</div>
      <p class="text-white text-base">
        {{ film?.opening_crawl.slice(0, 100) }} ..
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-starwars-yellow rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ film?.director }}</span
      >
      <span
        class="inline-block bg-starwars-yellow rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >Released: {{ film?.release_date }}</span
      >
    </div>
  </section>
</template>
