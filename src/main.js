import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// swiper
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
