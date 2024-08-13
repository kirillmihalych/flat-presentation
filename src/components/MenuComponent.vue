<template>
  <div>
    <div class="p-4 z-0" v-show="!isMenuOpen">
      <div class="p-4 bg-white flex justify-between shadow rounded-xl">
        <img src="../assets/logo-ained.png" alt="logo-ained" />
        <button @click="openMenu">toggle</button>
      </div>
    </div>
    <div
      class="flex flex-col bg-bgPrimary h-screen absolute right-0 left-0 top-0 z-10"
      v-show="isMenuOpen"
    >
      <header>
        <div class="flex justify-between items-center content-center p-4">
          <img src="../assets/svg.png" alt="logo" />
          <button @click="closeMenu">X</button>
        </div>
        <hr />
      </header>
      <div class="p-4">
        <MenuLinks />
      </div>
      <footer class="p-4 mt-auto mb-6">
        <button class="bg-primary w-full h-11 rounded-md text-white self-end">
          {{ PHONE_NUMBER }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import MenuLinks from "./MenuLinks.vue";
import { ref } from "vue";

const PHONE_NUMBER = "+7 903 454 78 57";

const isMenuOpen = ref(true);
const closeMenu = () => (isMenuOpen.value = false);
const openMenu = () => (isMenuOpen.value = true);
</script>

<style></style>
