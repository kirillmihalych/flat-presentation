<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 border-2 overflow-hidden"
    v-show="currentSlide === index"
  >
    <img :src="props.slide" class="w-full h-full object-cover" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps(["slide", "currentSlide", "index"]);

onMounted(() => console.log(props.slide));
</script>

<style></style>
