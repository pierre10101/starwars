<script setup lang="ts">
const isIntro = ref(true);
</script>

<template>
    <div>
        <modal-intro v-if="isIntro" @start="isIntro = false" @skip="$router.push('/admin')" />
        <hero-star-wars-intro v-else />
    </div>
</template>