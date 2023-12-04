<script setup lang="ts">

</script>

<template>
  <body class="">
  <div class="w-full h-full ">
    <!--herder部分-->
    <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
      <p>商家信息</p>
    </header>

    <!--商家图片部分-->
    <div class="w-full h-full mt-28 flex justify-center items-center text-base">
      <img class="w-72 h-72 rounded" src="/src/assets/img/sj01.png">
    </div>

    <!--商家信息部分-->
    <div class="w-full h-32 flex flex-col justify-center items-center text-2xl">
      <h1 class="text-4xl font-semibold ">万家饺子（软件园E18店）</h1>
      <p class="text-2xl font-medium text-gray-500 mt-px">&#165;15起送 &#165;3配送</p>
      <p class="text-2xl font-medium text-gray-500 mt-px">各种饺子炒菜</p>
    </div>

    <!--食品列表部分-->
    <ul class="w-full mb-7 text-sm">
      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp01.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">新鲜猪肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;15</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>3</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp02.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">玉米鲜肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">玉米鲜肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;16</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>2</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp03.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">虾仁三鲜（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">虾仁三鲜</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;22</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp04.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">素三鲜（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">素三鲜</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;15</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp05.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">角瓜鸡蛋（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">角瓜鸡蛋</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&&#165;16</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp06.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">小白菜肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">小白菜肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;18</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 mt-8 mb-32 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp07.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">芹菜牛肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">芹菜牛肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;18</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>
    </ul>

    <!--购物车部-->
    <div class="w-full h-28 fixed left-0 bottom-0 flex text-base">
      <div class=" bg-gray-700 basis-2/3 flex">
        <div class="w-32 h-32 box-border border-solid border-8 border-gray-700 rounded-full bg-blue-500 text-white flex justify-center items-center -mt-2 -ml-1 relative">
          <i class="fa fa-shopping-cart fa-3x"></i>
          <div class="w-10 h-10 rounded-full bg-red-600 text-white text-2xl flex justify-center items-center absolute -right-1/4 -top-1/4">3</div>
        </div>
        <div>
          <p class="text-4xl text-white mt-4">&#165;12.88</p>
          <p class="text-xl text-gray-500">另需配送费3元</p>
        </div>
      </div>


      <div class="basis-1/3">
        <RouterLink class="block w-full h-full" to="/order">
        <button class="w-full h-full bg-green-500 text-white text-4xl font-bold select-none cursor-pointer flex justify-center items-center">
          去结算
        </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <div>&nbsp;</div>
  </body>
</template>

<style scoped>

</style>