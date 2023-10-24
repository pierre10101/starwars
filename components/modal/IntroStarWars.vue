<script setup>
const emit = defineEmits(["start", "skip"]);
</script>
<template>
  <div class="flex items-center justify-center h-screen bg-stars bg-center">
    <div class="bg-transparent p-8 text-center">
      <h2 class="text-2xl font-bold text-starwars-yellow mb-4">
        Welcome to the Star Wars Universe
      </h2>
      <p class="text-gray-300 mb-6">
        May the Force be with you (hint: start takes a few seconds)
      </p>
      <div class="flex justify-center space-x-3">
        <button-star-wars-yellow title="Start" @click="emit('start')" />
        <button-star-wars-yellow title="Skip" @click="emit('skip')" />
      </div>
    </div>
  </div>
</template>
