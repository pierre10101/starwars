<script setup lang="ts">
const isIntro = ref(true);
</script>

<template>
  <div>
    <modal-intro-star-wars
      v-if="isIntro"
      @start="isIntro = false"
      @skip="$router.push('/admin')"
    />
    <hero-star-wars-intro v-else />
  </div>
</template>
