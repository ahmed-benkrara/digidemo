<!-- <template>
    <div class="grid grid-cols-2 w-[95%] mx-auto">
        <div class="flex items-end">
            <div class="h-fit">
                <h1 class="md:text-[30px] lg:text-[40px] xl:text-[49px] gradianttxt font-bold">Transforming Visions<br>into Digital Realities</h1>
                <p class="font-medium md:text-[13px] lg:text-[14px] xl:text-[16px] md:mt-[10px] lg:mt-[13px] lg:max-w-[500px] xl:max-w-[544px]">Let's turn your visions into realities. Get in touch with DigiMuse Solutions and embark on a journey to digital excellence.</p>
                <RouterLink to='/'><div class="gradiantbg text-white md:text-[12px] lg:text-[13px] xl:text-[14px] font-[500] rounded-[22px] px-[26px] py-[10px] w-fit md:mt-[26px] lg:mt-[31px]">Get in touch</div></RouterLink>
            </div>
        </div>
        <div class="">
            <img class="md:w-[460px] md:h-[341px] lg:w-[480px] lg:h-[381px] xl:w-[493px] xl:h-[394px] ml-auto" src="./../../assets/images/headerimage.png" alt="">
        </div>
    </div>
</template> -->


<template>
    <div class="sm:grid md:grid-cols-2 sm:gap-[20px] md:gap-2 w-[95%] mx-auto">
        <div class="sm:order-2 md:order-1 flex items-end">
            <div v-scroll-reveal="{origin: 'top'}"  class="h-fit max-w-[545px] mx-auto">
                <h1 v-scroll-reveal="{origin: 'left'}" class="sm:text-[40px] sm:text-center md:text-left md:text-[30px] lg:text-[40px] xl:text-[49px] gradianttxt font-bold">Transforming Visions into Digital Realities</h1>
                <p v-scroll-reveal="{origin: 'right'}" class="sm:text-center md:text-left font-medium sm:text-[16px] md:text-[13px] lg:text-[14px] xl:text-[16px] sm:mt-[10px] lg:mt-[13px] lg:max-w-[500px] xl:max-w-[544px]">Let's turn your visions into realities. Get in touch with DigiMuse Solutions and embark on a journey to digital excellence.</p>
                <RouterLink to='/'><div class="sm:hidden md:block gradiantbg text-white sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[500] rounded-[22px] px-[26px] py-[10px] w-fit sm:mx-auto md:mx-0 sm:mt-[15px] md:mt-[26px] lg:mt-[31px]">Get in touch</div></RouterLink>
                <div class="sm:flex justify-center gap-2 mt-[15px] md:hidden">
                    <RouterLink to='/'><div class="gradiantbg text-white sm:text-[14px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[500] rounded-[22px] px-[26px] py-[10px] w-fit sm:mx-auto md:mx-0 sm:mt-[15px] md:mt-[26px] lg:mt-[31px]">Get in touch</div></RouterLink>
                    <!-- <RouterLink to='/'><div class="gradiantbg text-white sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[500] rounded-[22px] px-[26px] py-[10px] w-fit sm:mx-auto md:mx-0 sm:mt-[15px] md:mt-[26px] lg:mt-[31px]">Our solutions</div></RouterLink> -->
                </div>
            </div>
        </div>
        <div class="sm:order-1 md:order-2">
            <!-- <img class="sm:w-[460px] sm:h-[341px] md:w-[460px] md:h-[341px] lg:w-[480px] lg:h-[381px] xl:w-[493px] xl:h-[394px] sm:mr-auto md:mr-0 ml-auto" src="https://img.freepik.com/vecteurs-libre/illustration-concept-revision-code_114360-4289.jpg?w=740&t=st=1699996510~exp=1699997110~hmac=51f451ee3667725af9a136473d26a48f99fc3e084e04fdd92e7bb84d05d343cd" alt=""> -->
            <img v-scroll-reveal="{origin: 'top', scale: 0.5}" class="sm:w-[460px] sm:h-[341px] sm:block md:hidden sm:mr-auto md:mr-0 ml-auto" src="https://img.freepik.com/vecteurs-libre/illustration-concept-revision-code_114360-4289.jpg?w=740&t=st=1699996510~exp=1699997110~hmac=51f451ee3667725af9a136473d26a48f99fc3e084e04fdd92e7bb84d05d343cd" alt="">
            <img v-scroll-reveal="{origin: 'bottom', scale: 0.5}" class="sm:w-[460px] sm:h-[341px] sm:hidden md:block md:w-[460px] md:h-[341px] lg:w-[480px] lg:h-[381px] xl:w-[493px] xl:h-[394px] sm:mr-auto md:mr-0 ml-auto" src="./../../assets/images/headerimage.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '100px',
})
</script>

<!-- https://img.freepik.com/vecteurs-libre/illustration-concept-revision-code_114360-4289.jpg?w=740&t=st=1699996510~exp=1699997110~hmac=51f451ee3667725af9a136473d26a48f99fc3e084e04fdd92e7bb84d05d343cd -->