<template>
    <div class="w-full mt-[50px]">
        <swiper 
        :slides-per-view="'auto'" 
        :space-between="20" 
        :loop="true" 
        :modules="[Autoplay]"
        :autoplay="{delay: 1000, disableOnInteraction: false,pauseOnMouseEnter: true,}"
        >
            <swiper-slide v-for="(image, index) in images" :key="index" :style="{ width: '407px' }">
                <img :src="image" class="w-[407px] h-[381px] mx-auto" alt="">
            </swiper-slide>
        </swiper>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';

const images = ref([
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
]);

</script>
  
<style scoped>

</style>
  