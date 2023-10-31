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
    <list-star-wars-characters
      v-if="extra === 'characters'"
      :display-film="displayFilm"
    />
    <list-star-wars-planets
      v-else-if="extra === 'planets'"
      :display-film="displayFilm"
    />
    <list-star-wars-species
      v-else-if="extra === 'species'"
      :display-film="displayFilm"
    />
    <list-star-wars-vehicles
      v-else-if="extra === 'vehicles'"
      :display-film="displayFilm"
    />
    <list-star-wars-starships
      v-else-if="extra === 'starships'"
      :display-film="displayFilm"
    />
    <div v-if="displayFilm.characters.length > 0" class="text-center">
      <div
        class="cursor-pointer mt-6 inline-block bg-transparent border border-starwars-yellow text-starwars-yellow font-bold font-heading py-5 px-8 rounded-md uppercase"
        @click="$router.go(-1)"
      >
        Back
      </div>
      >
    </div>
  </section>
</template>
