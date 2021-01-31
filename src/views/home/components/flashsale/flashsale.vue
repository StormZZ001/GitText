<template>
    <div class="falshsale-wrapper">
      <div class="titleWrapper">
        <div class="left">
          <h3 class="title">限时抢购</h3>
          <span class="timeline">07:00场</span>
          <div class="state">已结束</div>
        </div>
        <div class="right">
          <a href="#" class="more">更多</a>
        </div>
      </div>
      <!-- <ul class="flash-item">
        <FlashSaleItem />
      </ul> -->
      <ul class="flash-container">
          <FlashSaleItem v-for="product in flashsale_list" :key="product.id" :product='product'/>
      </ul>
    </div>
    
</template>
<script>
import FlashSaleItem from './FlashSaleItem'
export default {
    props:{
        flashsale_list:Array
    },
    components:{
        FlashSaleItem
    }
}
</script>
<style lang="less" scoped>
    .falshsale-wrapper{
       margin-top: .625rem;
       padding: 1.25rem 0 .9375rem 0;
       background: #fff;
    }
    .titleWrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title{
        border-left: 4px solid #75a342;
        padding-left: .3125rem;
    }
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        left: 4%;
    }
    .timeline{
        padding: .15625rem;
        margin-left: .3125rem;
        line-height: .875rem;
        font-size: .875rem;
        padding: .15625rem;
        color: red;
    }
    .state{
        border-radius: 3px;
        border: 1px solid #999;
        color: #666;
        font-size: .875rem;
        margin-left: .3125rem;
    }
    .right{
        position: relative;
        right: 25px;
    }
    .right a{
        color: #000;
        font-size: .875rem;
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