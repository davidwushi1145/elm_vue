<script setup lang="ts">
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
      <div class="search-fixed-top" id="fixedBox">
        <div class="search-panel">
          <i class="fa fa-search" style="flex: 0 0 15px;padding-left: 10px"></i>
          <input type="search" style="flex: 6;outline: none;border: none;color: #9f9f9f ;font-size: 4vw"
                 placeholder="请输入你要查询的商品">
          <div class="search-button" style="flex: 0 0 16vw">搜索</div>
        </div>
      </div>
    </div>
    <!--种类列表部分-->
    <div class="food-type">
      <div class="food-type-item">
        <img src="../assets/img/dcfl01.png" alt="1">
        <p>美食</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl02.png" alt="1">
        <p>早餐</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl03.png" alt="1">
        <p>跑腿代购</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl04.png" alt="1">
        <p>汉堡披萨</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl05.png" alt="1">
        <p>甜品饮品</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl06.png" alt="1">
        <p>速食简餐</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl07.png" alt="1">
        <p>地方小吃</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl08.png" alt="1">
        <p>米粉面馆</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl09.png" alt="1">
        <p>包子粥铺</p>
      </div>
      <div class="food-type-item">
        <img src="../assets/img/dcfl10.png" alt="1">
        <p>炸鸡炸串</p>
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
        <img src="../assets/img/super_member.png" alt="1" style="width: 6vw;height: 6vw;margin-right: 2vw">
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
      <div class="business">
        <img src="../assets/img/sj01.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>万家饺子馆</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种饺子</div>
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
      <div class="business">
        <img src="../assets/img/sj02.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>小锅饭豆腐馆（全运店）</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售1345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种豆腐</div>
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
      <div class="business">
        <img src="../assets/img/sj03.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>麦当劳</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种汉堡</div>
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
      <div class="business">
        <img src="../assets/img/sj04.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>米村拌饭</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种拌饭</div>
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
      <div class="business">
        <img src="../assets/img/sj05.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>申记串道</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种串串</div>
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

      <div class="business">
        <img src="../assets/img/sj06.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>半亩良田</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售1345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种米饭</div>
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
      <div class="business">
        <img src="../assets/img/sj07.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>茶兮</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种奶茶</div>
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
      <div class="business">
        <img src="../assets/img/sj08.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>唯一水果捞</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种水果捞</div>
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
      <div class="business">
        <img src="../assets/img/sj09.png" alt="123"/>
        <div class="business-info">
          <div class="business-name">
            <h3>满园春饼</h3>
            <i class="fa fa-mobile-phone" style="font-size: 4vw"></i>
          </div>
          <div class="business-info-start">
            <div class="business-info-left">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <p>
                4.9&nbsp;月售345单
              </p>
            </div>
            <div class="business-info-right" style="line-height: 1">
              蜂鸟专送
            </div>
          </div>
          <div class="business-delivery">
            <p>15元起送</p>
            <p>3.22km</p>
          </div>
          <div class="business-info-detail">
            <div>各种烤鸭</div>
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
    </div>

    <!--在dom文档中留下一个位置为上面的margin-bottom的计算提供支持-->
    <div>&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;</div>

  </div>
  </body>
</template>

<style scoped>

</style>