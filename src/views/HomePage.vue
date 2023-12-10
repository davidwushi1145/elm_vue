<script lang="ts" setup>
import {onMounted, ref} from 'vue';
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
  orderQuantity: number;
}

const businesses = ref<Business[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/business/businessLists');
    if (response && response.data && response.data.data) {
      businesses.value = response.data.data as Business[];
    }
  } catch (error) {
    console.error('Error fetching businesses:', error);
  }
});
</script>

<template>
  <body>
  <div class="wrapper">
    <!--header部分-->
    <header>
      <div class="icon-location-box">
        <div class="icon-location"></div>
      </div>
      <div>
        <div class="location-text">
          <span class="location-text-1">云南省</span>
          <span class="location-text-2">昆明市呈贡区云南大学</span>
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
    </header>
    <!--搜索栏部分-->
    <div class="search">
      <div id="fixedBox" class="search-fixed-top">
        <div class="search-panel">
          <i class="fa fa-search" style="flex: 0 0 15px;padding-left: 10px"></i>
          <input placeholder="请输入你要查询的商品" style="flex: 6;outline: none;border: none;color: #9f9f9f ;font-size: 4vw"
                 type="search">
          <div class="search-button" style="flex: 0 0 16vw">搜索</div>
        </div>
      </div>
    </div>
    <!--种类列表部分-->
    <div class="food-type">
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/1`">
        <img alt="1" src="../assets/img/dcfl01.png">
        <p>美食</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/2`">
        <img alt="1" src="../assets/img/dcfl02.png">
        <p>早餐</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/3`">
        <img alt="1" src="../assets/img/dcfl03.png">
        <p>跑腿代购</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/4`">
        <img alt="1" src="../assets/img/dcfl04.png">
        <p>汉堡披萨</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/5`">
        <img alt="1" src="../assets/img/dcfl05.png">
        <p>甜品饮品</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/6`">
        <img alt="1" src="../assets/img/dcfl06.png">
        <p>速食简餐</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/7`">
        <img alt="1" src="../assets/img/dcfl07.png">
        <p>地方小吃</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/8`">
        <img alt="1" src="../assets/img/dcfl08.png">
        <p>米粉面馆</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/9`">
        <img alt="1" src="../assets/img/dcfl09.png">
        <p>包子粥铺</p>
        </RouterLink>
      </div>
      <div class="food-type-item">
        <RouterLink :to="`/bussiness-type/10`">
        <img alt="1" src="../assets/img/dcfl10.png">
        <p>炸鸡炸串</p>
        </RouterLink>
      </div>
    </div>

    <!--浮动广告-->
    <div class="banner">
      <h3 class="h3Title" style="margin-bottom: 1.2vw">品质套餐</h3>
      <p class="bannerText" style="margin-bottom: 4.4vw;">搭配吃得好</p>
      <a class="linkText">立即抢购&nbsp;></a>
    </div>
    <!--超级会员-->
    <div class="supperMember">
      <div class="left">
        <img alt="1" src="../assets/img/super_member.png" style="width: 6vw;height: 6vw;margin-right: 2vw">
        <h3 class="h3Title" style="margin-right: 2vw">超级会员</h3>
        <p class="bannerText">&#8226;每月享超值权益</p>
      </div>
      <div class="right linkText" style="margin-right: 4vw">立即开通&nbsp;></div>
    </div>
    <!--推荐商家-->
    <div class="recommend">
      <div class="recommend-line"></div>
      <p>推荐商家</p>
      <div class="recommend-line"></div>
    </div>
    <!--推荐商家筛选-->
    <div class="recommendType">
      <div>综合排序<i class="fa fa-caret-down"></i></div>
      <div>距离最近</div>
      <div>销量最高</div>
      <div>筛选<i class="fa fa-filter"></i></div>
    </div>
    <!--商家列表-->
    <div class="business-list">
      <RouterLink class="block w-full" :to="`/business-info/${business.businessId}`" v-for="business in businesses" :key="business.businessId" >
      <div class="business">
        <img :alt="business.businessName" :src="business.businessImg"/>
        <div class="business-info">
          <div class="business-name">
            <h3>{{ business.businessName }}</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <!-- 星级和月售等信息 -->
            <!-- ... -->
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售{{ business.orderQuantity }}单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>{{ business.starPrice }}元起送</p>
            <p>1km</p>
          </div>
          <div class="business-info-detail">
            <div>{{ business.businessExplain }}</div>
          </div>
          <div class="business-info-promotion">
            <div class="business-info-promotion-left">
              <div class="business-info-promotion-left-icon">新</div>
              <p>饿了么新用户首单立减9元</p>
            </div>
            <div class="business-info-promotion-right">
              <p>2个活动&nbsp;&nbsp;</p>
              <i class="fa fa-caret-down"></i>
            </div>
          </div>
          <div class="business-info-promotion">
            <div class="business-info-promotion-left">
              <div class="business-info-promotion-left-icon" style="background-color: orangered">特</div>
              <p>特价商品5元起</p>
            </div>
          </div>
        </div>
      </div>
      </RouterLink>
    </div>

    <!--在dom文档中留下一个位置为上面的margin-bottom的计算提供支持-->
    <div>&nbsp;&nbsp;&nbsp;</div>

  </div>
  </body>
</template>

<style scoped>

</style>