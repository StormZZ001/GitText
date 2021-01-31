<template>
<div class="home">
  <div v-if="!isShowLoading">
    <Header />
    <Sowing :sowing_list='sowing_list'/>
    <Nav :nav_list='nav_list'/>
    <FlashSale :flashsale_list='flashsale_list'/>
    <YouLike :youlike_list='youlike_list'/>
    <MarkPage />
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
import {getHomeData} from './../../service/api/index.js'
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Nav from './components/nav/Nav'
import FlashSale from './components/flashsale/flashsale'
import YouLike from './components/youlike/YouLike'
import MarkPage from './components/markPage/markPage'
export default {
    data() {
        return {
            //轮播图数据
            sowing_list:[],
            //是否加载未获取到数据时的loading图标
            isShowLoading:true,
            //首页导航数据
            nav_list:[],
            //限时抢购数据
            flashsale_list:[],
            //猜你喜欢数据
            youlike_list:[]
        }
    },
    created() {
        this.reqData()
    },
    methods: {
        async reqData(){
            let res=await getHomeData()
            console.log(res.data)
            if(res.success){
                this.sowing_list=res.data.list[0].icon_list
                this.nav_list=res.data.list[2].icon_list
                this.flashsale_list=res.data.list[3].product_list
                this.youlike_list=res.data.list[12].product_list
                this.isShowLoading=false
            }
        }
    },
    components:{
        Header,
        Sowing,
        Nav,
        FlashSale,
        YouLike,
        MarkPage
    }
}
</script>
<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>