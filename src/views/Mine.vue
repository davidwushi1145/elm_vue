<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {clearToken, getToken} from "@/authService";
import router from "@/router";

interface UserInfo {
  delTag?: number;
  isDelete?: number;
  password?: string;
  userId?: string;
  userImg?: string;
  userName?: string;
  userSex?: number;
}

const userInfo = ref<UserInfo | null>(null);

const exit = () => {
  clearToken();
  router.push('/login');
}
// 定义获取用户信息的函数
const fetchUserInfo = async () => {
  try {
    const response = await axios.get('/api/user/info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token':getToken()
      }
    });
    if (response.data.code === 200) {
      userInfo.value = response.data.data;
    } else {
      console.error('获取用户信息失败:', response.data.message);
    }
  } catch (error) {
    console.error('请求异常:', error);
  }
};

// 组件加载时获取用户信息
onMounted(fetchUserInfo);
</script>

<template>
  <div class="w-full h-full pt-24">
    <!--header部分-->
    <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>我的信息</p>
    </header>

    <div v-if="userInfo" class="w-full flex flex-col items-center mt-[12vw]">
      <img :src="userInfo.userImg" alt="头像" class="w-[10vw] h-[10vw] object-cover rounded-full">
      <h3>{{ userInfo.userName }}</h3>
      <p>性别: {{ userInfo.userSex === 1 ? '男' : '女' }}</p> <!-- 假设 1 代表男性，0 代表女性 -->
    </div>


    <div v-else class="flex justify-center items-center mt-[14vw]">
      <p>加载用户信息中...</p>
    </div>
    <div class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
      <button class="w-full h-20 text-3xl font-bold text-[#666666FF] bg-[#DDDDDDFF] rounded-[4px]" @click=exit()>退出</button>
    </div>


  </div>
</template>
