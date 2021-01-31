<template>
    <div class="youlike-wrapper">
      <div class="titleWrapper">
        <div class="middleline"></div>
        <h4 class="title">猜你喜欢</h4>
      </div>
      <ul class="youlike-container">
        <YouLikeItem v-for="product in youlike_list" :key="product.id" :product='product'/>
      </ul>
    </div>
</template>
<script>
import YouLikeItem from './YouLikeItem'
export default {
    props:{
        youlike_list:Array
    },
    components:{
        YouLikeItem
    }
}
</script>
<style lang="less" scoped>
    .youlike-wrapper{
      margin-top: .625rem;
    }
    .titleWrapper{
      text-align: center;
      padding: 0 .625rem;
      height: 2.1875rem;
    }
    .middleline{
      padding-top: 1rem;
      border-bottom: 1px solid #d8d8d8;
    }
    .title{
      background-color: #f5f5f5;
      position: relative;
      padding: 0 .2rem;
      display: inline-block;
      top: -0.9rem;
    }
    .youlike-container{
      display: flex;
      flex-wrap: wrap;

    }
    .youlike-item{
      display: flex;
      width: 48%;
      background-color: #fff;
      margin: 0 .2rem;
      margin-bottom: .6rem;
    }
    .youlike-link{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .4rem .8rem;
      color: #000;
      font-size: .875rem;
    }
    .name{
      height: 2.5rem;
      -webkit-line-clamp: 2;
      line-height: 1.25rem;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #333;
      margin-bottom: .8rem;
    }
    .image{
      width: 100%;
      height: 100%;
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .75rem;
    }
    .icon{
     width: 1.5rem;
     height: 1.5rem;
    }
    .price{
     color: red;
    }
    .youlike-item:last-child,.youlike-item:nth-last-child(2){
      margin-bottom: 3.4rem;
    }
</style>