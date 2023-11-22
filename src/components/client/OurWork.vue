<template>
    <div class="mt-[100px] w-full">
        <div class="sm:w-[90%] md:w-[70%] mx-auto">
            <p v-scroll-reveal="{origin: 'top'}" class="w-fit mx-auto text-purple-500 font-medium text-[16px]">Our Work</p>
            <h1 v-scroll-reveal="{origin: 'left'}" class="w-fit mx-auto text-center sm:text-[20px] md:text-[28px] font-bold text-[#2C1D4E]">Here are <span class="gradianttxt">some</span> of our projects</h1>
            <p v-scroll-reveal="{origin: 'right'}" class="max-w-[500px] sm:text-[12px] md:text-[14px] text-[#76777B] font-semibold mx-auto text-center">
                Experience the perfect fusion of creativity and functionality in our web designs. We craft visually stunning, user-friendly websites that meet your business or organization's unique needs.
            </p>
        </div>
        <div class="sm:w-[95%] md:w-[90%] mx-auto mt-[50px] flex flex-wrap justify-center gap-4">
            <ProjectCategory v-scroll-reveal="{scale: 1.2, origin: 'top', distance: '50px'}" title="All" />
            <ProjectCategory v-scroll-reveal="{scale: 1.2, origin: 'top', distance: '50px'}" v-for="(item, index) in services" :key="index" :title="item.title" />
        </div>
        <!-- <ProjectSlider /> -->
        <TestSwiper/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCategory from './ProjectCategory.vue'
import TestSwiper from './TestSwiper.vue'
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
])

//carusal

</script>

