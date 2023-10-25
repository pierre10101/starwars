<script setup lang="ts">
useHead({
  title: "Star Wars - Admin",
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
  <div class="bg-darth h-screen">
    <section class="py-20 md:py-40 bg-darth">
      <div class="container px-4 mx-auto">
        <table-base-star-wars />
      </div>
    </section>
  </div>
</template>
<style>
/* Custom CSS for scrollbar color */

/* For Webkit */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background-color: #ffe81f;
  border-radius: 2px;
}
</style>
