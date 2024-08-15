<template>
  <div
    class="flex flex-col gap-2 text-gray-400 font-semibold lg:flex-row lg:gap-8"
  >
    <div v-for="link in menuLinks" :key="link.title">
      <a
        class="cursor-pointer hover:text-gray-500"
        :href="`#${link.anchor_link}`"
        >{{ link.title }}</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuLinks = ref([
  {
    title: "О квартире",
    anchor_link: "about_apartment",
  },
  {
    title: "Параметры",
    anchor_link: "apartment_params",
  },
  {
    title: "Отделки",
    anchor_link: "finishing",
  },
  // {
  //   title: "Инфраструктура",
  //   anchor_link: "infrastructure",
  // },
  {
    title: "Программа",
    anchor_link: "buying_programms",
  },
  {
    title: "Предложение партнёров",
    anchor_link: "partners_offer",
  },
  {
    title: "О ЖК",
    anchor_link: "about_complex",
  },
  {
    title: "Параметры ЖК",
    anchor_link: "complex-params",
  },
]);
</script>

<style></style>
