<script setup lang="ts">
import axios from "axios";

import {getToken} from "@/authService";
const token = getToken();
</script>

<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header class="w-full h-24 font-medium bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>确认订单</p>
    </header>

    <!--订单信息部分-->
    <div class="w-full mt-24 bg-[#0097FFFF] box-border p-[2vw] text-white">
      <p class="text-2xl font-light">订单配送至：</p>
      <div class="w-full flex justify-between items-center font-bold select-none cursor-pointer my-1 mx-0">
        <p class="w-[90%] text-4xl">云南大学明远楼</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"/>
        </svg>
      </div>
      <p class="text2xl">方先生 12345</p>
    </div>

    <p class="box-border p-[3vw] text-3xl font-bold text-[#666666FF] border-solid border-b-[1px] border-b-[#DDDDDDFF]">
      万家饺子（软件园E18店）</p>

    <!--订单明细部分-->
    <ul class="w-full">
      <li class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center ">
        <div class="flex items-center">
          <img src="../assets/img/sp01.png"
               height="40" width="40"/>"
          <p class="text-3xl ml-6">纯肉鲜肉（水饺） x 2</p>
        </div>
        <p class="text-3xl">&#165;15</p>
      </li>
      <li class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center ">
        <div class="flex items-center">
          <img src="../assets/img/sp02.png"
               height="40" width="40"/>"
          <p class="text-3xl ml-6">玉米鲜肉（水饺） x 1</p>
        </div>
        <p class="text-3xl">&#165;16</p>
      </li>
    </ul>
    <div class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center text-3xl">
      <p class="">配送费</p>
      <p class="">&#165;3</p>
    </div>

    <!--合计部分-->
    <RouterLink class="block w-full h-full" to="/payment">
    <div class="w-full h-28 fixed left-0 bottom-0 flex">
      <div class="flex basis-2/3 bg-[#505051FF] text-white text-4xl font-bold select-none justify-center items-center">
        &#165;49
      </div>
      <div class="flex basis-1/3 bg-[#38CA73FF] text-white text-4xl font-bold select-none cursor-pointer justify-center items-center">去支付
      </div>
    </div>
    </RouterLink>
  </div>
  </body>
</template>

<style scoped>

</style>