<template>
<swiper id="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="swiper in sowing_list" :key="swiper.id">
      <img :src="swiper.icon_url" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    data() {
        return {
            swiperOptions:{
                pagination:{
                    el:'.swiper-pagination',
                },
                //循环
                loop:true,
                //切换时长
                autoplay:{
                    delay:1000
                },
                //速度
                speed:600
            }
        }
    },
    props:{
        sowing_list:Array
    },
    components:{
        Swiper,
        SwiperSlide
    }

}
</script>
<style lang="less" scoped>
    #swiper{
        width: 100%;
        height: 14rem;
    }
    #swiper img{
        width: 100%;
        height: 100%;
    }
    #swiper /deep/ .swiper-pagination-bullet-active{
        background-color: #75a342;
    }
</style>