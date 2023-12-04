<script setup lang="ts">
import { computed } from 'vue';
import {useToken} from "@/authService";
const token = useToken();
const destination = computed(() => token.value ? '/mine' : '/login');
</script>



<template>
  <!--底部菜单部分-->
  <ul class="w-full h-24 border-t-[1px] border-solid border-t-[#DDDDDDFF] bg-white fixed left-0 bottom-0 flex justify-around items-center">
    <li class="flex flex-col justify-center items-center text-[#999] select-none cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9M6 10l6-6l6 6M6 10l-2 2m14-2l2 2m-10 1h4v4h-4v-4z"/>
      </svg>
      <RouterLink to="/" class="text-[2.8vw]">首页</RouterLink>
    </li>
    <li class="flex flex-col justify-center items-center text-[#999] select-none cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50">
        <path fill="currentColor"
              d="M25 49C11.766 49 1 38.233 1 25C1 11.766 11.766 1 25 1c13.233 0 24 10.766 24 24c0 13.233-10.767 24-24 24zm0-44C13.972 5 5 13.972 5 25s8.972 20 20 20s20-8.972 20-20S36.028 5 25 5zm.045 3.25S18 20.321 18 24v2c0 3.678 7.066 16 7.066 16S32 29.934 32 26.256v-2.262c0-3.679-6.955-15.744-6.955-15.744zM25 29a4 4 0 1 1 0-8a4 4 0 0 1 0 8z"/>
      </svg>
      <RouterLink to="/business-list" class="text-[2.8vw]">发现</RouterLink>
    </li>
    <li class="flex flex-col justify-center items-center text-[#999] select-none cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <g id="feDocument0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
          <g id="feDocument1" fill="currentColor" fill-rule="nonzero">
            <path id="feDocument2"
                  d="M15 4H6v16h12V7h-3V4ZM6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 9h8v2H8v-2Zm0 4h8v2H8v-2Z"/>
          </g>
        </g>
      </svg>
      <RouterLink to="/order-list" class="text-[2.8vw]">订单</RouterLink>
    </li>
    <li class="flex flex-col justify-center items-center text-[#999] select-none cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M18 19v-1.25c0-2.071-1.919-3.75-4.286-3.75h-3.428C7.919 14 6 15.679 6 17.75V19m9-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"/>
      </svg>
      <RouterLink :to="destination" class="text-[2.8vw]">我的</RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>