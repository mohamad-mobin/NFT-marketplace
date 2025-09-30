<template>
    <div class="container mx-auto px-10 md:px-32">
        <div class="flex md:flex-row flex-col justify-between pt-10">
            <div class="flex flex-col justify-between gap-y-10 pb-5 md:pb-0">
                <div>
                    <h1 class="text-white text-2xl font-semibold">The Orbitians</h1>
                    <p class="text-sm text-gray-500 pt-2">Minted on Sep 30, 2022</p>
                </div>
                <div>
                    <p class="pb-2 text-gray-400 text-sm" style="font-family: spaceMono;">Created By</p>
                    <div class="flex gap-2">
                        <img class="size-5" src="../../assets/images/orbitian.png" alt="">
                        <p class="text-white text-sm">Orbitian</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="h-40 w-60 md:w-72 bg-[#3B3B3B]/40 backdrop-blur-md rounded-2xl text-white flex flex-col justify-center items-center gap-3 px-10">
                    <p class="text-sm opacity-80 pr-10 whitespace-nowrap" style="font-family: spaceMono;">Auction ends in:</p>

                    <div class="flex items-center gap-2 text-2xl font-bold">
                    <span class="text-4xl">10</span>
                    <span>:</span>
                    <span class="text-4xl">59</span>
                    <span>:</span>
                    <span class="text-4xl">29</span>
                    </div>

                    <div class="flex items-center justify-center gap-4 w-full text-xs opacity-70">
                    <span style="font-family: spaceMono;">Hours</span>
                    <span style="font-family: spaceMono;">Minutes</span>
                    <span style="font-family: spaceMono;">Seconds</span>
                    </div>
                    
                    <button class="bg-[#A259FF] w-full py-2 rounded-2xl">Place Bid</button>
            </div>
            </div>
        </div>
        <div class="pt-10">
            <p class="text-gray-400" style="font-family: spaceMono;">Description</p>
            <p class="pt-2 text-white text-sm">The Orbitians <br> is a collection of 10,000 unique NFTs on the <br> Ethereum blockchain,</p>

            <p class="py-3 text-white text-sm">There are all sorts of beings in the NFT <br> Universe. The most advanced and friendly of <br> the bunch are Orbitians.</p>

            <p class="text-white text-sm">They live in a metal space machines, high up <br> in the sky and only have one foot on Earth. <br>
These Orbitians are a peaceful race, but they <br> have been at war with a group of invaders for <br> many generations. The invaders are called <br> Upside-Downs, because of their inverted <br> bodies that live on the ground, yet do not  <br>know any other way to be. Upside-Downs <br> believe that they will be able to win this war if <br> they could only get an eye into Orbitian <br> territory, so they've taken to make human <br> beings their target.</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>