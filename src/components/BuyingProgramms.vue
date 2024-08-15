<template>
  <div class="p-4" id="buying_programms">
    <BlockWrapper class="mx-auto flex flex-col justify-center">
      <p class="font-semibold text-xl">Программы покупки</p>
      <div>
        <ul
          class="wrapper flex flex-row gap-4 mt-4 overflow-y-auto md:justify-between md:pl-20 md:pr-20"
        >
          <li
            v-for="option in buyingOptions"
            :key="option.title"
            class="option p-4 flex flex-col items-center justify-center gap-2 shrink-0 grow-0 w-[200px] border-r-2 last:border-none md:border-none"
          >
            <div class="flex justify-center items-center">
              <img src="../assets/test.png" alt="icon" />
            </div>
            <p class="text-center">{{ option.title }}</p>
            <p class="text-gray-400 text-sm text-center">
              {{ option.description }}
            </p>
          </li>
        </ul>
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlockWrapper from "./BlockWrapper.vue";

const buyingOptions = ref([
  {
    icon: "",
    title: "Скидка с 1 м2",
    description: "Ощутимая скидка при 100% оплате",
  },
  {
    icon: "",
    title: "Авто актив",
    description: "Ваш автомобиль в счёт стоимости квартиры",
  },
  {
    icon: "",
    title: "Трейд Ин",
    description: "Поменяйте старую квартиру на новую",
  },
  {
    icon: "",
    title: "Рассрочка 0%",
    description: "Беспроцентная рассрочка от застройщика",
  },
]);
</script>
