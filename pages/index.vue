<script setup lang="ts">
useHead({
  title: "Star Wars - HomePage",
  meta: [
    { name: "description", content: "A site dedicated to Starwars" },
    { property: "og:title", content: "Star Wars" },
    { property: "og:description", content: "A site dedicated to Starwars" },
    { property: "og:image", content: "/img/yoda.jpeg" },
  ],
});
const isIntro = ref(true);
const { loadData } = useStarWarsApiActions();
onMounted(() => {
  loadData();
});
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
