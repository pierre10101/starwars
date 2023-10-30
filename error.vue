<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

const { error } = defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <div class="grid h-screen px-4 bg-darth place-content-center">
      <h1 class="tracking-widest text-gray-500 uppercase">
        {{ error?.statusCode }} {{ error?.message || "No Error Message Found" }}
      </h1>
      <button
        class="bg-transparent hover:bg-starwars-yellow hover:text-black border border-starwars-yellow text-starwars-yellow px-4 py-2 mr-4"
        @click="handleError"
      >
        Back
      </button>
    </div>
  </div>
</template>
