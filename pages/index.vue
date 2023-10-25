<script setup lang="ts">
useHead({
  title: "Star Wars - HomePage",
  meta: [
    { name: "title", property: "og:title", content: "Star Wars" },
    { name: "type", property: "og:type", content: "website" },
    {
      name: "description",
      property: "og:description",
      content: "A site dedicated to Starwars",
    },
    { name: "image", property: "og:image", content: "/img/yoda.jpeg" },
    {
      name: "url",
      property: "og:url",
      content: "https://starwars.coffee.gives/",
    },
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
