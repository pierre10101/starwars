<script setup lang="ts">
import {
  IPlanet,
  ISpecie,
  IStarship,
  IVehicle,
  IFilm,
} from "#build/types/nuxt-swapi";
const route = useRoute();
const { people, vehicles, species, starships, planets, films } =
  useStarWarsApiState();
const displayCharacters = ref();
const displayPlanet = ref();
const displayStarship = ref();
const displaySpecies = ref();
const displayVehicles = ref();
const displayCharacterIndex = ref(0);
const displayPlanetIndex = ref(0);
const displayStarshipIndex = ref(0);
const displaySpeciesIndex = ref(0);
const displayVehiclesIndex = ref(0);

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
  // if (!displayFilm.value) {
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: "Cannot find the Movie",
  //   });
  // }
  displayCharacters.value = displayFilm.value.characters.map((character) => {
    const result = people.value.find((person) => {
      return person.url === character;
    });
    if (result) {
      return result;
    }
    return [];
  });
  displayPlanet.value = displayFilm.value.planets.map((planet) => {
    const result = planets.value.find((celestial) => {
      return celestial.url === planet;
    });
    if (result) {
      return result;
    }
    return [];
  });
  displayStarship.value = displayFilm.value.starships.map((starship) => {
    const result = starships.value.find((ship) => {
      return ship.url === starship;
    });
    if (result) {
      return result;
    }
    return [];
  });
  displaySpecies.value = displayFilm.value.species.map((specie) => {
    const result = species.value.find((animal) => {
      return animal.url === specie;
    });
    if (result) {
      return result;
    }
    return [];
  });
  displayVehicles.value = displayFilm.value.vehicles.map((vehicle) => {
    const result = vehicles.value.find((car) => {
      return car.url === vehicle;
    });
    if (result) {
      return result;
    }
    return [];
  });
});

const calculateCharacters = computed(() => {
  return displayCharacters.value[displayCharacterIndex.value];
});
const calculatePlanets = computed(() => {
  return displayPlanet.value[displayPlanetIndex.value] as IPlanet;
});
const calculateSpecies = computed(() => {
  return displaySpecies.value[displaySpeciesIndex.value] as ISpecie;
});
const calculateStarships = computed(() => {
  return displayStarship.value[displayStarshipIndex.value] as IStarship;
});
const calculateVehicles = computed(() => {
  return displayVehicles.value[displayVehiclesIndex.value] as IVehicle;
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
      class="flex flex-row flex-wrap lg:justify-start sm:justify-center"
    >
      <div class="lg:w-1/2 w-full mt-16 px-4">
        <div class="flex mb-20 justify-center bg-white">
          <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
            <div class="max-w-lg mx-auto">
              <div class="mb-2 pb-2 border-b flex flex-row space-x-2">
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  CHARACTER -
                </h2>
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  {{ calculateCharacters.name }}
                </h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Height</span> -
                    {{ calculateCharacters.height }}<br />
                    <span class="font-semibold">Mass</span> -
                    {{ calculateCharacters.mass }}
                  </p>
                  <p class="text-gray-700">
                    <span class="font-semibold">Hair Colour</span> -
                    {{ calculateCharacters.hair_color }}<br />
                    <span class="font-semibold">Skin Colour</span> -
                    {{ calculateCharacters.skin_color }}
                  </p>
                </div>
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Eye Colour</span> -
                    {{ calculateCharacters.eye_color }}<br />
                    <span class="font-semibold">Birth Year</span> -
                    {{ calculateCharacters.birth_year }}<br />
                    <span class="font-semibold">Gender</span> -
                    {{ calculateCharacters.gender }}<br />
                    <span class="font-semibold">Homeworld</span> -
                    {{
                      planets?.find(
                        (value) => value.url === calculateCharacters.homeworld,
                      )?.name
                    }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <div
                  class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
                  @click="
                    displayCharacterIndex =
                      displayCharacterIndex > 0
                        ? displayCharacterIndex - 1
                        : displayCharacterIndex
                  "
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
                  @click="
                    displayCharacterIndex =
                      displayCharacterIndex < displayCharacters.length - 1
                        ? displayCharacterIndex + 1
                        : displayCharacterIndex
                  "
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
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full mt-16 px-4">
        <div class="flex mb-20 justify-center bg-white">
          <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
            <div class="max-w-lg mx-auto">
              <div class="mb-2 pb-2 border-b flex flex-row space-x-2">
                <h2 class="mb-2 text-3xl font-bold font-heading">Planets -</h2>
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  {{ calculatePlanets.name }}
                </h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Climate</span> -
                    {{ calculatePlanets.climate }}<br />
                    <span class="font-semibold">Diameter</span> -
                    {{ calculatePlanets.diameter }}
                  </p>
                  <p class="text-gray-700">
                    <span class="font-semibold">Gravity</span> -
                    {{ calculatePlanets.gravity }}<br />
                    <span class="font-semibold">Orbital Period</span> -
                    {{ calculatePlanets.orbital_period }}
                  </p>
                </div>
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Population</span> -
                    {{ calculatePlanets.population }}<br />
                    <span class="font-semibold">Terrain</span> -
                    {{ calculatePlanets.terrain }}<br />
                    <span class="font-semibold">Rotation Period</span> -
                    {{ calculatePlanets.rotation_period }}<br />
                    <span class="font-semibold">Surface Water</span> -
                    {{ calculatePlanets.surface_water }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <div
                  class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
                  @click="
                    displayPlanetIndex =
                      displayPlanetIndex > 0
                        ? displayPlanetIndex - 1
                        : displayPlanetIndex
                  "
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
                  @click="
                    displayPlanetIndex =
                      displayPlanetIndex < displayPlanet.length - 1
                        ? displayPlanetIndex + 1
                        : displayPlanetIndex
                  "
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
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full mt-16 px-4">
        <div class="flex mb-20 justify-center bg-white">
          <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
            <div class="max-w-lg mx-auto">
              <div class="mb-2 pb-2 border-b flex flex-row space-x-2">
                <h2 class="mb-2 text-3xl font-bold font-heading">Species -</h2>
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  {{ calculateSpecies.name }}
                </h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Average Height</span> -
                    {{ calculateSpecies.average_height }}<br />
                    <span class="font-semibold">Average Lifespan</span> -
                    {{ calculateSpecies.average_lifespan }}
                  </p>
                  <p class="text-gray-700">
                    <span class="font-semibold">Designation</span> -
                    {{ calculateSpecies.designation }}<br />
                    <span class="font-semibold">Eye Colours</span> -
                    {{ calculateSpecies.eye_colors }}
                  </p>
                </div>
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Hair Colours</span> -
                    {{ calculateSpecies.hair_colors }}<br />
                    <span class="font-semibold">Language</span> -
                    {{ calculateSpecies.language }}<br />
                    <span class="font-semibold">Skin Colours</span> -
                    {{ calculateSpecies.skin_colors }}<br />
                    <span class="font-semibold">Homeworld</span> -
                    {{
                      planets?.find(
                        (value) => value.url === calculateSpecies.homeworld,
                      )?.name
                    }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <div
                  class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
                  @click="
                    displaySpeciesIndex =
                      displaySpeciesIndex > 0
                        ? displaySpeciesIndex - 1
                        : displaySpeciesIndex
                  "
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
                  @click="
                    displaySpeciesIndex =
                      displaySpeciesIndex < displaySpecies.length - 1
                        ? displaySpeciesIndex + 1
                        : displaySpeciesIndex
                  "
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
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full mt-16 px-4">
        <div class="flex mb-20 justify-center bg-white">
          <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
            <div class="max-w-lg mx-auto">
              <div class="mb-2 pb-2 border-b flex flex-row space-x-2">
                <h2 class="mb-2 text-3xl font-bold font-heading">Vehicles -</h2>
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  {{ calculateVehicles.name }}
                </h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Cargo Capacity</span> -
                    {{ calculateVehicles.cargo_capacity }}<br />
                    <span class="font-semibold">Consumables</span> -
                    {{ calculateVehicles.consumables }}
                  </p>
                  <p class="text-gray-700">
                    <span class="font-semibold">Cost in Credit</span> -
                    {{ calculateVehicles.cost_in_credits }}<br />
                    <span class="font-semibold">Crew</span> -
                    {{ calculateVehicles.crew }}
                  </p>
                </div>
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Pilots</span> -
                    {{ calculateVehicles.pilots }}<br />
                    <span class="font-semibold">Manufacturer</span> -
                    {{ calculateVehicles.manufacturer }}<br />
                    <span class="font-semibold">Max atmosphering Speed</span> -
                    {{ calculateVehicles.max_atmosphering_speed }}<br />
                    <span class="font-semibold">Model</span> -
                    {{ calculateVehicles.model }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <div
                  class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
                  @click="
                    displayVehiclesIndex =
                      displayVehiclesIndex > 0
                        ? displayVehiclesIndex - 1
                        : displayVehiclesIndex
                  "
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
                  @click="
                    displayVehiclesIndex =
                      displayVehiclesIndex < displayVehicles.length - 1
                        ? displayVehiclesIndex + 1
                        : displayVehiclesIndex
                  "
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
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full mt-16 px-4">
        <div class="flex mb-20 justify-center bg-white">
          <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
            <div class="max-w-lg mx-auto">
              <div class="mb-2 pb-2 border-b flex flex-row space-x-2">
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  STARSHIPS -
                </h2>
                <h2 class="mb-2 text-3xl font-bold font-heading">
                  {{ calculateStarships.name }}
                </h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">MGLT</span> -
                    {{ calculateStarships.MGLT }}<br />
                    <span class="font-semibold">Cargo Capacity</span> -
                    {{ calculateStarships.cargo_capacity }}
                  </p>
                  <p class="text-gray-700">
                    <span class="font-semibold">Consumables</span> -
                    {{ calculateStarships.consumables }}<br />
                    <span class="font-semibold">Cost in Credit</span> -
                    {{ calculateStarships.cost_in_credits }}
                  </p>
                </div>
                <div class="p-4">
                  <p class="text-gray-700">
                    <span class="font-semibold">Crew</span> -
                    {{ calculateStarships.crew }}<br />
                    <span class="font-semibold">Hyperdrive Rating</span> -
                    {{ calculateStarships.hyperdrive_rating }}<br />
                    <span class="font-semibold">Manufacturer</span> -
                    {{ calculateStarships.manufacturer }}<br />
                    <span class="font-semibold">Starship Class</span> -
                    {{ calculateStarships.starship_class }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <div
                  class="mr-4 flex items-center justify-center w-12 h-12 bg-black hover:opacity-75 rounded-md"
                  @click="
                    displayStarshipIndex =
                      displayStarshipIndex > 0
                        ? displayStarshipIndex - 1
                        : displayStarshipIndex
                  "
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
                  @click="
                    displayStarshipIndex =
                      displayStarshipIndex < displayStarship.length - 1
                        ? displayStarshipIndex + 1
                        : displayStarshipIndex
                  "
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
            </div>
          </div>
        </div>
      </div>
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
