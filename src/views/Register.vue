<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from "@/router";

const userId = ref('');
const password = ref('');
const confirmPassword = ref('');
const userName = ref('');
const userSex = ref(1); // 默认性别为男, 1 for male, 2 for female

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('密码和确认密码不匹配');
    return;
  }

  try {
    const response = await axios.post('/api/user/register', {
      userId: userId.value,
      password: password.value,
      userName: userName.value,
      userSex: userSex.value
    });
    console.log('注册成功:', response);
    alert('注册成功');
    await router.push('/login');
  } catch (error) {
    console.error('注册失败:', error);
    alert('注册失败');
  }
};
</script>

<template>
  <body>
  <div class="w-full h-full">
    <!--header部分-->
    <header class="w-full h-24 bg-[#0097EFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>用户注册</p>
    </header>

    <!--表单部分-->
    <form class="mt-24 w-full text-2xl" @submit.prevent="register">
      <div class="box-border pt-[6vw] px-[3vw] pb-0 flex ">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">
          手机号码：
        </div>
        <input v-model="userId" class="border-none outline-none w-full h-8 ml-4" type="text" id="userId" placeholder="请输入手机号码" autocomplete="username">
      </div>
      <div class="box-border pt-[6vw] px-[3vw] pb-0 flex ">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">
          密码：
        </div>
        <input v-model="password" class="border-none outline-none w-full h-8 ml-4" type="password" id="password" placeholder="请输入密码" autocomplete="new-password">
      </div>
      <div class="box-border pt-[6vw] px-[3vw] pb-0 flex ">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">
          确认密码：
        </div>
        <input v-model="confirmPassword" class="border-none outline-none w-full h-8 ml-4" type="password" id="confirmPassword" placeholder="确认密码" autocomplete="confirm-password">
      </div>
      <div class="box-border pt-[6vw] px-[3vw] pb-0 flex ">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">
          用户姓名：
        </div>
        <input v-model="userName" class="border-none outline-none w-full h-8 ml-4" type="text" id="userName" placeholder="请输入用户姓名">
      </div>
      <div class="box-border pt-[6vw] px-[3vw] pb-0 flex">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">
          性别：
        </div>
        <div class="flex items-center" style="font-size:3vw;">
          <label class="ml-20" style="width:10vw;height: 3.2vw;">
            <input type="radio" name="sex" value="1" v-model="userSex"> 男
          </label>
          <label class="ml-16" style="width:10vw;height: 3.2vw;">
            <input type="radio" name="sex" value="2" v-model="userSex"> 女
          </label>
        </div>
      </div>
      <div class="w-full h-30 flex box-border py-[4vw] px-[3vw] justify-center items-center text-3xl font-bold text-white ">
        <button class="w-full h-20 bg-[#38CA73FF] rounded-md" type="submit">注册</button>
      </div>
    </form>
  </div>
  </body>
</template>


<style scoped>

</style>