<template>
        <div class="flex md:flex-row flex-col gap-5 justify-center 2xl:max-w-7xl 2xl:mx-auto bg-[#2b2b2b]">
            <div class="w-full md:w-1/2">
                <!-- desktop -->
                <img width="500px" class="lg:block hidden 2xl:rounded-2xl rounded-br-2xl rounded-tr-2xl" src="../../assets/images/connectWalletImage.png" alt="">
                <!-- tablet -->
                <img class="lg:hidden hidden md:block rounded-br-2xl rounded-tr-2xl" src="../../assets/images/connectWalletImageTablet.png" alt="">
                <!-- mobile -->
                <img class="md:hidden block w-full md:w-fit" src="../../assets/images/connectWalletImageMobile.png" alt="">
            </div>
            <div class="flex items-start justify-center md:w-1/2 flex-col pr-10 pl-10 md:pl-0 md:pr-16">
                <div>
                    <div class="text-white space-y-2">
                        <h1 class="text-4xl font-semibold">Connect wallet</h1>
                        <p class="text-sm">Choose a wallet you want to connect. <br> There are several wallet providers.</p>
                    </div>
                </div>
                <div class="mt-10 w-full space-y-4">
                    <button class="flex items-center justify-start bg-[#3b3b3b] py-3 pl-5 pr-20 cursor-pointer rounded-2xl border border-[#A259FF] gap-5 sm:w-80 w-full">
                        <img src="../../assets/images/metamask.png" alt="">
                        <span class="text-white font-semibold text-lg sm:text-xl">Metamask</span>
                    </button>
                    <button class="flex items-center justify-start bg-[#3b3b3b] py-3 pl-5 pr-20 cursor-pointer rounded-2xl border border-[#A259FF] gap-5 sm:w-80 w-full">
                        <img src="../../assets/images/WalletConnect.png" alt="">
                        <span class="text-white font-semibold text-lg sm:text-xl">Wallet Connect</span>
                    </button>
                    <button class="flex items-center justify-start bg-[#3b3b3b] py-3 pl-5 pr-20 cursor-pointer rounded-2xl border border-[#A259FF] gap-5 sm:w-80 w-full">
                        <img src="../../assets/images/Coinbase.png" alt="">
                        <span class="text-white font-semibold text-lg sm:text-xl">Coinbase</span>
                    </button>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
