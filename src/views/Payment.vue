<script setup lang="ts">

</script>

<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p class="">在线支付</p>
    </header>

    <!--订单信息部分-->
    <div class="w-full h-full">
      <p class="mt-[12vw] box-border pt-[4vw] px-[4vw] pb-0 text-3xl font-light text-[#999999FF]">订单信息：</p>
      <div class="box-border p-[4vw] text-3xl text-[#666666FF] flex flex-row justify-between items-center">
        <p class="flex flex-row justify-between items-center">
          万家饺子（软件园E18店）
          <svg id="showBtn" class="flex" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
               viewBox="0 0 32 32">
            <path fill="currentColor" d="m24 12l-8 10l-8-10z"/>
          </svg>
        </p>
        <p class="text-orange-600">&#165;49</p>
      </div>

      <!--订单明细部分-->
      <ul class="w-full" id="detailetBox" style="display: none">
        <li class="w-full box-border py-[1vw] px-[4vw] flex justify-between items-center">
          <p class="text-2xl text-[#666666FF]">纯肉鲜肉（水饺） x 2</p>
          <p class="text-2xl text-[#666666FF]">&#165;15</p>
        </li>
        <li class="w-full box-border py-[1vw] px-[4vw] flex justify-between items-center">
          <p class="text-2xl text-[#666666FF]">玉米鲜肉（水饺） x 1</p>
          <p class="text-2xl text-[#666666FF]">&#165;16</p>
        </li>
        <li class="w-full box-border py-[1vw] px-[4vw] flex justify-between items-center">
          <p class="text-2xl text-[#666666FF]">配送费</p>
          <p class="text-2xl text-[#666666FF]">&#165;3</p>
        </li>
      </ul>
    </div>

    <!--支付方式-->
    <ul class="w-full">
      <li class="w-full box-border p-[4vw] flex justify-between items-center">
        <img class="w-[33vw] h-[8.9vw]" src="../assets/img/alipay.png"/>
        <svg class="text-[#38CA73FF]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </li>
      <li class="w-full box-border p-[4vw] flex justify-between items-center">
        <img class="w-[33vw] h-[8.9vw]" src="../assets/img/wechat.png"/>
        <svg class="text-[#a1a1aa]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </li>
    </ul>
    <div class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
      <button class="w-full h-20 text-3xl font-bold text-white bg-[#38CA73FF] rounded-[4px] border-none outline-none">
        确认支付
      </button>
    </div>

  </div>
  </body>
</template>

<style scoped>

</style>