<template>
  <div class="flex flex-col gap-2 text-gray-400 font-semibold">
    <div v-for="link in menuLinks" :key="link">
      <span>{{ link }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuLinks = ref([
  "О квартире",
  "Параметры",
  "Отделки",
  "Инфраструктура",
  "Программа",
  "Предложение партнёров",
  "О ЖК",
  "Параметры ЖК",
]);
</script>

<style></style>
