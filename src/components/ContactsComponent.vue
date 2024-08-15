<template>
  <div class="p-4">
    <BlockWrapper class="hidden lg:flex justify-between items-center p-4">
      <img src="../assets/svg.png" alt="logo" class="mt-4 mb-4" />
      <div>
        <p class="font-medium text-lg">
          {{ PHONE_NUMBER }}
        </p>
        <ul class="flex justify-between items-center mt-2">
          <li>
            <a href="#">
              <img src="../assets/vk.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/inst.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/telegram.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p class="text-gray-500">{{ COMPANY_NAME }}</p>
    </BlockWrapper>
    <BlockWrapper class="lg:hidden flex flex-col gap-4 items-start">
      <div class="wrapper">
        <div class="w-[140px]">
          <p class="font-medium text-lg">
            {{ PHONE_NUMBER }}
          </p>
          <ul class="flex justify-between items-center mt-2">
            <li>
              <a href="#">
                <img src="../assets/vk.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/inst.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/telegram.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <img src="../assets/svg.png" alt="logo" class="mt-4 mb-4" />
        <p class="text-gray-500">{{ COMPANY_NAME }}</p>
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import BlockWrapper from "./BlockWrapper.vue";

const PHONE_NUMBER = "8 800 302-60-09";
const COMPANY_NAME = "© Цифровая недвижимость, 2024";
</script>

<style></style>
