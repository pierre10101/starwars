<script setup lang="ts">
import { useStorage } from "@vueuse/core";
export interface Props {
  selectData: {
    data: {
      text: string;
      value: string;
      selected: boolean;
    }[];
    field: string;
  }[];
}
const { selectData } = defineProps<Props>();
const emit = defineEmits(["option", "reset"]);
const selected = useStorage<string[]>("selected_item_star_wars", [
  "",
  "",
  "",
  "",
  "",
]);
</script>

<template>
  <div
    class="py-6 px-8 md:px-12 mb-2 border border-starwars-yellow bg-transparent rounded-xl"
  >
    <div>
      <div class="flex flex-wrap -mx-3 items-center">
        <div class="w-full xl:w-auto px-3 mb-4 xl:mb-0">
          <span class="text-3xl font-heading font-semibold text-starwars-yellow"
            >Filter By</span
          >
        </div>
        <div>
          <div class="flex lg:flex-nowrap lg:space-x-3 flex-wrap">
            <select
              v-for="(selectOption, selectIndex) in selectData"
              :key="selectIndex"
              v-model="selected[selectIndex]"
              class="border w-32 border-starwars-yellow blur:border-starwars-yellow text-starwars-yellow p-3 text-md font-semibold bg-transparent cursor-pointer outline-none appearance-none"
              @change="emit('option', $event.target)"
            >
              <option class="bg-starwars-yellow" disabled value="" selected>
                {{ selectOption.field.toUpperCase() }}
              </option>
              <option
                v-for="(option, optionIndex) in selectOption.data"
                :key="optionIndex"
                :value="`${selectOption.field}/${option.value}`"
                class="text-black bg-starwars-yellow border-starwars-yellow"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
        <div
          class="cursor-pointer border border-starwars-yellow p-3 lg:ml-auto text-md font-semibold text-starwars-yellow"
          @click="emit('reset'), (selected = ['', '', '', '', ''])"
        >
          <span>RESET</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
