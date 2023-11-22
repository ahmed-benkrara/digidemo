<template>
    <footer id="footer" class="bg-[#312A5D] w-full mt-[150px] md:px-[50px] lg:px-[30px] xl:px-[60px] pb-[22px]">
        <div class="w-full sm:grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between">
            <div class="max-w-[300px]">
                <img class="ml-[-20px] mt-[-20px] md:w-[190px] object-cover block" src="./../../assets/logos/logowhite.png" alt="Digimuse logo">
                <p class="text-white text-[12px] sm:mt-[-60px] md:mt-[-50px] font-[400]">
                    Empowering your digital journey with innovative solutions and unmatched creativity. Join us in shaping the future.
                </p>
            </div>
            <div class="sm:pt-[40px] md:pt-[60px]">
                <h1 class="text-white font-[500] text-[16px]">Important links</h1>
                <div class="grid grid-cols-2 mt-[14px] gap-y-[6px] max-w-[200px]">
                    <p class="text-[13px] text-white font-[300]">Home</p>
                    <p class="text-[13px] text-white font-[300]">Services</p>
                    <p class="text-[13px] text-white font-[300]">Works</p>
                    <p class="text-[13px] text-white font-[300]">About us</p>
                </div>
            </div>
            <div class="sm:pt-[40px] md:pt-[60px]">
                <h1 class="text-white font-[500] text-[16px]">Contact us</h1>
                <p class="text-[13px] text-white font-[300] mt-[14px] mb-[6px]">Contact@digimuse.com</p>
                <p class="text-[13px] text-white font-[300]">+212 600000000</p>
            </div>
            <div class="sm:pt-[40px] md:pt-[60px] w-fit">
                <h1 class="text-white font-[500] text-[16px]">NewsLetter</h1>
                <p class="text-[12px] text-white font-[400] mt-[14px] mb-[6px] max-w-[236px]">Unlock innovation with our newsletter. Subscribe for tech insights, updates, and more!</p>
                <div class="rounded-full bg-[#362E69] mt-[20px] py-[8px] px-[10px] flex md:min-w-[269px]">
                    <input type="text" class="bg-transparent text-white sm:text-[11px] md:text-[12px] font-[400] placeholder:text-white outline-none px-[11px]" placeholder="Email">
                    <button class="gradiantbg text-white sm:px-[14px] sm:py-[6px] md:px-[19px] md:py-[9px] rounded-full sm:text-[11px] md:text-[12px]">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="w-full h-[0.5px] bg-[#fff] mt-[50px]"></div>
        <div class="flex sm:flex-col-reverse md:flex-row justify-between items-center px-4 mt-[24px]">
            <p class="text-white text-[13px]">Copyrights ©2023 All rights reserved</p>
            <div class="w-fit text-white text-[18px] sm:mb-2 md:mb-0">
                <i class="fa-brands fa-facebook-f mx-[12px] cursor-pointer"></i>
                <i class="fa-brands fa-instagram mx-[12px] cursor-pointer"></i>
                <i class="fa-brands fa-whatsapp mx-[12px] cursor-pointer"></i>
                <i class="fa-brands fa-linkedin-in mx-[12px] cursor-pointer"></i>
                <i class="fa-brands fa-tiktok mx-[12px] cursor-pointer"></i>
            </div>
        </div>
    </footer>
</template>

<style scoped>

@media (min-width: 460px) and (max-width: 768px) {
    #footer{
        @apply px-[50px];
    }
}

@media (min-width: 0px) and (max-width: 460px) {
    #footer{
        @apply px-[20px];
    }
}

</style>