<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {getToken} from "@/authService";

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

const listOrdersByUserId = async () => {
  try {
    const response = await axios.get('/api/orders/lists', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
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
    const ordersResponse = await listOrdersByUserId();
    if (ordersResponse.code === 200 && Array.isArray(ordersResponse.data)) {
      // 遍历所有订单，并填充 businessVo 和订单详细信息
      orders.value = await Promise.all(ordersResponse.data.map(async (order: OrdersVo) => {
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
        return {...order, businessVo: businessInfo, list: orderDetailsInfo, show: false};

      }));
    }
  } catch (error) {
    console.error('Error fetching and filling orders data:', error);
  }
};

const toggleOrderDetails = (orderId: number) => {
  // console.log('toggleOrderDetails:', orderId);

  orders.value = orders.value.map(order => {
    if (order.orderId === orderId) {
      // console.log('order:', order);
      return {...order, show: !order.show};
    }
    return order;
  });
};


onMounted(fetchAndFillOrdersData);

</script>


<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header
        class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p class="">我的订单</p>
    </header>

    <!--订单列表部分-->
    <h3 class=" mt-24 box-border p-[4vw] text-3xl font-light text-[#999999FF]">未支付订单信息：</h3>
    <ul class="w-full">
      <li v-for="order in orders" :key="order.orderId" class="w-full text-3xl">
        <div v-if="order.orderState===0"
             class="box-border py-[2vw] px-[4vw] text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            {{ order.businessVo ? order.businessVo.businessName : '' }}
            <svg class="fa-caret-down" height="20" viewBox="0 0 32 32"
                 width="20" xmlns="http://www.w3.org/2000/svg"
                 @click="toggleOrderDetails(order.orderId)">
              <path d="m24 12l-8 10l-8-10z" fill="currentColor"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;{{ order.orderTotal + (order.businessVo?.deliveryPrice || 0) }}</p>
            <RouterLink :to="`/payment/${order.orderId}`" class="block w-full h-full">
              <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer">去支付
              </button>
            </RouterLink>
          </div>
        </div>
        <ul v-if="order.orderState===0" v-show="order.show" class="w-full order-detailet">
          <li v-for="detail in order.list" :key="detail.odId"
              class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">{{ detail.food.foodName }}*{{ detail.quantity }}</p>
            <p class="">&#165;{{ detail.food.foodPrice * detail.quantity }}</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;{{ order.businessVo ? order.businessVo.deliveryPrice : '' }}</p>
          </li>
        </ul>
      </li>

    </ul>

    <h3 class=" mt-24 box-border p-[4vw] text-3xl font-light text-[#999999FF]">已支付订单信息：</h3>
    <ul class="w-full">
      <li v-for="order in orders" :key="order.orderId" class="w-full text-3xl">
        <div v-if="order.orderState===1"
             class="box-border py-[2vw] px-[4vw] text-[#666666FF] flex justify-between items-center">
          <p class="flex flex-row justify-between items-center">
            {{ order.businessVo ? order.businessVo.businessName : '' }}
            <svg class="fa-caret-down" height="20" viewBox="0 0 32 32"
                 width="20" xmlns="http://www.w3.org/2000/svg"
                 @click="toggleOrderDetails(order.orderId)">
              <path d="m24 12l-8 10l-8-10z" fill="currentColor"/>
            </svg>
          </p>
          <div class="flex">
            <p class="">&#165;{{ order.orderTotal + (order.businessVo?.deliveryPrice || 0) }}</p>
            <RouterLink class="block w-full h-full" to="/">
              <button class="bg-green-500 text-white rounded-[3px] ml-4 select-none cursor-pointer">去评价
              </button>
            </RouterLink>
          </div>
        </div>
        <ul v-if="order.orderState===1" v-show="order.show" class="w-full order-detailet">
          <li v-for="detail in order.list" :key="detail.odId"
              class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">{{ detail.food.foodName }} *{{ detail.quantity }}</p>
            <p class="">&#165;{{ detail.food.foodPrice * detail.quantity }}</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;{{ order.businessVo ? order.businessVo.deliveryPrice : '' }}</p>
          </li>
        </ul>
      </li>

    </ul>
  </div>
  <div>&nbsp</div>
  <div>&nbsp</div>
  <div>&nbsp</div>
  <div>&nbsp</div>
  <div>&nbsp</div>
  <div>&nbsp</div>
  </body>
</template>

<style scoped>

</style>
