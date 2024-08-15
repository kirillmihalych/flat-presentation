<template>
  <div class="p-4" id="about_apartment">
    <BlockWrapper class="flex flex-col gap-4 text-gray-500">
      <div class="hidden md:block">
        <p class="font-bold text-black">О квартире</p>
        <p>{{ TEXT_INFO }}</p>
      </div>
      <div class="md:hidden">
        <div v-if="!readMoreActivated">
          <p>{{ TEXT_INFO.slice(0, 150) }}...</p>
          <button
            class="text-primary mt-4 flex items-center gap-2"
            @click="showMoreText"
          >
            <p>Узнать больше</p>
            <img src="../assets/arrow-down.png" alt="arrow-down-btn" />
          </button>
        </div>
        <div v-if="readMoreActivated" class="text-gray-500">
          <p>{{ TEXT_INFO }}</p>
          <button
            class="text-primary mt-4 flex items-center gap-2"
            @click="showLessText"
          >
            <p>Свернуть</p>
            <img
              src="../assets/arrow-down.png"
              class="rotate-180"
              alt="arrow-down-rotated"
            />
          </button>
        </div>
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlockWrapper from "./BlockWrapper.vue";

const TEXT_INFO = `Это премиальный отельный комплекс с гарантированной доходностью в
      Липецке!Готовый ликвидный бизнес под ключ, отличная альтернатива
      пенсии. Недвижимость которая будет работать 24/7, 365 дней в году без
      вашего участия с постоянным ростом доходности.Профессиональная команда
      позаботится о каждом номере, обеспечивая высокий 📈 стандарт обслуживания,
      что гарантирует стабильный и высокий уровень занятости номеров: от рекламы
      и бронирования до уборки и обслуживания — мы всё берём на себя.`;

const readMoreActivated = ref(false);
const showMoreText = () => (readMoreActivated.value = true);
const showLessText = () => (readMoreActivated.value = false);
</script>
