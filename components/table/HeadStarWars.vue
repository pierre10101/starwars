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
      <th v-for="(title, index) in headings" :key="index" class="px-3">
        <div class="h-16 pl-8 hover:opacity-25" @click="emit('click', title)">
          <span>{{ title }}</span>
        </div>
      </th>
    </tr>
  </thead>
</template>
