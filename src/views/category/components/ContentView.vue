<template>
<div class="rightWrapper">
<div id="product"
   v-for="categoriesDetail in categoriesDetailData" 
   :key="categoriesDetail.id"
>
<div class="categoryTitle">{{categoriesDetail.name}}</div>
<ProductItem :products='categoriesDetail.products'/>
</div>
</div>
</template>
<script>
import ProductItem from './ProductItem'
export default {
    props:{
        categoriesDetailData:Array
    },
    components:{
        ProductItem
    }
}
</script>
<style lang="less" scoped>
    .rightWrapper{
      width: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
    }
    .categoryTitle{
      padding: 0 .3125rem;
      height: 1.25rem;
      line-height: 1.25rem;
      font-size: .75rem;
      background: #f8f8f8;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
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
      width: 40%;
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