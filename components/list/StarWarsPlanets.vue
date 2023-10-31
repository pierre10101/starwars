<script setup lang="ts">
import type { IFilm } from "#build/types/nuxt-swapi";

const route = useRoute();
const { planets, films } = useStarWarsApiState();

const display = ref();
const index = ref(0);

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

onMounted(() => {
  display.value = displayFilm.value.planets.map((planet) => {
    const result = planets.value.find((celestial) => {
      return celestial.url === planet;
    });
    if (result) {
      return result;
    }
    return [];
  });
});

const calculateDisplay = computed(() => {
  const result = Object.entries(display.value[index.value]).reduce(
    (acc: any, [key, value]) => {
      if (!String(value).includes("https://") && !Array.isArray(value)) {
        acc[key] = value;
      }
      return acc;
    },
    {},
  );
  return result;
});

const decrementIndex = () => {
  index.value = index.value > 0 ? index.value - 1 : index.value;
};
const incrementIndex = () => {
  index.value =
    index.value < display.value.length - 1 ? index.value + 1 : index.value;
};
</script>

<template>
  <card-star-wars-extra
    :calculate-display="calculateDisplay"
    :display-film="displayFilm"
    @increment-index="incrementIndex()"
    @decrement-index="decrementIndex()"
  />
</template>
