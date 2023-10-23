<script setup lang="ts">
const isIntro = ref(true);
const { People, Planets, Films } = useSwapi();
const { people, planets, films } = useStarWarsApiState();

if (films.value.length === 0) {
  Films.getAll().then((result) => {
    films.value = result || films.value;
    return result;
  });
}
if (people.value.length === 0) {
  People.getAll().then((result) => {
    people.value = result || people.value;
    return result;
  });
}
if (planets.value.length === 0) {
  Planets.getAll().then((result) => {
    planets.value = result || planets.value;
    return result;
  });
}
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
