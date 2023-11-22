<template>
    <div class="w-full py-[62px] bg-[#312A5D] mt-[100px]">
        <div class="sm:w-[95%] lg:w-[90%] mx-auto flex sm:flex-col lg:flex-row justify-center">
            <div class="sm:w-full lg:w-[20%] mb-[40px]">
                <p v-scroll-reveal="{origin: 'top'}" class="sm:text-[13px] md:text-[15px] text-[#6E6995] sm:text-center lg:text-left">WE HELP WITH</p>
                <h1 v-scroll-reveal="{origin: 'left'}" class="sm:text-[22px] md:text-[28px] font-bold text-white sm:text-center lg:text-left">Building<br class="sm:hidden lg:block"/> better<br class="sm:hidden lg:block"/> solutions</h1>
                <button v-scroll-reveal="{origin: 'bottom'}" class="text-white mt-[14px] sm:hidden lg:block text-[12px] px-[22px] py-[6px] rounded-full shadowb">Our Services</button>
            </div>
            <div class="md:w-full lg:w-[70%] h-fit grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-2 sm:gap-y-2 md:gap-x-6 md:gap-y-4">
                <div v-scroll-reveal="{origin: 'right'}" v-for="(item, index) in services" :key="index" class="bg-[#2B2354] h-auto sm:min-h-[100px] md:min-h-[130px] lg:min-h-[140px] sm:px-[25px] lg:px-[20px] sm:py-[25px] lg:py-[30px] rounded-[5px]">
                    <h1 class="mb-[4px] text-white font-semibold sm:text-[13px] md:text-[15px]">{{ item.title }}</h1>
                    <p class="text-white sm:text-[10px] md:text-[12px]">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '100px',
})

const services = ref([
  {
    title: 'Web Development',
    description: 'Crafting engaging websites that captivate your audience.',
  },
  {
    title: 'Software Development',
    description: 'Powering your vision with scalable software solutions.',
  },
  {
    title: 'Mobile Development',
    description: 'Seamless mobile apps for a lasting impression.',
  },
  {
    title: 'Data Cleaning & Modeling',
    description: 'Expert data shaping for sharper insights.',
  },
  {
    title: 'Power BI / Tableau Dashboards',
    description: 'Visualize data, transform insights.',
  },
  {
    title: 'UX / UI Design',
    description: 'Immersive design for exceptional user experiences.',
  },
  {
    title: 'Graphic Design',
    description: 'Elevating brands with stunning visuals.',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost online presence and climb search ranks.',
  },
  {
    title: 'StartupStarter Kit',
    description: 'Your all-in-one solution to launch and scale your business with confidence.',
  },
]);

</script>

<style scoped>
    .shadowb{
        box-shadow: 0 0 5px #9569FF;
    }
</style>