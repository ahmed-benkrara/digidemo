<template>
    <div class="w-full mt-[40px]">
        <swiper 
        :slides-per-view="'auto'" 
        :space-between="20" 
        :loop="true" 
        :modules="[Autoplay]"
        :autoplay="{delay: 1000, disableOnInteraction: false,pauseOnMouseEnter: true,}"
        >
            <swiper-slide v-for="(item, index) in comments" :key="index" :style="{ width: '440px' }">
                <div class="bg-[#F7F4FF] w-[440px] rounded-[15px] pl-[40px] pr-[25px] py-[24px] min-h-[218px] flex flex-col justify-between">
                    <p class="text-[#76777B] text-[14px] font-medium pr-[30px]">
                        {{ item.comment }}
                    </p>
                    <div class="w-full flex justify-between items-center mt-[20px]">
                        <div class="flex">
                            <img class="w-[45px] h-[45px]" :src="item.picture" alt="">
                            <div class="ml-2">
                                <h1 class="text-[#2C1D4E] font-medium text-[14px]">{{ item.name }}</h1>
                                <p class="text-[#76777B] text-[12px]">{{ item.position }}</p>
                            </div>
                        </div>
                        <div class="w-fit flex h-fit mt-[4px]">
                            <i class="fa-solid fa-star text-[#FFC700] mr-1"></i>
                            <i class="fa-solid fa-star text-[#FFC700] mr-1"></i>
                            <i class="fa-solid fa-star text-[#FFC700] mr-1"></i>
                            <i class="fa-solid fa-star text-[#FFC700] mr-1"></i>
                            <i class="fa-solid fa-star text-[#FFC700]"></i>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';
import Ellipse from '@/assets/icons/Ellipse.png'
import Ellipse1 from '@/assets/icons/Ellipse-1.png'
import Ellipse2 from '@/assets/icons/Ellipse-2.png'
import Ellipse3 from '@/assets/icons/Ellipse-3.png'

const comments = ref([
    {
        comment: 'Exceptional work! The team at DIGIMUSE transformed our website, making it more engaging and functional. Their attention to detail and commitment to our goals were impressive.',
        name: 'John Smith',
        position: 'CEO - XYZ Marketing',
        picture: Ellipse
    },
    {
        comment: 'Our collaboration with DIGIMUSE for software development was outstanding. They brought our vision to life, and the final product exceeded our expectations. Highly recommended!',
        name: 'Sarah johnson',
        position: 'CEO - AOS Inc',
        picture: Ellipse3
    },
    {
        comment: 'Our content strategy has undergone a remarkable transformation thanks to DIGIMUSE. Their expert guidance and creative insights have been a true game-changer for our content initiatives.',
        name: 'Jessica Taylor',
        position: 'Product Manager -  LMN Insights',
        picture: Ellipse1
    },
    {
        comment: 'The data cleaning and modeling services provided by DIGIMUSE have been transformative. Their expert team has unlocked the full potential of our data, leading to sharper insights and better decisions.',
        name: 'Michael Walker',
        position: 'Data Analyst - SwiftStream Media',
        picture: Ellipse2
    },
])

</script>
  
<style scoped>

</style>
  