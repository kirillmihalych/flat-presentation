<template>
  <div class="h-lvh lg:p-12">
    <MenuComponent />
    <div class="presentation-wrapper lg:flex flex-row">
      <div class="basis-3/4">
        <ApartmentComponent />
        <ApartmentInfo />
        <ApartmentParams />
        <ApartmentFinishing />
        <!-- Инфраструктура с картой -->
        <BuyingProgramms />
        <BuyingOptions />
        <AboutComplex />
        <ApartmentComplexParams />
      </div>
      <SidebarInfo class="hidden lg:block basis-1/4" />
    </div>
    <ContactsComponent />
  </div>
</template>

<script setup>
// [ ] сделать вёрстку lg скрина и выше
// [ ] сделать навигацию по презентации
// [ ] отображать перекрывающее меню на мобилках правильно
import SidebarInfo from "@/components/Sidebar/SidebarInfo.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import ApartmentInfo from "@/components/ApartmentDescription.vue";
import ContactsComponent from "@/components/ContactsComponent.vue";
import ApartmentParams from "@/components/ApartmentParams.vue";
import ApartmentComponent from "@/components/ApartmentComponent.vue";
import ApartmentComplexParams from "@/components/ApartmentComplexParams.vue";
import ApartmentFinishing from "@/components/ApartmentFinishing.vue";
import BuyingOptions from "@/components/BuyingOptions.vue";
import BuyingProgramms from "@/components/BuyingProgramms.vue";
import AboutComplex from "@/components/AboutComplex.vue";
</script>

<style></style>
