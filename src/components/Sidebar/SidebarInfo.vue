<template>
  <div class="p-4 -mt-10 relative z-10 lg:mt-0">
    <BlockWrapper>
      <div class="aprtment-info">
        <p class="font-bold text-lg">{{ info.title }}</p>
        <div class="place-info flex justify-between items-center mt-1">
          <p class="text-gray-400">{{ info.address }}</p>
          <p class="text-gray-400">{{ info.place }}</p>
        </div>
        <div class="prices flex justify-between items-center mt-4">
          <p class="font-bold text-xl">{{ info.price }}</p>
          <p class="text-gray-400">{{ info.priceForMeter }}</p>
        </div>
        <div class="btns-container flex flex-col gap-2 mt-6">
          <button
            class="bg-indigo-500 p-2 rounded-md flex w-full items-center justify-center gap-1 text-slate-100"
          >
            <div class="flex items-center gap-2 w-32">
              <img src="../../assets/3dcube.png" alt="..." />
              <p>Планировка</p>
            </div>
          </button>
          <button
            class="bg-indigo-500 p-2 rounded-md flex w-full items-center justify-center gap-1 text-slate-100"
          >
            <div class="flex items-center gap-2 w-32">
              <img src="../../assets/grid-3.png" alt="..." />
              <p>План этажа</p>
            </div>
          </button>
        </div>
      </div>
      <hr class="mt-4 mb-4" />
      <div class="salesman flex items-center gap-4">
        <img
          src="../../assets/salesman.png"
          alt="..."
          class="w-11 h-11 bg-cover"
        />
        <div>
          <p class="text-gray-400">Ваш менеджер</p>
          <p>{{ info.salesman }}</p>
          <p class="text-gray-400">{{ info.number }}</p>
        </div>
      </div>
      <hr class="mt-4 mb-4" />
      <div class="building-company flex items-center gap-4">
        <img src="../../assets/Аватар.png" alt="аватар" />
        <div>
          <p class="text-gray-400">Застройщик</p>
          <p>{{ info.buildingCompany }}</p>
        </div>
      </div>
      <hr class="mt-4 mb-4" />
      <div class="flex items-center justify-center">
        <img src="../../assets/area_logo.png" alt="area logo" class="logo" />
      </div>
    </BlockWrapper>
  </div>
</template>

<script setup>
import BlockWrapper from "../BlockWrapper.vue";

const info = {
  title: "1-комн. квартира, 64.4м2",
  address: "Неделина 6",
  place: "ЖК Романово Сити",
  price: "3 900 000Р",
  priceForMeter: "95 000/м2",
  buildingCompany: "Ремстройсервис",
  salesman: "Вероника Сазонова",
  number: "+7 (903) 454 78 57",
  logo: "../assets/area_logo.png",
};
</script>

<style scoped></style>
