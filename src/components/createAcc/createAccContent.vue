<template>
        <div class="flex md:flex-row flex-col gap-5 justify-center 2xl:max-w-7xl 2xl:mx-auto">
            <div class="w-full md:w-1/2">
                <!-- desktop -->
                <img data-aos="fade-down-right" width="500px" class="lg:block hidden 2xl:rounded-2xl rounded-br-2xl rounded-tr-2xl" src="../../assets/images/createAccImage.png" alt="">
                <!-- tablet -->
                <img class="lg:hidden hidden md:block rounded-br-2xl rounded-tr-2xl" src="../../assets/images/createAccImageTablet.png" alt="">
                <!-- mobile -->
                <img class="md:hidden block w-full md:w-fit" src="../../assets/images/createAccImageMobile.png" alt="">
            </div>
            <div class="flex items-start justify-center md:w-1/2 flex-col pr-10 pl-10 md:pl-0 md:pr-16">
                <div>
                    <div class="text-white space-y-2">
                        <h1 data-aos="fade-down-right" class="text-4xl font-semibold">Create account</h1>
                        <p data-aos="fade-down-left" class="text-sm">Welcome! enter your details and start <br> creating, collecting and selling NFTs.</p>
                    </div>
                </div>
                <form class="space-y-4 w-full pt-10" action="#">
                    <div data-aos="fade-left" data-aos-duration="2000" class="bg-white flex rounded-3xl lg:w-2/3 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#BDBDBD] relative top-3 left-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <input class="py-3 px-5 outline-none w-full placeholder:text-black/70" type="text" placeholder="Username" name="" id="">
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" class="bg-white flex rounded-3xl lg:w-2/3 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#BDBDBD] relative top-3 left-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                        </svg>
                        <input class="py-3 px-5 outline-none w-full placeholder:text-black/70" type="email" placeholder="Email Address" name="" id="">
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" class="bg-white flex rounded-3xl lg:w-2/3 w-full">
                        <svg class="relative top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD"/>
                        </svg>
                        <input class="py-3 px-5 outline-none w-full placeholder:text-black/70" type="password" placeholder="Password" name="" id="">
                    </div>
                    <div data-aos="fade-left" data-aos-duration="500" class="bg-white flex rounded-3xl lg:w-2/3 w-full">
                        <svg class="relative top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD"/>
                        </svg>
                        <input class="py-3 px-5 outline-none w-full placeholder:text-black/70" type="password" placeholder="Confirm Password" name="" id="">
                    </div>
                    <a data-aos="fade-up" data-aos-offset="100" class="lg:w-2/3 w-full rounded-3xl mt-10 text-white bg-[#A259FF] py-3 px-5 text-center block" href="#">
                        Create account
                    </a>
                </form>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>