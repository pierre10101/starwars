<script setup lang="ts">
const isIntro = ref(true);
</script>

<template>
    <div>
        <modal-star-wars v-if="isIntro" @start="isIntro = false" @skip="$router.push('/admin')" />
        <hero-star-wars v-else />
    </div>
</template>