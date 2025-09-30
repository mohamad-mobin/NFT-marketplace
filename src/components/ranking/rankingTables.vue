<template>
    <div class="container mx-auto px-2 sm:px-10 pt-5">
        <div class="py-3 px-6 rounded-2xl border border-[#3b3b3b] text-[#8f8f8f] text-sm flex justify-between items-center mt-24" style="font-family: spaceMono;">
            <div class="space-x-7">
                <span>#</span>
                <span>Artist</span>
            </div>
            <div class="flex sm:gap-16 md:gap-[120px] lg:gap-32 xl:gap-[220px]">
                <p class="sm:block hidden">Change</p>
                <p class="lg:block hidden">NFTs Sold</p>
                <p>Volume</p>
            </div>
        </div>
        <!-- tables -->
        <div class="mb-24 mt-5 space-y-3">

            <div v-for="(item, index) in tableData" :key="index" class="bg-[#3b3b3b] hover:bg-[#1b1b1b] hover:border border border-[#3b3b3b] duration-300 cursor-pointer py-3 px-6 rounded-2xl">
                <div class="space-x-5 flex justify-between items-center">
                    <div class="flex items-center gap-5">
                        <span class="size-5 flex justify-center items-center bg-[#2b2b2b] p-1 rounded-full text-xs text-slate-500">{{ item.rank }}</span>
                        <span>
                            <img class="w-10" :src="item.img" alt="">
                        </span>
                        <p class="text-white sm:text-[16px] w-fit sm:w-50 text-sm">{{ item.name }}</p>
                    </div>
                    <p class="text-[#00AC4F] sm:block hidden">{{ item.change }}</p>
                    <p class="lg:block hidden text-white">602</p>
                    <p class="text-white whitespace-nowrap">{{ item.amount }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import img1 from "../../assets/images/ranking-images/1.png";
import img2 from "../../assets/images/ranking-images/2.png";
import img3 from "../../assets/images/ranking-images/3.png";
import img4 from "../../assets/images/ranking-images/4.png";
import img5 from "../../assets/images/ranking-images/5.png";
import img6 from "../../assets/images/ranking-images/6.png";
import img7 from "../../assets/images/ranking-images/7.png";
import img8 from "../../assets/images/ranking-images/8.png";
import img9 from "../../assets/images/ranking-images/9.png";
import img10 from "../../assets/images/ranking-images/10.png";
import img11 from "../../assets/images/ranking-images/11.png";
import img12 from "../../assets/images/ranking-images/12.png";
import img13 from "../../assets/images/ranking-images/13.png";
import img14 from "../../assets/images/ranking-images/14.png";
import img15 from "../../assets/images/ranking-images/15.png";
import img16 from "../../assets/images/ranking-images/16.png";
import img17 from "../../assets/images/ranking-images/17.png";

export default {

    data() {
        return {
            tableData:[
  {
    "rank": 1,
    "name": "Marcus Saris",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img1 // استفاده از متغیر import شده
  },
  {
    "rank": 2,
    "name": "Alfonso Bator",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img2
  },
  {
    "rank": 3,
    "name": "Nolan Mango",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img3
  },
  {
    "rank": 4,
    "name": "Nolan Mango",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img4
  },
  {
    "rank": 5,
    "name": "Miracle Gouse",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img5
  },
  {
    "rank": 6,
    "name": "Alena Septimus",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img6
  },
  {
    "rank": 7,
    "name": "Desirae Lipshutz",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img7
  },
  {
    "rank": 8,
    "name": "Paityn Kenter",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img8
  },
  {
    "rank": 9,
    "name": "Alena Vaccaro",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img9
  },
  {
    "rank": 10,
    "name": "Randy Carder",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img10
  },
  {
    "rank": 11,
    "name": "Hanna Culhane",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img11
  },
  {
    "rank": 12,
    "name": "Jocelyn Workman",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img12
  },
  {
    "rank": 13,
    "name": "Desirae Septimus",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img13
  },
  {
    "rank": 14,
    "name": "Ahmad Franci",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img14
  },
  {
    "rank": 15,
    "name": "Maria Bergson",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img15
  },
  {
    "rank": 16,
    "name": "Ahmad Geidt",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img16
  },
  {
    "rank": 17,
    "name": "Skylar Mango",
    "change": "+1.41%",
    "amount": "12.4 ETH",
    "img": img17
  },
            ]
        }
    },
    
}
</script>