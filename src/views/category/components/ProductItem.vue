<template>
    <ul class="productWrapper">
  <!-- <li class="product-item">
    <a href="#" class="product-link">
      <div class="product-img">
        <img src="https://img.ddimg.mobi/product/2f9f42dd5c3311558682395205.jpg!deliver.product.list" class="image" alt="">
      </div>
      <div class="product-info">
        <div class="product-info-text">
          <div class="product-name">清美内酯豆腐 400g/盒 清美内酯豆腐 400g/盒</div>
          <div class="product-desc">质地细嫩 色香味均优于其他普通豆腐 质地细嫩 色香味均优于其他普通豆腐</div>
        </div>
        <div class="divide"></div>
        <div class="product-price">
          <p class="price">&yen;2.0</p>
          <div class="iconCartWrapper"><svg viewBox="0 0 52 52" class="icon iconCart"><defs data-v-7088208a=""><radialGradient data-v-7088208a="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop stop-color="#4ECA75" offset="0%"></stop><stop stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-678.000000, -2742.000000)"><g transform="translate(678.000000, 2742.000000)"><rect data-v-7088208a="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
        </div>
      </div>
    </a>
  </li> -->
 <li class="product-item" v-for="product in products" :key="product.id">
    <a href="#" class="product-link">
      <div class="product-img">
        <img :src="product.small_image" class="image" alt="">
      </div>
      <div class="product-info">
        <div class="product-info-text">
          <div class="product-name">{{product.name}}</div>
          <div class="product-desc">{{product.spec}}</div>
        </div>
        <div class="divide"></div>
        <div class="product-price">
          <p class="price">{{product.price | moneyFormat}}</p>
          <div class="iconCartWrapper"><svg viewBox="0 0 52 52" class="icon iconCart"><defs data-v-7088208a=""><radialGradient data-v-7088208a="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop stop-color="#4ECA75" offset="0%"></stop><stop stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-678.000000, -2742.000000)"><g transform="translate(678.000000, 2742.000000)"><rect data-v-7088208a="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
        </div>
      </div>
    </a>
 </li>
</ul>
</template>
<script>
export default {
    props:{
        products:Array
    }
}
</script>
<style lang="less" scoped>
    .productWrapper{
      padding: .8125rem 0;
      background-color: #fff;
    }
    .product-item{
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
      border-bottom: 1px solid #e0e0e0;
    }
    #product:last-child .product-item:last-child{
        margin-bottom: 100px;
    }
    .product-link{
      display: flex;
      color: #000;
      font-size: .85rem;
    }
    .product-img{
      width: 4.625rem;
      height: 4.625rem;
      flex: 0 0 4.625rem;
    }
    .product-info{
      width: 220px;
    }
    .image{
      width: 100%;
      height: 100%;
    }
    .icon{
      width: 2rem;
      height: 2rem;
    }
    .product-name{
      line-height: 1.25rem;
      color: #333;
      font-size: .9125rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .product-desc{
      line-height: 1.25rem;
      color: #666;
      font-size: .75rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .product-price{
      display: flex;
      justify-content: space-between;
    }
    .price{
      line-height: 2rem;
      height: 2rem;
      font-size: .95rem;
      color: red;
    }
    .iconCartWrapper{
      position: relative;
      right: 10px;
    }
    .divide{
      height: 0.6rem;
    }
</style>