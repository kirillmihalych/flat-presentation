<template>
  <div class="p-4" id="apartment_params">
    <BlockWrapper>
      <p class="font-bold text-black mb-4">Основные параметры</p>
      <ul class="parms-list">
        <li
          v-for="[key, value] in Object.entries(apartmentParamsObject)"
          class="flex"
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

const apartmentParamsObject = {
  Комнаты: "2 комн.",
  Площадь: "100 м2",
  "Жилая площадь": "50 м2",
  "Площадь кухни": "30 м2",
  "Год сдачи": "2022",
  Этаж: "13 из 19",
  "Высота потолка": "3.00",
  "Варианты отделки": "Под ключ",
};
</script>

<style></style>
