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

const extra = computed(() => {
  return route.query?.extra;
});

useHead({
  title: `Star Wars - extra info - ${displayFilm.value?.title}`,
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
        <div class="relative w-1/2 md:w-1/2 lg:w-1/3 md:h-auto">
          <img
            class="h-full w-full object-cover"
            :src="`/img/${displayFilm?.title.replace(/\s+/g, '_')}.jpg`"
            alt=""
          />
        </div>
        <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
          <div class="max-w-lg mx-auto">
            <div class="mb-10 pb-10 border-b">
              <h2 class="mb-2 text-center text-3xl font-bold font-heading">
                {{ extra?.toString().toUpperCase() }}
              </h2>
            </div>
            <div
              v-if="displayFilm.characters.length > 0"
              class="w-full lg:overflow-x-hidden overflow-x-scroll"
            >
              <list-star-wars-characters v-if="extra === 'characters'" />
              <list-star-wars-planets v-else-if="extra === 'planets'" />
              <list-star-wars-species v-else-if="extra === 'species'" />
              <list-star-wars-vehicles v-else-if="extra === 'vehicles'" />
              <list-star-wars-starships v-else-if="extra === 'starships'" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="displayFilm.characters.length > 0" class="text-center">
      <div
        class="cursor-pointer inline-block bg-transparent border border-starwars-yellow text-starwars-yellow font-bold font-heading py-5 px-8 rounded-md uppercase"
        @click="$router.go(-1)"
      >
        Back
      </div>
      >
    </div>
  </section>
</template>
