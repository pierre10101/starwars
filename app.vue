<script>
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
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
