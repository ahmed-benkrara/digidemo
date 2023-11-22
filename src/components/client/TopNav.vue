<template>
    <nav class="sm:hidden md:flex items-center justify-between h-[100px] overflow-y-hidden overflow-x-hidden">
        <img class="w-[190px] object-cover mt-[30px]" src="./../../assets/logos/logo.png" alt="Digimuse logo">
        <ul class="font-semibold flex items-center md:text-[13px] lg:text-[14px]">
            <li class="md:mx-2 lg:mx-4"><RouterLink to='/'>Home</RouterLink></li>
            <li class="md:mx-2 lg:mx-4"><RouterLink to='/'>Services</RouterLink></li>
            <li class="md:mx-2 lg:mx-4"><RouterLink to='/'>Works</RouterLink></li>
            <li class="md:mx-2 lg:mx-4"><RouterLink to='/'>About us</RouterLink></li>
            <RouterLink to='/'><li class="mr-4 md:ml-[20px] lg:ml-[30px] gradiantbg text-white font-[500] rounded-[22px] px-[26px] py-[8px]">Let's talk</li></RouterLink>
        </ul>
    </nav>

    <nav class="sm:flex md:hidden w-full flex items-center justify-between h-[100px]">
        <img class="w-[190px] object-cover mt-[30px]" src="./../../assets/logos/logo.png" alt="Digimuse logo">
        <div class="sm:block md:hidden w-fit h-fit cursor-pointer text-[25px]" @click="openMenu()" ref="hmenu">
            <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
    <div id="menubody" class="sm:hidden md:hidden w-full h-screen z-[50] bg-white fixed top-0 left-0">
        <nav class="sm:flex md:hidden w-[95%] mx-auto flex items-center justify-between h-[100px]">
            <img class="w-[190px] object-cover mt-[30px]" src="./../../assets/logos/logo.png" alt="Digimuse logo">
            <div class="sm:block md:hidden w-fit h-fit cursor-pointer text-[25px]" @click="closeMenu()" ref="hmenu">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </nav>
        <div class="mt-[20px] h-[calc(100%-110px)] flex flex-col justify-between">
            <ul class="w-full mt-[25px] text-[#2C1D4E]">
                <li class="w-fit mx-auto mb-[20px] font-[700] text-[25px]"><RouterLink to='/'>Home</RouterLink></li>
                <li class="w-fit mx-auto mb-[20px] font-[700] text-[25px]"><RouterLink to='/'>Services</RouterLink></li>
                <li class="w-fit mx-auto mb-[20px] font-[700] text-[25px]"><RouterLink to='/'>Works</RouterLink></li>
                <li class="w-fit mx-auto mb-[20px] font-[700] text-[25px]"><RouterLink to='/'>About us</RouterLink></li>
                <li class="w-fit mx-auto mb-[20px] font-[700] text-[25px]"><RouterLink to='/'>Let's Talk</RouterLink></li>
            </ul>
        </div>
    </div>
    
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
//dealing with menu
const hmenu = ref(null)
const menuOpened = ref(false)

const closeMenu = () => {
    menuOpened.value = false
    $('#menubody').slideUp(1000)
}

const openMenu = () => {
    menuOpened.value = true
    $('#menubody').slideDown(1000)
}

const hideMenuOnBigScreensWhileResizing = () => {
        if(window.innerWidth >= 768){
            closeMenu()
            $('#menubody').hide()
        }
    }

onMounted(() => {
    window.addEventListener('resize', hideMenuOnBigScreensWhileResizing);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', hideMenuOnBigScreensWhileResizing);
})
</script>

<style scoped>

#menubody li {
    position: relative;
}

#menubody li::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 4px;
    background: linear-gradient(135deg, #DC22AD 23.23%, #9569FF 76.95%);
    bottom: 0;
    left: 0;
    transition: width 400ms ease-in-out;
}

#menubody li:hover::before {
    width: 100%;
}
</style>