<template>
    <div class="slider mt-[50px]">
        <div class="slide-track" ref="track">
            <div v-for="(image , index) in images" :key="index" class="slide" ref="slide">
                <img :src="image" class="w-[400px] h-[auto] mx-auto" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const track = ref(null)


let images = ref([
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
    // 'https://fraxbit.com/wp-content/uploads/2023/10/design7.png',
])

onMounted(() => {
    images.value = [...images.value, ...images.value]
    console.log(images.value.length)
    track.value.style.width = `calc(${427}px * ${images.value.length})`
    document.querySelector('.slide').style.width = `${427}px`
    document.querySelector('.slide').style.height = `${381}px`
})

</script>

<style scoped>

    .slider{
        width: 100%;
        overflow-x: hidden;
    }

    .slide-track{
        display: flex;
        /* width: calc(427px * 18); */
        animation: scroll 50s infinite;
    }

    .slide-track:hover{
        animation-play-state: paused;
    }

    @keyframes scroll{
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-427px * 9));
        }
    }
    
    .slide{
        /* height:381px; */
        /* width: 427px; */
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>