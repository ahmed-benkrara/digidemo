<template>
    <div class="w-full sm:h-auto md:min-h-[210px] rounded-[15px] px-[28px] py-[26px]" :style="{ backgroundColor: background }">
        <div class="w-[42px] h-[42px] bg-[#F0E8FF] rounded-full flex items-center justify-center">
        <div class="w-[38px] h-[38px] rounded-full border-white border-[2px] flex items-center justify-center" :style="{ backgroundColor: color }">
            <img class="w-[17px] h-[17px]" :src="icon" alt="">
        </div>
        </div>
        <h1 class="text-[#2C1D4E] font-semibold text-[16px] mt-2">{{ title }}</h1>
        <p class="text-[#76777B] mt-2 text-[14px] font-medium">
        {{ description }}
        </p>
    </div>
</template>
  
<script setup>
    defineProps(['icon', 'color', 'background', 'title', 'description'])
</script>
  