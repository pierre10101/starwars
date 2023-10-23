<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
const isLoading = ref(true);
const { People, Planets, Films } = useSwapi();
const { people, planets, films, options, urls, selectDynamicData } =
  useStarWarsApiState();
const handleInfinityScroll = async () => {
  // Add data when intersection reached. Not relevant as 6 movies in total.
};
const selectDynamicOption = async (event: { value: string }) => {
  const [index, value] = event.value.split("/");
  options.value[index] = value;
  isLoading.value = true;
  films.value = await Films.findByUrl(urls.value);
  isLoading.value = false;
};
onMounted(async () => {
  if (films.value.length === 0) {
    const result = await Films.getAll();
    films.value = result || films.value;
  }
  if (people.value.length === 0) {
    const result = await People.getAll();
    people.value = result || people.value;
  }
  if (planets.value.length === 0) {
    const result = await Planets.getAll();
    planets.value = result || planets.value;
  }
  isLoading.value = false;
});
const reload = async () => {
  isLoading.value = true;
  const result = await Films.getAll();
  films.value = result || films.value;
  window.location.reload();
};
</script>

<template>
  <loader-darth-vader v-if="isLoading" />
  <select-dynamic-star-wars
    :select-data="selectDynamicData"
    @option="selectDynamicOption"
    @reset="reload()"
  />
  <!-- Table -->
  <div class="w-full overflow-x-auto">
    <table class="w-full min-w-max">
      <thead
        class="border border-starwars-yellow bg-transparent text-starwars-yellow text-xs font-normal"
      >
        <tr>
          <th class="p-0">
            <div class="h-16 pl-8 pr-6 flex items-center rounded-tl-xl">
              <label class="ml-4 text-lg font-semibold" for="">Name</label>
            </div>
          </th>
          <th class="p-0">
            <div class="h-16 pl-8 flex items-center">
              <span>Director</span>
            </div>
          </th>
          <th class="p-0">
            <div class="h-16 pl-8 flex items-center">
              <span>Release Date</span>
            </div>
          </th>
          <th class="p-0">
            <div class="h-16 pl-8 flex items-center">
              <span>Description</span>
            </div>
          </th>
          <th class="p-0">
            <div
              class="h-16 flex items-center justify-center rounded-tr-xl"
            ></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(film, index) in films"
          :key="index"
          v-intersection-observer="handleInfinityScroll"
          class="cursor-pointer border border-starwars-yellow text-white"
          @click="$router.push(`/admin/display?id=${film?.episode_id}`)"
        >
          <td class="p-0">
            <div class="flex h-20 items-center w-full pl-8 bg-transparent">
              <div class="flex ml-4 items-center">
                <img
                  class="h-9 w-9"
                  :src="`/img/${film?.title.replace(/\s+/g, '_')}.jpg`"
                  alt=""
                />
                <div class="ml-4">
                  <h4 class="text-base font-semibold leading-none">
                    {{ film?.title }}
                  </h4>
                </div>
              </div>
            </div>
          </td>
          <td class="p-0">
            <div class="flex h-20 pl-8 items-center">
              <span class="text-xs font-normal">{{ film?.director }}</span>
            </div>
          </td>
          <td class="p-0">
            <div class="flex h-20 pl-8 items-center">
              <span class="text-xs font-normal">{{ film?.release_date }}</span>
            </div>
          </td>
          <td class="p-0">
            <div class="flex h-20 pl-8 items-center">
              <span class="text-xs font-normal"
                >{{ film?.opening_crawl.slice(0, 100) }}..</span
              >
            </div>
          </td>
          <td class="p-0">
            <div
              class="flex h-20 px-12 items-center justify-center"
              @click="$router.push(`/admin/display?id=${film?.episode_id}`)"
            >
              <div
                class="cursor-pointer group inline-flex items-center font-base text-starwars-yellow font-semibold"
                href="#"
              >
                <span class="mr-2">More</span>
                <svg-animate-more />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
