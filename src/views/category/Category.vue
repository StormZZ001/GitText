<template>
    <div class="category">
      <Header />
      <div class="listWrapper" v-if="!showLoading">
      <!-- 左边 -->
        <div class="leftWrapper">
          <ul class="leftCategory-container">
            <li class="categoryItem " 
              v-for="(cate,index) in categoriesData"
              :class="{selected:currentIndex===index}"
              :key="cate.id"
              @click="clickLeftLi(index)"
              ref="menuList"
            >
              <span>{{cate.name}}</span>
            </li>
            <!-- <li class="categoryItem selected">
              <span>安心蔬菜</span>
            </li> -->
          </ul>
        </div>
        <!-- 右边 -->
        <ContentView :categoriesDetailData='categoriesDetailData'/>
      </div>
         <van-loading v-else
                type="spinner"
                color="#75a342"
                style="position: absolute;left:50%;top: 40%;transform: translate(-50%)">
            小撩正在拼命加载中…
   </van-loading>
    </div>
</template>
<script>
import { getCategories,getCategoriesDetail } from '../../service/api'
import Header from './components/Header'
import ContentView from './components/ContentView'
import BScroll from '@better-scroll/core'
export default {
  data(){
    return{
      showLoading:true,
      categoriesData:[],
      categoriesDetailData:[],
      currentIndex:0
    }
  },
  created(){
    this.reqData()
  },
  methods:{
    async reqData(){
      let leftRefs=await getCategories()
      //2.1处理左边的数据
      if(leftRefs.success){
        this.categoriesData=leftRefs.data.cate
      }
      //3.隐藏showLoading框
      this.showLoading=false
      this.$nextTick(()=>{
        this.leftScroll=new BScroll('.leftWrapper',{
          probeType:3,
          click:true
        })
      })
    },
    async clickLeftLi(index){
      //2.1 改变索引
      this.currentIndex=index
      //2.2
      let menuList=this.$refs.menuList
      let el=menuList[index]
      this.leftScroll.scrollToElement(el,600)
      //2.3右边商品列表的数据
      let rightRefs=await getCategoriesDetail(`lk00${index+1}`)
      console.log(rightRefs.data)
      if(rightRefs.success){
        this.categoriesDetailData=rightRefs.data.cate
      }
    }
  },
    components:{
        Header,
        ContentView
    }
}
</script>
<style lang="less" scoped>
    .category{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
    .listWrapper{
      position: fixed;
      top: 59px;
      bottom: 50px;
      width: 100%;
      height: 100%;
      display: flex;
    }
    .leftWrapper{
      background-color: #f4f4f4;
      width: 6rem;
      flex: 0 0 5rem;
    }
    .categoryItem{
      padding: .75rem 0;
      border-bottom: 1px solid #e8e9e8;
      
    }
    .categoryItem.selected{
      background-color: #fff;
    }
    .categoryItem.selected span{
      border-left-color: #75a342;
      font-weight: 700;
      font-size: .8125rem;
    }
    .categoryItem span{
      padding: .3125rem .6875rem;
      line-height: 1.25rem;
      border-left: 5px solid transparent;
      color: #666;
      font-size: .75rem;
    }
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