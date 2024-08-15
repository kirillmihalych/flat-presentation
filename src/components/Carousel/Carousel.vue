<template>
  <div>
    <div class="carousel flex justify-center">
      <div
        class="carousel-inner relative overflow-hidden w-full h-[300px] rounded-xl rounded-b-none"
      >
        <CarouselItem
          v-for="(slide, index) in slides"
          :key="index"
          :slide="slide.url"
          :currentSlide="currentSlide"
          :index="index"
        />
        <CarouselControls
          :currentSlide="currentSlide"
          :totalSlides="slides.length"
          @prev="currentSlide--"
          @next="currentSlide++"
        />

        <CarouselIndicators
          :currentSlide="currentSlide"
          :totalSlides="slides.length"
          @switch="(payload) => (currentSlide = payload - 1)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

const props = defineProps(["slides"]);
const currentSlide = ref(0);
</script>
