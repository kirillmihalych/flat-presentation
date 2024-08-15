<template class="test">
  <!-- absolute translate-x-1/2 -->
  <div class="carousel-indicators absolute bottom-4 left-2/4 -translate-x-2/4">
    <button
      class="carousel-indicator-item mr-4 border-2 w-4 h-4 m-1 rounded-full cursor-pointer"
      :class="[isActive(i) ? 'bg-indigo-500' : 'bg-slate-100']"
      v-for="i in totalSlides"
      :key="i"
      @click="emits('switch', i)"
    ></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["currentSlide", "totalSlides"]);
const emits = defineEmits(["switch"]);

const isActive = (i) => i === props.currentSlide + 1;
</script>
