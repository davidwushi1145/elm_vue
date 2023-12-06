<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {getToken} from "@/authService";
import {ElMessage} from "element-plus";


interface DeliveryAddress {
  contactName: string;
  contactSex: number;
  contactTel: string;
  address: string;
  daId: number;
}

const listDeliveryAddressByUserId = async () => {
  try {
    const response = await axios.get('/api/deliveryAddress/lists', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken()
      }
    });

    if (response.data.code === 200) {
      return response.data.data; // This will be an array of DeliveryAddressVo objects
    } else {
      console.error('Error fetching delivery addresses:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
const newDeliveryAddress = async (deliveryAddress: DeliveryAddress) => {
  try {
    const response = await axios.post('/api/deliveryAddress/newDA', null, {
      headers: {
        'Content-Type': 'application/json',
        'token': getToken()
      },
      params: {
        address: deliveryAddress.address,
        contactName: deliveryAddress.contactName,
        contactSex: deliveryAddress.contactSex,
        contactTel: deliveryAddress.contactTel
      }
    });

    if (response.data.code === 200) {
      return response.data.data; // This will be the new DeliveryAddressVo object
    } else {
      console.error('Error creating delivery address:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};

const removeDeliveryAddress = async (daId:number) => {
  try {
    const response = await axios.delete(`/api/deliveryAddress/removed-DA`, {
      params: {
        daId: daId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};
const updateDeliveryAddress = async (deliveryAddress: DeliveryAddress) => {
  try {
    const response = await axios.post('/api/deliveryAddress/updated-DA', null, {
      headers: {
        'Content-Type': 'application/json',
        'token': getToken()
      },
      params: {
        address: deliveryAddress.address,
        contactName: deliveryAddress.contactName,
        contactSex: deliveryAddress.contactSex,
        contactTel: deliveryAddress.contactTel,
        daId: deliveryAddress.daId
      }
    });

    if (response.data.code === 200) {
      return response.data.data; // This will be the number of updated addresses
    } else {
      console.error('Error updating delivery address:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
const getDeliveryAddressById = async (daId: number) => {
  try {
    const response = await axios.get(`/api/deliveryAddress/${daId}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken()
      }
    });

    if (response.data.code === 200) {
      return response.data.data; // This will be a DeliveryAddressVo object
    } else {
      console.error('Error fetching delivery address:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
const sexFilter = (sex: number) => {
  return sex === 0 ? '男' : '女';
};
const dialogVisible = ref(false);
const addressForm = ref({
  address: '',
  contactName: '',
  contactTel: '',
  contactSex: ''
});
const submitAddressForm = async () => {
  // 创建一个 DeliveryAddress 对象
  const newAddress: DeliveryAddress = {
    address: addressForm.value.address,
    contactName: addressForm.value.contactName,
    contactTel: addressForm.value.contactTel,
    daId: selectedAddress.value?.daId || 0, // 如果有选中的地址，使用选中的地址的 daId，否则使用 0
    contactSex: 0, // 这里需要填入联系人的性别
  };

  // 调用 editUserAddress 方法
  if (newAddress.daId === 0) {
    await newDeliveryAddress(newAddress);
  } else {
    await editUserAddress(newAddress);
  }

  ElMessage({
    type: 'success',
    message: '成功！'
  });

  await fetchAddresses();
  dialogVisible.value = false;
};
const openF = () => {
  dialogVisible.value = true;
};
const deliveryAddressArr = ref<DeliveryAddress[]>([]);
const selectedAddress = ref<DeliveryAddress | null>(null);
const fetchAddresses = async () => {
  deliveryAddressArr.value = await listDeliveryAddressByUserId();
};
const setDeliveryAddress = (address: DeliveryAddress) => {
  selectedAddress.value = address;
  console.log(selectedAddress.value);
};

const editUserAddress = async (address: DeliveryAddress) => {
  console.log(address);
  await updateDeliveryAddress(address);
};

const removeUserAddress = async (daId: number) => {
  await removeDeliveryAddress(daId);
  deliveryAddressArr.value = deliveryAddressArr.value.filter(item => item.daId !== daId);
};

onMounted(fetchAddresses);
</script>

<template>
  <div class="w-full h-full">

    <!--header部分-->
    <header
        class="w-full h-24 font-medium bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>地址管理</p>
    </header>

    <el-dialog v-model="dialogVisible" title="请输入你的新地址" align-center>
      <el-form :model="addressForm">
        <el-form-item label="地址">
          <el-input v-model="addressForm.address"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="addressForm.contactName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="addressForm.contactSex"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="addressForm.contactTel"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="submitAddressForm">OK</el-button>
  </span>
    </el-dialog>

    <!-- 地址列表部分 -->



    <div class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
    <ul class="mt-24 w-full bg-white">
      <li v-for="item in deliveryAddressArr" class="border-b border-gray-300 flex p-3 mx-3">
        <div class="flex-1 cursor-pointer" @click="setDeliveryAddress(item)">
          <h3 class="text-gray-600 font-light text-xl">{{ item.contactName }}{{ sexFilter(item.contactSex) }}
            {{ item.contactTel }}</h3>
          <p class="text-gray-600 text-lg">{{ item.address }}</p>
        </div>
        <div class="flex-none text-gray-400 text-2xl flex justify-around items-center">
          <i class="fa fa-edit cursor-pointer" @click="openF"></i>
          <i class="fa fa-remove cursor-pointer" @click="removeUserAddress(item.daId)"></i>
        </div>
      </li>
    </ul>
  </div>
    <!-- 新增地址部分 -->
    <div @click="openF"
        class="addbtn bg-white border-t border-b border-gray-300 mt-1 h-14 flex justify-center items-center text-blue-500 text-lg cursor-pointer">
      <i class="fa fa-plus-circle"></i>
      <p class="ml-2">新增收货地址</p>
    </div>

  </div>
</template>

<style scoped>

</style>