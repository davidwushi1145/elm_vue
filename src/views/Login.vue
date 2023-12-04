<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from "@/router";
import {clearToken, extractToken, saveToken} from "@/authService";

const loginForm = ref({
  userId: '',
  password: ''
});

const handleLogin = async () => {
  try {
    // Modify the request to include userId and password as query parameters
    const response = await axios.post('/api/user/login', null, {
      params: {
        userId: loginForm.value.userId,
        password: loginForm.value.password
      }
    });
    const token = extractToken(response); // 使用封装的函数提取 JWT
    if (token) {
      saveToken(token); // 保存 JWT
    }
    console.log('登录成功:', response.data.data.JWT);
    alert('登录成功');
    await router.push('/mine'); // 跳转到首页
  } catch (error) {
    console.error('登录失败:', error);
    alert('登录失败，请检查用户名和密码是否正确');
  }
};
</script>
<template>
  <body>
  <div class="w-full h-full">
    <!--header部分-->
    <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>用户登录</p>
    </header>

    <!--表单部分-->
    <form class="w-full mt-[12vw]" id="loginForm" @submit.prevent="handleLogin">
      <div class="box-border py-10 px-8 pb-0 flex items-center text-2xl">
        <p class="flex flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">手机号码：</p>
        <input class="ml-4" id="username" type="text" placeholder="请输入手机号码" v-model="loginForm.userId" autocomplete="user-name">
      </div>
      <div class="box-border pt-10 px-8 pb-0 flex items-center text-2xl">
        <p class="flex flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">密码：</p>
        <input class="ml-4" id="password" type="password" placeholder="请输入密码" v-model="loginForm.password" autocomplete="current-password">
      </div>

      <!--登录、注册按钮-->
      <div class="w-full flex-col box-border justify-center items-center">
        <div class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
          <button class="w-full h-20 text-3xl font-bold text-white bg-[#38CA73FF] rounded-[4px]" type="submit">登陆</button>
        </div>
        <RouterLink class="block w-full h-full" to="/register">
          <div class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
            <button class="w-full h-20 text-3xl font-bold text-[#666666FF] bg-[#DDDDDDFF] rounded-[4px]">去注册</button>
          </div>
        </RouterLink>

      </div>
    </form>
  </div>
  </body>
</template>


<style scoped>

</style>