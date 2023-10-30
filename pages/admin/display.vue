<script setup lang="ts">
import type { IFilm } from "#build/types/nuxt-swapi";
const route = useRoute();
const { films } = useStarWarsApiState();

const displayFilm = computed(() => {
  const result = films.value.find(
    (film) => film?.episode_id.toString() === route.query.id?.toString(),
  );
  if (result) {
    return result;
  }
  return {
    characters: [],
    planets: [],
    species: [],
    starships: [],
    title: "_",
  } as unknown as IFilm;
});

useHead({
  title: `Star Wars - ${displayFilm.value?.title}`,
  meta: [
    { name: "title", property: "og:title", content: "Star Wars" },
    { name: "type", property: "og:type", content: "website" },
    {
      name: "description",
      property: "og:description",
      content: "A site dedicated to Starwars",
    },
    {
      name: "image",
      property: "og:image",
      content: `/img/${displayFilm.value?.title.replace(/\s+/g, "_")}.jpg`,
    },
    {
      name: "url",
      property: "og:url",
      content: "https://starwars.coffee.gives/",
    },
  ],
});
</script>

<template>
  <section class="relative py-20 bg-darth overflow-x-hidden">
    <div
      v-if="displayFilm.characters.length > 0"
      class="container mx-auto px-4"
    >
      <div class="relative flex mb-20 flex-wrap bg-white">
        <div
          class="hidden md:block absolute top-1/2 left-0 w-64 h-2/3 -ml-6 transform -translate-y-1/2 bg-starwars-yellow"
        ></div>
        <div class="relative w-full md:w-1/2 lg:w-1/3 md:h-auto">
          <img
            class="h-full w-full object-cover"
            :src="`/img/${displayFilm?.title.replace(/\s+/g, '_')}.jpg`"
            alt=""
          />
        </div>
        <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
          <div class="max-w-lg mx-auto">
            <div class="mb-10 pb-10 border-b">
              <h2 class="mb-2 text-3xl font-bold font-heading">
                {{ displayFilm?.title }}
              </h2>
            </div>
            <p class="mb-12 md:mb-20 text-lg text-gray-500">
              {{ displayFilm?.opening_crawl }}
            </p>
            <div class="flex flex-wrap items-center">
              <p class="font-bold font-heading text-gray-800">
                <span class="text-ms italic text-gray-500">Producer -</span>
                {{ displayFilm?.producer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Exstras -->
    <section
      v-if="displayFilm.characters.length > 0"
      class="flex justify-center container px-6 mx-auto bg-transparent"
    >
      <table-head-star-wars
        :headings="[
          'characters',
          'planets',
          'vehicles',
          'starships',
          'species',
        ]"
        @click="
          $router.push(
            `/admin/extra-info?id=${displayFilm.episode_id}&extra=${$event}`,
          )
        "
      />
    </section>
    <div v-if="displayFilm.characters.length > 0" class="text-center">
      <NuxtLink
        class="inline-block bg-transparent border border-starwars-yellow text-starwars-yellow font-bold font-heading py-5 px-8 rounded-md uppercase"
        to="/admin"
        >Back</NuxtLink
      >
    </div>
  </section>
</template>
