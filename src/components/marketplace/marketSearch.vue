<template>
    <div>

    <div class="container mx-auto px-10 pt-10 pb-20">
        <h1 class="text-2xl text-white">Browse Marketplace</h1>
        <p class="text-white pt-1">Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div class="mt-6 relative">
            <input class="w-full border border-[#3b3b3b] placeholder:text-[#808080] py-4 px-6 rounded-2xl" type="text" placeholder="Search your favourite NFTs" name="" id="">
            <span class="absolute right-5 top-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" /></svg>

            </span>
        </div>
    </div>

    <div class="bg-[#2b2b2b]">
        <div class="w-full h-[1px] bg-[#3b3b3b]"></div>
        <div class="container mx-auto px-10 bg-[#2b2b2b]">
            <!-- buttons -->
            <div class="flex justify-between">
                <div class="text-white space-x-2 w-full flex justify-center cursor-pointer py-3 border-b-2 border-[#858584]">
                    <span class="text-white font-bold tracking-wider text-sm md:text-[16px]">NFTs</span>
                    <span class="px-2 md:px-3 rounded-full bg-[#858584] text-sm md:text-[16px]">302</span>
                </div>
                <div class="text-white space-x-2 w-full flex justify-center cursor-pointer py-3">
                    <span class="text-[#858584] font-bold tracking-wider text-sm md:text-[16px]">Collections</span>
                    <span class="px-2 md:px-3 rounded-full bg-[#3B3B3B] text-sm md:text-[16px]">67</span>
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