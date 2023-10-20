<script setup>
const emit = defineEmits(['start','skip'])
</script>
<template>
    <div class="flex items-center justify-center h-screen bg-stars bg-center">
        <div class="bg-transparent p-8 text-center">
            <h2 class="text-2xl font-bold text-starwars-yellow mb-4">Welcome to the Star Wars Universe</h2>
            <p class="text-gray-300 mb-6">May the Force be with you</p>
            <div class="flex justify-center space-x-3">
                <button class="bg-transparent hover:bg-starwars-yellow hover:text-black border border-starwars-yellow text-starwars-yellow px-4 py-2 mr-4" @click="emit('start')">Start</button>
                <button class="bg-transparent hover:bg-starwars-yellow hover:text-black border border-starwars-yellow text-starwars-yellow px-4 py-2" @click="emit('skip')">Skip</button>
            </div>
        </div>
    </div>
</template>
  