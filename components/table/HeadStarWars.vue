<script setup lang="ts">
interface Props {
  headings?: string[];
}

const { headings } = withDefaults(defineProps<Props>(), {
  headings: () => ["Director", "Release Date", "Description"],
});
const emit = defineEmits(["click"]);
</script>

<template>
  <thead
    class="cursor-pointer bg-transparent text-starwars-yellow text-xs font-normal mb-4"
  >
    <tr class="flex flex-wrap w-full items-center">
      <th
        v-for="(title, index) in headings"
        :key="index"
        class="hover:text-white px-4 py-2 h-12 text-center inline-flex items-center border border-starwars-yellow"
        @click="emit('click', title)"
      >
        {{ title }}
      </th>
    </tr>
  </thead>
</template>
