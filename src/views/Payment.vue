<script lang="ts" setup>
import {useRoute,} from "vue-router";
import {getToken} from "@/authService";
import axios from 'axios';
import {onMounted, ref} from "vue";
import router from "@/router";

const route = useRoute();
const orderId = route.params.orderId; // 正确获取路由参数

// 定义一个响应式引用来存储当前选中的支付方式
const selectedPayment = ref('alipay');

// 定义一个函数来切换支付方式
const togglePayment = (payment: string) => {
  selectedPayment.value = payment;
};

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
const updateOrder = async (orderId: number, orderState: number) => {
  try {
    const response = await axios.post('/api/orders/newStates', null, {
      params: {
        orderId,
        orderState
      },
      headers: {
        'Content-Type': 'application/json',
        'token': getToken(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};
const changeStatus = (orderState: number) => {
  orderState = orderState === 0 ? 1 : 0;
  return orderState;
};
const handlePayment = async (orderId: number, orderState: number) => {
  try {
    const result = await updateOrder(orderId, changeStatus(orderState));
    console.log('Order pay successfully:', result);
    // 在成功创建订单后跳转到订单页面
    await router.push('/order-list');
  } catch (error) {
    console.error('Failed to create order:', error);
  }
};

onMounted(fetchAndFillOrdersData);

</script>

<template>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header
        class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p class="">在线支付</p>
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
              <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer">待支付
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
  </div>

  <!--支付方式-->
  <ul class="w-full">
    <li class="w-full box-border p-[4vw] flex justify-between items-center">
      <img class="w-[33vw] h-[8.9vw]" src="../assets/img/alipay.png"/>
      <svg :class="selectedPayment === 'alipay' ? 'text-[#38CA73FF]' : 'text-[#a1a1aa]'"
           height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
           @click="togglePayment('alipay')">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"/>
      </svg>
    </li>
    <li class="w-full box-border p-[4vw] flex justify-between items-center">
      <img class="w-[33vw] h-[8.9vw]" src="../assets/img/wechat.png"/>
      <svg :class="selectedPayment === 'wechat' ? 'text-[#38CA73FF]' : 'text-[#a1a1aa]'"
           height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
           @click="togglePayment('wechat')">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"/>
      </svg>
    </li>
  </ul>
  <div v-for="order in orders"
       :key="order.orderId" class="w-full flex-col h-30 flex box-border pt-[4vw] px-[3vw] pb-0 justify-center items-center">
    <button class="w-full h-20 text-3xl font-bold text-white bg-[#38CA73FF] rounded-[4px] border-none outline-none"
            @click="handlePayment(order.orderId, order.orderState)">
      确认支付
    </button>
  </div>
  </body>
</template>

<style scoped>

</style>
