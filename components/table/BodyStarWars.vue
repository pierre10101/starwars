<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
const handleInfinityScroll = async () => {
  // Add data when intersection reached. Not relevant as 6 movies in total.
};
const { films } = useStarWarsApiState();
</script>

<template>
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
          >
            <span class="mr-2">More</span>
            <svg-animate-more />
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>
