<script setup lang="ts">
interface Props {
  headings: string[];
}

const { headings } = withDefaults(defineProps<Props>(), {
  headings: () => ["Director", "Release Date", "Description"],
});
</script>

<template>
  <thead
    class="border border-starwars-yellow bg-transparent text-starwars-yellow text-xs font-normal"
  >
    <tr>
      <th class="p-0">
        <div class="h-16 pl-8 pr-6 flex items-center rounded-tl-xl">
          <span class="ml-4 text-lg font-semibold">Name</span>
        </div>
      </th>
      <th v-for="(title, index) in headings" :key="index" class="p-0">
        <div class="h-16 pl-8 flex items-center">
          <span>{{ title }}</span>
        </div>
      </th>
    </tr>
  </thead>
</template>
