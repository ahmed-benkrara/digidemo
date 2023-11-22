<template>
    <div class="mt-[70px]">
        <p v-scroll-reveal="{origin: 'right'}" class="w-fit mx-auto text-purple-500 font-medium text-[16px]">Our Features</p>
        <h1 v-scroll-reveal="{origin: 'left'}" class="w-fit mx-auto text-center sm:text-[20px] md:text-[28px] font-bold text-[#2C1D4E]">When you choose <span class="gradianttxt">Digimuse</span><br>everybody wins</h1>
        <div class="sm:w-[85%] md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 mt-[35px]">
            <FeatureCard v-scroll-reveal="{origin: 'top'}" background="#F7F4FF" :icon="star" color="#9569FF" title="Creative Excelence" description="We deliver top-tier digital services, fueled by creativity and unmatched industry experience."/>
            <FeatureCard v-scroll-reveal="{origin: 'top'}" background="#FEF4FB" :icon="lap" color="#DC22AD" title="Tailored Solutions" description="Experience websites uniquely tailored to your needs, reflecting your distinct brand identity."/>
            <FeatureCard v-scroll-reveal="{origin: 'top'}" background="#F7F4FF" :icon="buq" color="#9569FF" title="Punctual Performance" description="Our commitment to on-time delivery and unwavering dependability ensures peace of mind for your projects."/>
        </div>
    </div>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
import star from '@/assets/icons/featurestar.png'
import lap from '@/assets/icons/featurelap.png'
import buq from '@/assets/icons/featurebuq.png'
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '100px',
})
</script>