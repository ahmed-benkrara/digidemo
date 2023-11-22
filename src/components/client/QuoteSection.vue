<template>
    <div class="mt-[120px] w-full bg-[#312A5D] sm:py-[45px] md:py-[50px] lg:py-[80px] sm:px-[40px] md:px-[60px] lg:px-[100px]">
        <p v-scroll-reveal="{origin: 'top', scale: 0.5}" class="text-white text-center font-bold sm:text-[24px] md:text-[30px] lg:text-[38px]">“Unlocking Digital Excellence, One Click at a Time Elevate Your Online Presence with DigiMuse Solutions.”</p>
    </div>
</template>

<script setup>
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '50px',
})
</script>