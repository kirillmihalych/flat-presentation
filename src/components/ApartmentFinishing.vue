<template>
  <div class="p-4" id="finishing">
    <BlockWrapper>
      <p class="mb-8 font-semibold text-xl">Виды отделок</p>
      <div class="btns-container flex gap-2 mb-2">
        <button
          @click="openOptionFirst"
          class="p-3 font-semibold rounded-md w-full"
          :class="{
            'text-indigo-500': isFirstOptionOpen,
            'bg-indigo-200': isFirstOptionOpen,
          }"
        >
          Отделка под ключ
        </button>
        <button
          @click="openSecondOption"
          class="p-3 font-semibold rounded-md w-full"
          :class="{
            'text-indigo-500': isSecondOptionOpen,
            'bg-indigo-200': isSecondOptionOpen,
          }"
        >
          Предчистовая
        </button>
      </div>
      <Carousel :slides="imgs" />
      <div class="options-container">
        <div v-show="isFirstOptionOpen">
          <p class="font-semibold text-lg">Отделка под ключ</p>
          <ul>
            <li
              v-for="option in finishingOptionsFirst"
              :key="option"
              class="text-gray-400"
            >
              - {{ option }}
            </li>
          </ul>
        </div>
        <div v-show="isSecondOptionOpen">
          <p class="font-semibold text-lg">Предчистовая</p>
          <ul>
            <li
              v-for="option in finishingOptionsSecond"
              :key="option"
              class="text-gray-400"
            >
              - {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import fetchImages from "@/api/getImages";
import BlockWrapper from "./BlockWrapper.vue";
import Carousel from "./Carousel/Carousel.vue";

const imgs = ref([]);

const getImages = async () => {
  try {
    imgs.value = await fetchImages();
  } catch (error) {
    console.log(error);
  }
};

const isFirstOptionOpen = ref(true);
const isSecondOptionOpen = ref(false);

const finishingOptionsSecond = [
  `Предчистовая отделка`,
  "Без мебели и бытовой технике",
  "Базовая вентиляции",
  "Шумоизоляция",
  "Вентиляции электро и водоснабжение",
];

const finishingOptionsFirst = [
  `Чистовая отделка "под ключ"`,
  "Мебелировка и бытовая техника",
  "Новые вентиляции",
  "Усиленная шумоизоляция",
  "Новые вентиляции электро и водоснабжение",
];

onMounted(() => getImages());

const openOptionFirst = () => {
  isFirstOptionOpen.value = true;
  isSecondOptionOpen.value = false;
};

const openSecondOption = () => {
  isFirstOptionOpen.value = false;
  isSecondOptionOpen.value = true;
};
</script>

<style lang="scss" scoped></style>
