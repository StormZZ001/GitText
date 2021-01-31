import Vue from 'vue'
//金钱格式化的全局过滤器
Vue.filter('moneyFormat',(value)=>{
    return '¥'+Number(value).toFixed(2)
})