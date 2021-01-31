<template>
    <li class="flash-item">
      <a href="#" class="flash-link">
        <div class="flash-img">
          <img :src="product.small_image" class="image" alt="">
        </div>
        <div>
          <p class="name">{{product.name}}</p>
          <p class="origPrice">
            <del>&yen;{{product.origin_price}}</del>
          </p>
          <div class="bottom">
            <p class="price">&yen;{{product.price}}</p>
            <div data-v-6f644c56="" class="iconCartWrapper"><svg data-v-6f644c56="" viewBox="0 0 52 52" class="icon icon-60"><defs data-v-6f644c56=""><radialGradient data-v-6f644c56="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop data-v-6f644c56="" stop-color="#4ECA75" offset="0%"></stop><stop data-v-6f644c56="" stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g data-v-6f644c56="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-6f644c56="" transform="translate(-678.000000, -2742.000000)"><g data-v-6f644c56="" transform="translate(678.000000, 2742.000000)"><rect data-v-6f644c56="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path data-v-6f644c56="" fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path data-v-6f644c56="" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
          </div>
        </div>
      </a>
    </li>
        <!-- <li class="flash-item">
      <a href="#" class="flash-link">
        <div class="flash-img">
          <img src="https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list" class="image" alt="">
        </div>
        <div>
          <p class="name">艾森五花肉500g</p>
          <p class="origPrice">
            <del>&yen;46.90</del>
          </p>
          <div class="bottom">
            <p class="price">&yen;41.80</p>
            <div data-v-6f644c56="" class="iconCartWrapper"><svg data-v-6f644c56="" viewBox="0 0 52 52" class="icon icon-60"><defs data-v-6f644c56=""><radialGradient data-v-6f644c56="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop data-v-6f644c56="" stop-color="#4ECA75" offset="0%"></stop><stop data-v-6f644c56="" stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g data-v-6f644c56="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-6f644c56="" transform="translate(-678.000000, -2742.000000)"><g data-v-6f644c56="" transform="translate(678.000000, 2742.000000)"><rect data-v-6f644c56="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path data-v-6f644c56="" fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path data-v-6f644c56="" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
          </div>
        </div>
      </a>
    </li>
        <li class="flash-item">
      <a href="#" class="flash-link">
        <div class="flash-img">
          <img src="https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list" class="image" alt="">
        </div>
        <div>
          <p class="name">艾森五花肉500g</p>
          <p class="origPrice">
            <del>&yen;46.90</del>
          </p>
          <div class="bottom">
            <p class="price">&yen;41.80</p>
            <div data-v-6f644c56="" class="iconCartWrapper"><svg data-v-6f644c56="" viewBox="0 0 52 52" class="icon icon-60"><defs data-v-6f644c56=""><radialGradient data-v-6f644c56="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop data-v-6f644c56="" stop-color="#4ECA75" offset="0%"></stop><stop data-v-6f644c56="" stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g data-v-6f644c56="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-6f644c56="" transform="translate(-678.000000, -2742.000000)"><g data-v-6f644c56="" transform="translate(678.000000, 2742.000000)"><rect data-v-6f644c56="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path data-v-6f644c56="" fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path data-v-6f644c56="" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
          </div>
        </div>
      </a>
    </li>
            <li class="flash-item">
      <a href="#" class="flash-link">
        <div class="flash-img">
          <img src="https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list" class="image" alt="">
        </div>
        <div>
          <p class="name">艾森五花肉500g</p>
          <p class="origPrice">
            <del>&yen;46.90</del>
          </p>
          <div class="bottom">
            <p class="price">&yen;41.80</p>
            <div class="iconCartWrapper"><svg  viewBox="0 0 52 52" class="icon icon-60"><defs data-v-6f644c56=""><radialGradient data-v-6f644c56="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop data-v-6f644c56="" stop-color="#4ECA75" offset="0%"></stop><stop data-v-6f644c56="" stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g data-v-6f644c56="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-6f644c56="" transform="translate(-678.000000, -2742.000000)"><g data-v-6f644c56="" transform="translate(678.000000, 2742.000000)"><rect data-v-6f644c56="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path data-v-6f644c56="" fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path data-v-6f644c56="" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
          </div>
        </div>
      </a>
    </li>
            <li class="flash-item">
      <a href="#" class="flash-link">
        <div class="flash-img">
          <img src="https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list" class="image" alt="">
        </div>
        <div>
          <p class="name">艾森五花肉500g</p>
          <p class="origPrice">
            <del>&yen;46.90</del>
          </p>
          <div class="bottom">
            <p class="price">&yen;41.80</p>
            <div data-v-6f644c56="" class="iconCartWrapper"><svg data-v-6f644c56="" viewBox="0 0 52 52" class="icon icon-60"><defs data-v-6f644c56=""><radialGradient data-v-6f644c56="" cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop data-v-6f644c56="" stop-color="#4ECA75" offset="0%"></stop><stop data-v-6f644c56="" stop-color="#39B460" offset="100%"></stop></radialGradient></defs><g data-v-6f644c56="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-6f644c56="" transform="translate(-678.000000, -2742.000000)"><g data-v-6f644c56="" transform="translate(678.000000, 2742.000000)"><rect data-v-6f644c56="" fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect><path data-v-6f644c56="" fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path><path data-v-6f644c56="" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path></g></g></g></svg></div>
          </div>
        </div>
      </a>
    </li> -->
</template>
<script>
export default {
    props:{
      product:Object
    }
}
</script>
<style lang="less" scoped>
    .flash-item{
        display: inline-block;
        width: 28%;
        margin-top: .625rem;
        padding: 1.25rem 0 .9375rem 0;
        background: #fff;
        margin:  0 .5rem;
    }
    .flash-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #000;
        font-size: .875rem;
        overflow: hidden;
        white-space: normal;
    }
    .image{
        width: 100%;
        height: 100%;
    }
    .name{
        margin-bottom: .625rem;
        font-size: .8125rem;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 2.5rem;
        line-height: 1.25rem;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icon{
        width: 1.5rem;
        height: 1.5rem;
    }
    .flash-container{
        white-space: nowrap;
        overflow: hidden;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
</style>