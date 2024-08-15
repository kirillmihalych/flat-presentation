<template>
  <div id="complex-params" class="p-4">
    <BlockWrapper>
      <p class="font-bold text-black mb-4">Основные параметры</p>
      <ul class="parms-list">
        <li
          class="flex"
          v-for="[key, value] in Object.entries(complexParamsObject)"
          :key="value"
        >
          <p class="text-gray-400">{{ key }}</p>
          <div class="flex-1 overflow-hidden text-gray-100">
            ...................................................................................................................................................................................................................................................................................
          </div>
          <p class="font-medium text-gray-800">
            {{ value }}
          </p>
        </li>
      </ul>
    </BlockWrapper>
  </div>
</template>

<script setup>
import BlockWrapper from "./BlockWrapper.vue";

const complexParamsObject = {
  "Город / Район": "Липецк",
  "Адрес расположения": "Неделина 6",
  "Блок-секций": "50 м2",
  Этажность: "23",
  "Класс здания": "Премиум",
  "Тип дома": "Кирпично монолитный",
  "Высота потолка": "3.00",
  "Варинаты отделки": "Под ключ",
  "Стадия строительства": "Строится",
  "Год сдачи": "2024-IV кв.",
};
</script>

<style scoped></style>
