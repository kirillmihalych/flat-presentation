<template>
  <div class="p-4">
    <BlockWrapper class="flex flex-col gap-4 text-gray-500">
      <p class="font-bold text-black">О квартире</p>
      <div v-if="!readMoreActivated">
        <p>
          {{ TEXT_INFO.slice(0, 150) }}
        </p>
        <button class="text-primary mt-4" @click="showMoreText">
          Узнать больше >
        </button>
      </div>
      <div v-if="readMoreActivated" class="text-gray-500">
        <p>{{ TEXT_INFO }}</p>
        <button class="text-primary mt-4" @click="showLessText">
          Свернуть <
        </button>
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
