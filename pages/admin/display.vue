<script setup lang="ts">
const route = useRoute();
const { films } = await useStarWarsApiState();
const displayFilm = ref();
onMounted(() => {
  displayFilm.value = films.value.find(
    (film) => film?.episode_id.toString() === route.query.id?.toString(),
  );
});
</script>

<template>
  <section class="relative py-20 bg-darth overflow-x-hidden">
    <div class="container mx-auto px-4">
      <div class="relative flex mb-20 flex-wrap bg-white">
        <div
          class="hidden md:block absolute top-1/2 left-0 w-64 h-2/3 -ml-6 transform -translate-y-1/2 bg-starwars-yellow"
        ></div>
        <div class="relative w-full md:w-1/2 lg:w-1/3 h-64 md:h-auto">
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
              <div class="ml-auto flex items-center justify-end"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink
          class="inline-block bg-transparent border border-starwars-yellow text-starwars-yellow font-bold font-heading py-5 px-8 rounded-md uppercase"
          to="/admin"
          >Back</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
