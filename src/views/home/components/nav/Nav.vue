<template>
    <ul class="nav-container">
      <li class="nav-item" v-for="nav in nav_list" :key="nav.cid">
       <a href="#" class="nav-link">
         <div class="nav-img">
           <img :src="nav.icon_url" class="image" alt="">
         </div>
         <p class="text">{{nav.name}}</p>
       </a>
      </li>
      <!-- <li class="nav-item">
       <a href="#" class="nav-link">
         <div class="nav-img">
           <img src="https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg" class="image" alt="">
         </div>
         <p class="text">蔬菜豆制品</p>
       </a>
      </li> -->
    </ul>
</template>
<script>
export default {
    props:{
        nav_list:Array
    }
}
</script>
<style lang="less" scoped>
    .nav-container{
        padding-top: .9375rem;
        background: #fff;
        padding-bottom: .9375rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .nav-item{
        width: 17%;
        display: flex;
        margin: 0.2rem;
    }
    .nav-link{
        display: flex;
        flex-direction: column;
        color: #000;
        font-size: .7rem;
        text-align: center;
        overflow: hidden;
    }
    .text{
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .nav-img{
        margin-bottom: .2rem;
    }
    .image{
        width: 56%;
        height: 100%;
    }
</style>