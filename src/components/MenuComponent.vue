<template>
  <div>
    <div class="p-4 z-0" v-show="!isMenuOpen">
      <div
        class="p-4 bg-white flex justify-between shadow rounded-xl lg:gap-4 lg:items-center"
      >
        <div class="hidden lg:flex gap-4">
          <img src="../assets/svg.png" alt="logo" />
          <MenuLinks />
        </div>
        <img
          src="../assets/ained-logo.png"
          alt="logo-ained"
          class="lg:hidden"
        />
        <button
          class="hidden lg:block bg-primary h-11 rounded-md text-white self-end pl-6 pr-6"
        >
          {{ PHONE_NUMBER }}
        </button>
        <button @click="openMenu" class="lg:hidden">
          <img src="../assets/menu.png" alt="toggle" />
        </button>
      </div>
    </div>

    <!-- mobile layout -->
    <div
      class="flex flex-col bg-gray-cards h-screen absolute right-0 left-0 top-0 z-10 lg:hidden"
      v-show="isMenuOpen"
    >
      <header class="lg:hidden">
        <div class="flex justify-between items-center content-center p-4">
          <img src="../assets/svg.png" alt="logo" />
          <button @click="closeMenu">
            <img src="../assets/close.png" alt="close" />
          </button>
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

const isMenuOpen = ref(false);
const closeMenu = () => (isMenuOpen.value = false);
const openMenu = () => (isMenuOpen.value = true);
</script>

<style></style>
