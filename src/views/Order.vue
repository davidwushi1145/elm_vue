<script lang="ts" setup>
import {useRoute,} from "vue-router";
import {getToken} from "@/authService";
import axios from 'axios';
import {computed, onMounted, ref} from "vue";

const route = useRoute();
const orderId = route.params.orderId; // 正确获取路由参数


interface BusinessVo {
  businessAddress: string;
  businessExplain: string;
  businessId: number;
  businessImg: string;
  businessName: string;
  deliveryPrice: number;
  orderQuantity: number;
  orderTypeId: number;
  remarks: string;
  starPrice: number;
}

interface FoodVo {
  businessId: number;
  foodExplain: string;
  foodId: number;
  foodImg: string;
  foodName: string;
  foodPrice: number;
  remarks: string;
}

interface OrderDetailetVo {
  foodId: number;
  food: FoodVo;
  odId: number;
  orderId: number;
  quantity: number;
}

interface OrdersVo {
  businessId: number;
  businessVo: BusinessVo | null;
  daId: number;
  list: OrderDetailetVo[];
  orderDate: string;
  orderId: number;
  orderState: number;
  orderTotal: number;
  userId: string;
  show: boolean;
}

interface DeliveryAddress {
  contactName: string;
  contactSex: number;
  contactTel: string;
  address: string;
  daId: number;
}

const deliveryAddressArr = ref<DeliveryAddress[]>([]);
const dialogVisible = ref(false);
const selectedAddress = ref<DeliveryAddress | null>(null);

const handleEdit = (index: number, row: DeliveryAddress) => {
  selectedAddress.value = row;
  dialogVisible.value = false;
};

const formatSex = (row: DeliveryAddress) => {
  return row.contactSex === 0 ? '先生' : '女士';
};

const tableData = computed(() => deliveryAddressArr.value);

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

const getOrdersById = async (orderId: number) => {
  try {
    const response = await axios.get(`/api/orders/${orderId}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};
const getBusinessById = async (businessId: number) => {
  try {
    const response = await axios.get(`/api/business/businesses/${businessId}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching business:', error);
    throw error;
  }
};
const fetchOrderDetails = async (orderId: number) => {
  try {
    const response = await axios.get('/api/orders/listsDetailet', {
      params: {orderId},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};
const orders = ref<OrdersVo[]>([]);

const fetchAndFillOrdersData = async () => {
  try {
    const ordersResponse = await getOrdersById(Number(orderId));
    // console.log('ordersResponse:', ordersResponse);
    if (ordersResponse.code === 200) {
      // 填充 businessVo 和订单详细信息
      let order = ordersResponse.data;
      let businessInfo = order.businessVo;
      let orderDetailsInfo = [];

      // 如果 businessVo 为 null，则通过 businessId 获取 businessVo
      if (businessInfo === null && order.businessId) {
        const businessResponse = await getBusinessById(order.businessId);
        if (businessResponse.code === 200 && businessResponse.data) {
          businessInfo = businessResponse.data;
        }
      }

      // 获取订单详细信息
      const orderDetailsResponse = await fetchOrderDetails(order.orderId);
      if (orderDetailsResponse.code === 200 && orderDetailsResponse.data) {
        orderDetailsInfo = orderDetailsResponse.data;
      }
      // console.log('orders:', orders);
      orders.value = [{...order, businessVo: businessInfo, list: orderDetailsInfo, show: false}];
    }
  } catch (error) {
    console.error('Error fetching and filling orders data:', error);
  }
};
const fetchAddresses = async () => {
  deliveryAddressArr.value = await listDeliveryAddressByUserId();
  // console.log('deliveryAddressArr:', deliveryAddressArr.value);
};

const changeA = () => {
  dialogVisible.value = true;
};

const handleClose = (done: () => void) => {
  done();
}

onMounted(async () => {
  await fetchAndFillOrdersData();
  await fetchAddresses();
  if (deliveryAddressArr.value.length > 0) {
    selectedAddress.value = deliveryAddressArr.value[0];
  }
});

</script>

<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header
        class="w-full h-24 font-medium bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>确认订单</p>
    </header>

    <!--订单信息部分-->
    <div v-if="selectedAddress" class="w-full mt-24 bg-[#0097FFFF] box-border p-[2vw] text-white">
      <p class="text-2xl font-light">订单配送至：</p>
      <div class="w-full flex justify-between items-center font-bold select-none cursor-pointer my-1 mx-0">
        <p class="w-[90%] text-4xl">{{ selectedAddress.address }}</p>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" @click="changeA">
          <path d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"
                fill="currentColor"/>
        </svg>
      </div>
      <p class="text2xl">{{ selectedAddress.contactName }}{{ formatSex(selectedAddress) }}
        {{ selectedAddress.contactTel }}</p>
    </div>

    <el-dialog v-model="dialogVisible" :before-close="handleClose" align-center style="overflow: auto;" title="选择一个地址"
               width="80%">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="姓名" prop="contactName"/>
        <el-table-column label="地址" prop="address"/>
        <el-table-column label="电话" prop="contactTel"/>
        <el-table-column :formatter="formatSex" label="性别" prop="contactSex"/>
        <el-table-column align="right" fixed="right">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >选择
            </el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <div v-for="order in orders" :key="order.orderId" class="w-full">
      <p class="box-border p-[3vw] text-3xl font-bold text-[#666666FF] border-solid border-b-[1px] border-b-[#DDDDDDFF]">
        {{ order.businessVo ? order.businessVo.businessName : '' }}</p>

      <!--订单明细部分-->
      <ul v-for="detail in order.list" :key="detail.odId" class="w-full">
        <li class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center ">
          <div class="flex items-center">
            <img :src="detail.food ? detail.food.foodImg : ''"
                 height="40" width="40"/>"
            <p class="text-3xl ml-6">{{ detail.food.foodName }}*{{ detail.quantity }}</p>
          </div>
          <p class="text-3xl">&#165;{{ detail.food.foodPrice * detail.quantity }}</p>
        </li>
      </ul>
      <div class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center text-3xl">
        <p class="">配送费</p>
        <p class="">&#165;{{ order.businessVo ? order.businessVo.deliveryPrice : '' }}</p>
      </div>

      <!--合计部分-->
      <RouterLink :to="`/payment/${orderId}`" class="block w-full h-full">
        <div class="w-full h-28 fixed left-0 bottom-0 flex">
          <div
              class="flex basis-2/3 bg-[#505051FF] text-white text-4xl font-bold select-none justify-center items-center">
            &#165;{{ order.orderTotal + (order.businessVo?.deliveryPrice || 0) }}
          </div>
          <div
              class="flex basis-1/3 bg-[#38CA73FF] text-white text-4xl font-bold select-none cursor-pointer justify-center items-center">
            去支付
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  </body>
</template>

<style scoped>

</style>
