<script setup lang="ts">
import { onMounted, nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    const showBtnArr = document.getElementsByClassName('fa-caret-down') as HTMLCollectionOf<HTMLElement>;
    const detailetBoxArr = document.getElementsByClassName('order-detailet') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < detailetBoxArr.length; i++) {
      detailetBoxArr[i].style.display = 'none';
    }

    for (let i = 0; i < showBtnArr.length; i++) {
      showBtnArr[i].onclick = () => {
        detailetBoxArr[i].style.display = detailetBoxArr[i].style.display === 'none' ? 'block' : 'none';
      };
    }
  });
});
</script>


<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p class="">我的订单</p>
    </header>

    <!--订单列表部分-->
    <h3 class=" mt-24 box-border p-[4vw] text-3xl font-light text-[#999999FF]">未支付订单信息：</h3>
    <ul class="w-full">
      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw] text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            万家饺子（软件园E18店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 32 32">
              <path fill="currentColor" d="m24 12l-8 10l-8-10z"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;49</p>
            <RouterLink class="block w-full h-full" to="/order">
              <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer">去支付
              </button>
            </RouterLink>

          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>

      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            小锅饭豆腐馆（全运店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 32 32">
              <path fill="currentColor" d="m24 12l-8 10l-8-10z"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;55</p>
            <RouterLink class="block w-full h-full" to="/order">
            <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer">去支付
            </button>
            </RouterLink>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>
    </ul>

    <h3 class=" mt-24 box-border p-[4vw] text-3xl font-light text-[#999999FF]">已支付订单信息：</h3>
    <ul class="w-full">
      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            万家饺子（软件园E18店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 32 32">
              <path fill="currentColor" d="m24 12l-8 10l-8-10z"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;49</p>
            <RouterLink class="block w-full h-full" to="/">
            <button class="bg-green-400	 text-white rounded-[3px] ml-4 select-none cursor-pointer">去评价
            </button>
            </RouterLink>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>

      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            小锅饭豆腐馆（全运店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 32 32">
              <path fill="currentColor" d="m24 12l-8 10l-8-10z"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;55</p>
            <RouterLink class="block w-full h-full" to="/">
            <button class="bg-green-400 text-white rounded-[3px] ml-4 select-none cursor-pointer">去评价
            </button>
            </RouterLink>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  </body>
</template>

<style scoped>

</style>