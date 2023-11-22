<template>
    <header class="w-[95%] mx-auto">
        <TopNav />
        <HeaderBody/>
    </header>
    <div>
        <RouterView />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopNav from '@/components/client/TopNav.vue'
import HeaderBody from '../../components/client/HeaderBody.vue';

</script>