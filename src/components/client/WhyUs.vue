<template>
    <div class="sm:w-[90%] md:w-[80%] mx-auto lg:w-full mt-[100px] grid lg:grid-cols-2 lg:gap-x-[50px] xl:gap-x-[100px]">
        <div class="lg:pl-[50px] xl:pl-[100px]">
            <img v-scroll-reveal="{origin: 'left', scale: 0.5}" class="w-full md:h-[420px] object-cover rounded-[20px] block" src="./../../assets/images/why.jpg" alt="">
        </div>
        <div class="md:pr-[50px]">
            <h1 v-scroll-reveal="{origin: 'right', scale: 0.5}" class="sm:text-[22px] md:text-[28px] font-bold txtgd md:mb-2 lg:mb-4 mt-4 w-fit">Why to work with us ?</h1>
            <p v-scroll-reveal="{origin: 'right', scale: 0.5}" class="sm:mt-3 lg:mt-0 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16x] font-medium text-black text-left">At DIGIMUSE, we're more than just colleagues; we're a close-knit community of creative tech enthusiasts. When you join us, you become part of a team that thrives on innovation and creativity. Your ideas are celebrated, your skills are refined, and your professional growth is our priority. What sets us apart is our commitment to fostering a diverse culture and encouraging out-of-the-box thinking. Working with us means embarking on a journey of growth, creativity, and extraordinary accomplishments.</p>
            <RouterLink to='/'><div v-scroll-reveal="{origin: 'right', scale: 0.5}" class="btn text-white sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[500] rounded-[22px] px-[30px] py-[7px] w-fit sm:mt-[14px] md:mt-[26px] lg:mt-[31px]">About us</div></RouterLink>
        </div>
    </div>
</template>

<script setup>
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '50px',
})
</script>

<style scoped>
.txtgd{
    background: linear-gradient(180deg, #DC22AD 0%, #9569FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.btn{
    border-radius: 22px;
    background: linear-gradient(180deg, #DC22AD -15.79%, #9569FF 100%);
    /* box-shadow: 0px 0px 5px 0px #9569FF; */
}
</style>