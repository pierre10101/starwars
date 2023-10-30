<script setup lang="ts">
import { IFilm } from "#build/types/nuxt-swapi";
const route = useRoute();
const { species, films } = useStarWarsApiState();

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
  display.value = displayFilm.value.species.map((specie) => {
    const result = species.value.find((animal) => {
      return animal.url === specie;
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
  <div class="text-center py-4">
    <h2 class="text-2xl font-bold">{{ calculateDisplay.name }}</h2>
  </div>
  <div class="cursor-pointer card-header mx-auto flex justify-center py-6">
    <div
      class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
      @click="decrementIndex()"
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <div
      class="flex items-center justify-center w-12 h-12 bg-starwars-yellow hover:opacity-75 rounded-md"
      @click="incrementIndex()"
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
          fill="white"
        ></path>
      </svg>
    </div>
  </div>
  <div class="card-container w-96 mx-auto">
    <div class="card-info bg-white text-justify">
      <table class="table-auto mx-auto">
        <tbody>
          <tr v-for="(value, key) in calculateDisplay" :key="key">
            <td
              v-if="
                !Array.isArray(value) && !value?.toString().includes('https://')
              "
              class="py-2 px-4"
            >
              <strong>{{ key }}:</strong>
            </td>
            <td
              v-if="
                !Array.isArray(value) && !value?.toString().includes('https://')
              "
              class="py-2 px-4"
            >
              {{ value?.includes("000Z") ? value?.split("T")[0] : value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
