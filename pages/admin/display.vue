<script setup lang="ts">
const route = useRoute()
const {
    films
} = await useStarWarsApiState();
const displayFilm = ref();
const id = ref();
onMounted(() => {
    id.value = route.query.id;
    displayFilm.value = films.value.find((film) => film?.episode_id == id.value);
})

const decrement = () => {
    if (id.value > 0) {
        id.value--;
    }
}

const increment = () => {
    if (id.value < 7) {
        id.value++;
    }
}
</script>

<template>
    <section class="relative py-20 bg-darth overflow-x-hidden">
        <div class="container mx-auto px-4">
            <div class="relative flex mb-20 flex-wrap bg-white">
                <div
                    class="hidden md:block absolute top-1/2 left-0 w-64 h-2/3 -ml-6 transform -translate-y-1/2 bg-starwars-yellow">
                </div>
                <div class="relative w-full md:w-1/2 lg:w-1/3 h-64 md:h-auto">
                    <img class="h-full w-full object-cover" :src="`/img/${displayFilm?.title.replace(/\s+/g, '_')}.jpg`"
                        alt="">
                </div>
                <div class="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
                    <div class="max-w-lg mx-auto">
                        <div class="mb-10 pb-10 border-b">
                            <h2 class="mb-2 text-3xl font-bold font-heading">{{ displayFilm?.title }}</h2>
                        </div>
                        <p class="mb-12 md:mb-20 text-lg text-gray-500">{{ displayFilm?.opening_crawl }}</p>
                        <div class="flex flex-wrap items-center">
                            <p class="font-bold font-heading text-gray-800">{{ displayFilm?.producer }}</p>
                            <div class="ml-auto flex items-center justify-end">
                                <div @click="decrement()"
                                    class="cursor-pointer mr-4 flex items-center justify-center w-12 h-12 bg-starwars-yellow hover:bg-black rounded-md">
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div @click="increment()"
                                    class="cursor-pointer flex items-center justify-center w-12 h-12 bg-starwars-yellow hover:bg-black rounded-md">
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center"><NuxtLink
                    class="inline-block bg-transparent border border-starwars-yellow text-starwars-yellow font-bold font-heading py-5 px-8 rounded-md uppercase"
                    to="/admin">Back</NuxtLink></div>
        </div>
    </section>
</template>