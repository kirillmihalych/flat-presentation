<template>
  <div class="hidden lg:block test absolute bottom-2 left-2 w-[150px] h-16">
    <div class="controls-wrapper relatvie">
      <button
        class="absolute h-12 w-16 cursor-pointer left-0"
        @click="emit('prev')"
        :disabled="props.currentSlide === 0"
      >
        <img src="../../assets/prev-btn.png" alt="prev-btn" />
      </button>
      <button
        class="absolute h-12 w-16 cursor-pointer right-10"
        @click="emit('next')"
        :disabled="props.currentSlide === props.totalSlides - 1"
      >
        <img src="../../assets/next-btn.png" alt="next-btn" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["currentSlide", "totalSlides"]);

const emit = defineEmits(["prev", "next"]);
</script>

<style></style>
