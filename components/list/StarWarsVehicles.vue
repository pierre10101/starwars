<script setup lang="ts">
import type { IFilm, IStarship } from "#build/types/nuxt-swapi";
const route = useRoute();
const { vehicles, films, starships } = useStarWarsApiState();
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
    const result = starships.value.find((ship: { url: string | IStarship }) => {
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

onMounted(() => {
  display.value = displayFilm.value.vehicles.map((vehicle) => {
    const result = vehicles.value.find((car) => {
      return car.url === vehicle;
    });
    if (result) {
      return result;
    }
    return [];
  });
});
</script>

<template>
  <card-star-wars-extra
    :calculate-display="calculateDisplay"
    @increment-index="incrementIndex()"
    @decrement-index="decrementIndex()"
  />
</template>
