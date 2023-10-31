<script setup lang="ts">
const { calculateDisplay, displayFilm } = defineProps<{
  calculateDisplay: any;
  displayFilm: any;
}>();
const emit = defineEmits(["decrementIndex", "incrementIndex"]);
</script>
<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto bg-white">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 class="text-sm title-font text-gray-500">
            {{ displayFilm.title }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
            {{ calculateDisplay.name }}
          </h1>
          <div class="flex mb-4">
            <div
              class="cursor-pointer flex-grow text-black border-b-2 border-purple-950 py-2 text-lg px-1"
              @click="emit('decrementIndex')"
            >
              <span
                class="rounded p-2 border hover:bg-starwars-yellow border-black text-black bg-white"
                >Previous</span
              >
            </div>
            <div
              class="cursor-pointer text-right flex-grow text-black border-b-2 border-purple-950 py-2 text-lg px-1"
              @click="emit('incrementIndex')"
            >
              <span
                class="rounded p-2 border hover:bg-starwars-yellow border-black text-black bg-white"
              >
                Next</span
              >
            </div>
          </div>
          <div
            v-for="(item, index) in calculateDisplay"
            :key="index"
            class="flex border-t border-gray-200 py-2"
          >
            <span class="text-gray-500">{{ index }}</span>
            <span class="ml-auto text-gray-900">{{
              item?.includes("000Z") ? item?.split("T")[0] : item
            }}</span>
          </div>
        </div>
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 lg:block hidden object-cover object-center rounded"
          :src="`/img/${displayFilm?.title.replace(/\s+/g, '_')}.jpg`"
        />
      </div>
    </div>
  </section>
</template>
