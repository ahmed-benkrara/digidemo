<template>
    <div class="w-full mt-[100px]">
        <div class="sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%] mx-auto grid md:grid-cols-2 gap-x-[30px]">
            <div v-scroll-reveal="{origin: 'left', scale: 0.5}">
                <p class="text-purple-500 font-medium sm:text-[15px] md:text-[15px] lg:text-[16px]">Contact</p>
                <h1 class="text-[#2C1D4E] font-bold sm:text-[30px] md:text-[30px] lg:text-[38px]">Get in touch</h1>
                <p class="sm:text-[14px] md:text-[14px] lg:text-[15px] mt-2">
                    Ready to take the next step? We'd love to hear from you. Whether you have a project in mind, a question to ask, or just want to say hello, we're all ears. At DIGIMUSE, we're committed to creating connections that count. Your message matters, and we're here to make it easy for you to reach out.<br>Our team is ready to assist, so go ahead and drop us a line. We can't wait to collaborate, innovate, and create something extraordinary together. Your journey begins with a simple message, and we're excited to be part of it.
                </p>
                <p class="text-[#B3B8C1] sm:text-[14px] lg:text-[15px] mt-5">Feel free to get in touch with us</p>
                <p class="text-[#6E6995] sm:text-[13px] lg:text-[14px] mt-1">Contact@digimuse.com</p>
                <p class="text-[#6E6995] sm:text-[13px] lg:text-[14px]">+212 600000000</p>
            </div>
            <div>
                <div v-scroll-reveal="{origin: 'right', scale: 0.5}" class="mt-[30px]">
                    <div class="flex gap-x-[20px]">
                        <input class="bg-[#fafafa] border-[#F7F4FF] w-full block sm:text-[14px] md:text-[14px] sm:px-[12px] sm:py-[6px] md:px-4 md:py-2 outline-none border-[1px]" type="text" placeholder="First name">
                        <input class="bg-[#fafafa] border-[#F7F4FF] w-full block sm:text-[14px] md:text-[14px] sm:px-[12px] sm:py-[6px] md:px-4 md:py-2 outline-none border-[1px]" type="text" placeholder="Last name">
                    </div>
                    <input class="bg-[#fafafa] border-[#F7F4FF] w-full block sm:text-[14px] md:text-[14px] sm:px-[12px] sm:py-[6px] md:px-4 md:py-2 outline-none border-[1px] mt-5" type="text" placeholder="Email">
                    <select class="bg-[#fafafa] border-[#F7F4FF] w-full block sm:text-[14px] md:text-[14px] sm:px-[12px] sm:py-[6px] md:px-4 md:py-2 outline-none border-[1px] mt-5" type="text" placeholder="Email">
                        <option value="" disabled selected>What are you interested in ?</option>
                    </select>
                    <textarea class="bg-[#fafafa] w-full block sm:text-[14px] md:text-[14px] sm:px-[12px] sm:py-[6px] md:px-4 md:py-2 outline-none border-[1px] border-[#F7F4FF] mt-5 resize-none h-[150px]" type="text" placeholder="Message"></textarea>
                    <button class="bg-[#2C1D4E] text-white text-[14px] py-2 px-[100px] mt-[30px]">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
    duration: 1000, distance: '100px',
})
</script>