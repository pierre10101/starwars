<script setup lang="ts">
export interface Props {
    selectData?: Record<string, [{
        data?: Record<string, [{
            text: string;
            value: string;
        }]>;
        field?: string;
    }]>;
}

const { selectData } = withDefaults(defineProps<Props>(), {
    selectData: [{
        data: [
            {
                text: '',
                value: ''
            }
        ],
        field: 'test'
    }]
})
const emit = defineEmits('option')

onMounted(() => {
    console.log(selectData)
})

</script>

<template>
    <div class="py-6 px-8 md:px-12 mb-2 border border-starwars-yellow bg-transparent rounded-xl">
        <div>
            <div class="flex flex-wrap -mx-3 items-center">
                <div class="w-full xl:w-auto px-3 mb-4 xl:mb-0">
                    <span class="text-3xl font-heading font-semibold text-starwars-yellow">Sort by</span>
                </div>
                <div>
                    <div class="relative border border-starwars-yellow bg-transparent">
                        <select v-for="(selectOption, selectIndex) in selectData" :key="selectIndex"
                            @change="emit('option', $event.target.value)"
                            class="relative text-starwars-yellow w-full xl:w-67 pl-6 pr-6 pt-4 pb-3 text-md font-semibold bg-transparent outline-none appearance-none cursor-pointer">
                            <option disabled selected>{{ selectOption.field.toUpperCase() }}</option>
                            <option v-for="(option, optionIndex) in selectOption.data" :key="optionIndex"
                                class="text-black" :value="option.value">{{ option.text }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>