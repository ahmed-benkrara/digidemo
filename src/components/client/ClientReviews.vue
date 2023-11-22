<template>
    <div class="w-full mt-[100px]">
        <div class="sm:w-[90%] md:w-[70%] mx-auto">
            <h1 v-scroll-reveal="{origin: 'top', scale: 1.2}" class="w-fit mx-auto text-center sm:text-[20px] md:text-[28px] font-bold txtgd">What our clients think</h1>
        </div>
        <CommentSlider />
    </div>
</template>

<script setup>
import CommentSlider from './CommentSlider.vue'
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

</style>