<script setup lang="ts">
const emit = defineEmits(["click"]);
const { title } = defineProps<{
  title: string;
}>();
</script>
<template>
  <button
    class="bg-transparent hover:bg-starwars-yellow hover:text-black border border-starwars-yellow text-starwars-yellow px-4 py-2"
    @click="emit('click')"
  >
    {{ title }}
  </button>
</template>
