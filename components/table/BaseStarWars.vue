<script setup lang="ts">
const { selectDynamicData, isLoading, filteredFilms } = useStarWarsApiState();
const { selectDynamicOption, reload } = useStarWarsApiActions();
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
      <table-head-star-wars />
      <table-body-star-wars :filtered-films="filteredFilms" />
    </table>
  </div>
</template>
