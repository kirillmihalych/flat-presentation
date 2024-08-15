<template>
  <div>
    <div class="p-4">
      <Carousel :slides="imgs" />
    </div>
    <SidebarInfo class="md:hidden" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Carousel from "./Carousel/Carousel.vue";
import SidebarInfo from "./Sidebar/SidebarInfo.vue";
import { ref } from "vue";
import fetchImages from "@/api/getImages";

const imgs = ref([]);
const getImages = async () => {
  try {
    imgs.value = await fetchImages();
  } catch (error) {
    console.log(error.message.toString());
  }
};

onMounted(() => getImages());
</script>

<style lang="scss" scoped></style>
