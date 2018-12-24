import VueRouter from 'vue-router'

//导入4个子路由
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

//创建路由对象
const router = new VueRouter({
    routes:[
        //配置路由规则
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/cart',component:CartContainer},
        {path:'/search',component:SearchContainer}
    ],
    linkActiveClass:'mui-active'//配置路由样式
})


//把路由对象暴露出去
export default router