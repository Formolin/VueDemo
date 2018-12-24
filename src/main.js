// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'
// 导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由模块
import router from './router.js'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router//挂在路由对象到vm实例上
})
