<script setup lang="ts">
const { calculateDisplay, displayFilm } = defineProps<{
  calculateDisplay: {
    name: string;
  };
  displayFilm: {
    title: string;
  };
}>();
const emit = defineEmits(["decrementIndex", "incrementIndex"]);
</script>
<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto bg-white">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {{ displayFilm.title }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
            {{ calculateDisplay.name }}
          </h1>
          <div class="flex mb-4 overflow-x-auto">
            <div
              class="cursor-pointer flex-grow text-black border-b-2 border-starwars-yellow py-2 text-lg px-1"
              @click="emit('decrementIndex')"
            >
              Previous
            </div>
            <div
              class="cursor-pointer flex-grow text-black border-b-2 border-starwars-yellow py-2 text-lg px-1"
              @click="emit('incrementIndex')"
            >
              Next
            </div>
          </div>
          <div
            v-for="(item, index) in calculateDisplay"
            :key="index"
            class="flex border-t border-gray-200 py-2"
          >
            <span class="text-gray-500">{{ index }}</span>
            <span class="ml-auto text-gray-900">{{ item }}</span>
          </div>
        </div>
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          :src="`/img/${displayFilm?.title.replace(/\s+/g, '_')}.jpg`"
        />
      </div>
    </div>
  </section>
</template>
