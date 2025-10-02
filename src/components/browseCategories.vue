<template>
    <div class="container mx-auto px-10 mt-32">
        <div class="pb-16 flex justify-between items-center">
            <h1 data-aos="fade-down-right" class="text-white text-3xl">Browse Categories</h1>
        </div>

        <!-- content -->
        <div class="grid px-5 sm:px-10 md:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category1.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Art
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category2.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Collectibles
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category3.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Music
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category4.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Photography
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category5.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Video
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category6.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Utility
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category7.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Sport
                </div>
            </router-link>
            <router-link data-aos="zoom-out-up" :to="{ name:'marketplace' }" class="w-full">
                <img class="w-full hover:grayscale-100 duration-300 cursor-pointer" src="../assets/images/browse-categories-images/Category8.png" alt="">
                <div class="w-full bg-[#3b3b3b] py-4 px-5 rounded-bl-2xl rounded-br-2xl text-white">
                    Virtual Worlds
                </div>
            </router-link>
        </div>


    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>