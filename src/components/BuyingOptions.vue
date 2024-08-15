<template>
  <div class="p-4" id="partners_offers">
    <BlockWrapper>
      <p class="font-semibold text-xl mb-4">Предложения партнёров</p>
      <div
        class="pt-2 pb-2 border-b-[1px]"
        v-for="option in options"
        :key="option.id"
      >
        <div class="flex justify-between">
          <p>
            {{ option.title }}
          </p>
          <button @click="toggleOption(option)" class="flex items-center gap-2">
            <p class="text-indigo-500 text-sm">
              {{ option.banks.length }} предложения
            </p>
            <img src="../assets/arrow-down.png" alt="arrow-down-icon" />
          </button>
        </div>
        <div v-if="option.isOpen">
          <div
            v-for="bank in option.banks"
            :key="bank.title"
            class="lg:flex lg:w-full"
          >
            <img src="../assets/сбер.png" :alt="option.title" />
            <ul class="flex justify-between items-center lg:w-full lg:ml-14">
              <li>
                <p class="text-gray-400">Плажёт</p>
                <p>{{ bank.платёж }}</p>
              </li>
              <li>
                <p class="text-gray-400">Ставка</p>
                <p>{{ bank.ставка }}</p>
              </li>
              <li>
                <p class="text-gray-400">Срок кредита</p>
                <p>{{ bank.срок_кредита }}</p>
              </li>
              <li class="hidden lg:block">
                <p class="text-gray-400">Акредитованные объекты</p>
                <p>{{ bank.акредитованные_объекты }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlockWrapper from "./BlockWrapper.vue";

const options = ref([
  {
    id: 1,
    title: "Семейная ипотека",
    banks: [
      {
        title: "Сбербанк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "ВТБ",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "Дом РФ Банк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
    ],
    isOpen: true,
  },
  {
    id: 2,
    title: "Господдержка",
    banks: [
      {
        title: "Россельхозбанк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "Альфа-банк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
    ],
    isOpen: false,
  },
  {
    id: 3,
    title: "IT ипотека",
    banks: [
      {
        title: "Россельхозбанк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "Альфа-банк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
    ],
    isOpen: false,
  },
  {
    id: 4,
    title: "Льготная новостройка",
    banks: [
      {
        title: "Россельхозбанк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "Альфа-банк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "ВТБ",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
      {
        title: "Дом РФ Банк",
        logo: "",
        платёж: "от 9 620Р/мес",
        ставка: "от 4.8%",
        срок_кредита: "3-30 лет",
        акредитованные_объекты: "5",
      },
    ],
    isOpen: false,
  },
]);

const toggleOption = (option) => {
  option.isOpen = !option.isOpen;
};
</script>

<style scoped></style>
