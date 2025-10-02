<template>
    <div class="container mx-auto px-10 mt-32">
        <div class="pb-16">
            <h1 data-aos="fade-down-right" class="text-white text-3xl">Trending Collection</h1>
            <p data-aos="fade-down-left" class="text-gray-300">Checkout our weekly updated trending collection.</p>
        </div>

        <!-- trending collection cards -->
        <div class="flex justify-center gap-5">
            <!-- first -->
            <div data-aos="zoom-in" class="flex flex-col gap-2">
                <router-link :to="{ name:'nftPage' }">
                    <img width="265px" src="../assets/images/trending-collection-images/trending1.png" alt="">
                </router-link>
                <div class="flex gap-2">
                    <router-link :to="{ name:'nftPage' }">
                        <img width="83.3px" src="../assets/images/trending-collection-images/trending2.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }">
                        <img width="83.3px" src="../assets/images/trending-collection-images/trending3.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }" class="w-[83.3px] rounded-2xl bg-[#a259ff] text-white flex justify-center items-center text-xl">
                        1025+
                    </router-link>

                </div>
                <div>
                    <p class="text-white">DSGN Animals</p>
                    <div class="flex gap-2 pt-1">
                        <img src="../assets/images/trending-collection-images/trending4.png" alt="">
                        <p class="text-sm text-gray-400">MrFox</p>
                    </div>
                </div>
            </div>
            <!-- second -->
            <div data-aos="zoom-in" class="md:flex hidden flex-col gap-2">
                <router-link :to="{ name:'nftPage' }">
                    <img width="265px" src="../assets/images/trending-collection-images/trending5.png" alt="">
                </router-link>
                <div class="flex gap-2">
                    <router-link :to="{ name:'nftPage' }">
                        <img width="83.3px" src="../assets/images/trending-collection-images/trending6.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }">
                        <img width="83.3px" src="../assets/images/trending-collection-images/trending6.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }" class="w-[83.3px] rounded-2xl bg-[#a259ff] text-white flex justify-center items-center text-xl">
                        1025+
                    </router-link>

                </div>
                <div>
                    <p class="text-white">Magic Mushrooms</p>
                    <router-link :to="{ name:'nftPage' }" class="flex gap-2 pt-1">
                        <img src="../assets/images/trending-collection-images/trending7.png" alt="">
                        <p class="text-sm text-gray-400">Shroomie</p>
                    </router-link>
                </div>
            </div>
            <!-- third -->
            <div data-aos="zoom-in" class="lg:flex hidden flex-col gap-2">
                <router-link :to="{ name:'nftPage' }">
                    <img class="w-[265px]" src="../assets/images/trending-collection-images/trending8.png" alt="">
                </router-link>
                <div class="flex gap-2">
                    <router-link :to="{ name:'nftPage' }">
                        <img class="w-[83.3px]" src="../assets/images/trending-collection-images/trending9.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }">
                        <img class="w-[83.3px]" src="../assets/images/trending-collection-images/trending9.png" alt="">
                    </router-link>
                    <router-link :to="{ name:'nftPage' }" class="w-[83.3px] rounded-2xl bg-[#a259ff] text-white flex justify-center items-center text-xl">
                        1025+
                    </router-link>

                </div>
                <div>
                    <p class="text-white">Disco Machines</p>
                    <div class="flex gap-2 pt-1">
                        <img src="../assets/images/trending-collection-images/trending10.png" alt="">
                        <p class="text-sm text-gray-400">BeKind2Robots</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>