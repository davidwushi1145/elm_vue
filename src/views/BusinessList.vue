<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
interface Business {
  businessAddress: string;
  businessExplain: string;
  businessId: number;
  businessImg: string;
  businessName: string;
  deliveryPrice: number;
  orderTypeId: number;
  remarks: string;
  starPrice: number;
}

const businesses = ref<Business[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/business/businessLists');
    if (response && response.data && response.data.data) {
      businesses.value = response.data.data; // 存储所有商家的数据
    }
  } catch (error) {
    console.error('Error fetching businesses:', error);
  }
});
</script>

<template>
  <body>
  <div class="w=full h-full">

    <!--header部分-->
    <header
        class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>商家列表</p>
    </header>

    <!--商家列表部分-->
    <!-- 商家列表部分 -->
    <ul class="w-full mt-24">
      <RouterLink v-for="business in businesses" :key="business.businessId" class="block w-full" :to="`/business-info/${business.businessId}`">
        <li class="w-full p-6 select-none flex items-center cursor-pointer border-solid border-b border-gray-300">
          <div class="relative items-center">
            <img class="w-[20vw] h-[20vw]" :src="business.businessImg || '/src/assets/img/default.png'">
<!--            <div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">-->
<!--              3-->
<!--            </div>-->
          </div>
          <div class="ml-5">
            <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">{{ business.businessName }}</h3>
            <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;{{ business.starPrice }}起送 | &#165;{{ business.deliveryPrice }}配送</p>
            <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">{{ business.businessExplain }}</p>
          </div>
        </li>
      </RouterLink>
    </ul>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
  </div>
  </body>
</template>

<style scoped>

</style>