<script setup lang="ts">
import type { IFilm } from "#build/types/nuxt-swapi";
const route = useRoute();
const { starships, films } = useStarWarsApiState();

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
  display.value = displayFilm.value.starships.map((starship) => {
    const result = starships.value.find((ship) => {
      return ship.url === starship;
    });
    if (result) {
      return result;
    }
    return [];
  });
});

const calculateDisplay = computed(() => {
  return display.value[index.value];
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
    @increment-index="incrementIndex()"
    @decrement-index="decrementIndex()"
  />
</template>
