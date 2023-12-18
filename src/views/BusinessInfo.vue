<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import axios from 'axios';
import {useRoute} from 'vue-router';
import {getToken} from "@/authService";
import router from "@/router";

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

interface CartItem {
  businessId: number;
  cartId: number;
  foodId: number;
  quantity: number;
  businessVo: any;
  foodVo: any;
}

interface Food {
  businessId: number;
  foodExplain: string;
  foodId: number;
  foodImg: string;
  foodName: string;
  foodPrice: number;
  remarks: string;
}

const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
const totalCartPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity * item.foodVo.foodPrice, 0);
});
const route = useRoute();
const businessId = route.params.businessId; // 正确获取路由参数
const business = ref<Business | null>(null);
const foods = ref<Food[]>([]);
const cartItems = ref<CartItem[]>([]);

const BUSINESS_API_URL = `/api/business/businesses/${businessId}`;
const FOODS_API_URL = `/api/food/lists/${businessId}`;
const CART_API_URL = `/api/cart/lists`;

const fetchData = async () => {
  try {
    const businessResponse = await axios.get(BUSINESS_API_URL);
    if (businessResponse && businessResponse.data && businessResponse.data.data) {
      business.value = businessResponse.data.data;
    }

    const foodsResponse = await axios.get(FOODS_API_URL);
    if (foodsResponse && foodsResponse.data && foodsResponse.data.data) {
      foods.value = foodsResponse.data.data;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const fetchCart = async () => {
  try {
    const cartResponse = await axios.get(CART_API_URL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken()
      },
      params: {
        businessId: businessId
      }
    });
    if (cartResponse && cartResponse.data && cartResponse.data.data) {
      const cartArr: CartItem[] = cartResponse.data.data;
      // 将购物车数据与食品数据进行合并
      // console.log('foods:', foods.value);
      cartArr.forEach(cartItem => {
        const food = foods.value.find(food => food.foodId === cartItem.foodId);
        if (food) {
          cartItem.foodVo = food;
        } else {
          console.warn(`No matching food found for cartItem with foodId: ${cartItem.foodId}`);
        }
      });
      // 将购物车数据与商家数据进行合并
      cartArr.forEach(cartItem => {
        cartItem.businessVo = business.value;
      });
      cartItems.value = cartArr;
      // console.log('cartArr:', cartArr);
      // console.log('cartItems:', cartItems);
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};
// 添加购物车项
const saveCart = async (foodId: number) => {
  try {
    const response = await axios.post('/api/cart/newCarts', null, {
      headers: {
        'Content-Type': 'application/json',
        'token': getToken()
      },
      params: {
        businessId: businessId,
        foodId: foodId
      }
    });

    if (response.data.code === 200) {
      // 成功添加到购物车
      // console.log('Cart item added successfully:', response.data);
      const newCartItem = response.data.data; // 获取新购物车项
      const food = foods.value.find(food => food.foodId === foodId); // 找到对应的食品项
      if (food) {
        newCartItem.foodVo = food; // 将食品项赋值给新购物车项的foodVo属性
      }
      return newCartItem;
    } else {
      // 处理错误情况
      console.error('Error adding to cart:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
// 更新购物车项
const updateCart = async (foodId: number, quantity: number) => {
  try {
    const response = await axios.post('/api/cart/updated-carts', null, {
      headers: {
        'Content-Type': 'application/json',
        'token': getToken()
      },
      params: {
        businessId: businessId,
        foodId: foodId,
        quantity: quantity
      }
    });

    if (response.data.code === 200) {
      // 成功更新购物车
      // console.log('Cart item updated successfully:', response.data);
    } else {
      // 处理错误情况
      console.error('Error updating cart:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
// 删除购物车项
const removeCart = async (foodId: number) => {
  try {
    const response = await axios.delete('/api/cart/removed-carts', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': getToken()
      },
      params: {
        businessId: businessId,
        foodId: foodId
      }
    });

    if (response.data.code === 200) {
      // 成功删除购物车项
      // console.log('Cart item removed successfully:', response.data);
    } else {
      // 处理错误情况
      console.error('Error removing from cart:', response.data.message);
    }
  } catch (error) {
    console.error('Error making request:', error);
  }
};
const createOrder = async (businessId: number, daId: number, orderTotal: number) => {
  try {
    const response = await axios.post('/api/orders/newOrders', null, {
      params: {
        businessId,
        daId,
        orderTotal
      },
      headers: {
        'Content-Type': 'application/json',
        'token': getToken(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating orders:', error);
    throw error;
  }
};
const handleCreateOrder = async (businessId: number, daId: number, orderTotal: number) => {
  try {
    // console.log(businessId,daId,orderTotal);
    const result = await createOrder(businessId, daId, orderTotal);
    // console.log('Order created successfully:', result);
    // 在成功创建订单后跳转到订单页面
    await router.push({name: 'Order', params: {orderId: result.data}});
  } catch (error) {
    console.error('Failed to create order:', error);
  }
};
const increaseQuantity = async (foodId: number) => {
  const cartItem = cartItems.value.find(item => item.foodId === foodId);
  if (cartItem) {
    cartItem.quantity += 1;
    await updateCart(foodId, cartItem.quantity);
  } else {
    const newCartItem = await saveCart(foodId);
    if (newCartItem) {
      cartItems.value.push(newCartItem); // 更新购物车项数组
    }
  }
};


const decreaseQuantity = async (foodId: number) => {
  const cartItem = cartItems.value.find(item => item.foodId === foodId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      await updateCart(foodId, cartItem.quantity);
    } else {
      await removeCart(foodId);
      cartItems.value = cartItems.value.filter(item => item.foodId !== foodId);
    }
  }
};
onMounted(async () => {
  await fetchData();
  await fetchCart();
});
</script>

<template>
  <body class="">
  <div class="w-full h-full ">
    <!--herder部分-->
    <header
        class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>商家信息</p>
    </header>

    <!--商家图片部分-->
    <div v-if="business" class="w-full h-full mt-28 flex justify-center items-center text-base">
      <img :src="business.businessImg || '/src/assets/img/default.png'" class="w-72 h-72 rounded">
    </div>

    <!--商家信息部分-->
    <div v-if="business" class="w-full h-32 flex flex-col justify-center items-center text-2xl">
      <h1 class="text-4xl font-semibold ">{{ business.businessName }}</h1>
      <p class="text-2xl font-medium text-gray-500 mt-px">&#165;{{ business.starPrice }}起送
        &#165;{{ business.deliveryPrice }}配送</p>
      <p class="text-2xl font-medium text-gray-500 mt-px">{{ business.businessExplain }}</p>
    </div>

    <!-- 商家食品列表 -->
    <ul class="w-full mb-7 text-sm">
      <li v-for="food in foods" :key="food.foodId"
          class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img :src="food.foodImg" alt="食品图片" class="ml-3 w-1/3 h-1/3">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">{{ food.foodName }}</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">{{ food.foodExplain }}</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;{{ food.foodPrice }}</p>
          </div>
        </div>
        <!-- 添加和减少按钮逻辑 -->
        <div class="w-18 flex justify-between items-center">
          <!-- 减少按钮 -->
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"
               @click="() => decreaseQuantity(food.foodId)"></i>
          </div>
          <!-- 数量 -->
          <p class="text-3xl text-gray-600"><span> {{
              (cartItems.find(item => item.foodId === food.foodId) || {quantity: 0}).quantity
            }}</span></p>
          <!-- 增加按钮 -->
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"
               @click="() => increaseQuantity(food.foodId)"></i>
          </div>
        </div>
      </li>
    </ul>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <!--购物车部-->
    <div class="w-full h-28 fixed left-0 bottom-0 flex text-base">
      <div class=" bg-gray-700 basis-2/3 flex">
        <div
            class="w-32 h-32 box-border border-solid border-8 border-gray-700 rounded-full bg-blue-500 text-white flex justify-center items-center -mt-2 -ml-1 relative">
          <i class="fa fa-shopping-cart fa-3x"></i>
          <div
              class="w-10 h-10 rounded-full bg-red-600 text-white text-2xl flex justify-center items-center absolute -right-1/4 -top-1/4">
            {{ totalQuantity }}
          </div>
        </div>
        <div>
          <p class="text-4xl text-white mt-4">&#165;{{ totalCartPrice }}</p>
          <p class="text-xl text-gray-500">另需配送费3元</p>
        </div>
      </div>


      <div class="basis-1/3">
        <button
            class="w-full h-full bg-green-500 text-white text-4xl font-bold select-none cursor-pointer flex justify-center items-center"
            @click="totalCartPrice > 0 && handleCreateOrder(Number(businessId), 1, totalCartPrice)">
          去结算
        </button>
      </div>
    </div>
  </div>
  <div>&nbsp;</div>
  </body>
</template>

<style scoped>

</style>
