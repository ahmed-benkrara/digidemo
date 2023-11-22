<template>
  <div class="bg-black xs:flex items-center justify-center sm:hidden w-full h-screen fixed top-0 left-0 z-[1010]">
    <h1 class="text-white w-fit h-fit text-center">Sorry, but your device screen isn't supported !</h1>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>