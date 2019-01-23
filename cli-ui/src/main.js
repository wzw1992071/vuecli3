import Vue from 'vue'
import App from './App.vue'
import axios from "@/utils/myAxios"
import * as Allhttp from "@/http/http"
import router from './router/router'
import store from "@/vuex/store"


// 引入公共方法
import utils from "@/utils/utils.js"
Vue.prototype.$utils = utils
window.$utils = utils
//初始化css样式
import "@/assets/css/normalize.less"

// 引入饿了么UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入封装过的axios
Vue.prototype.$http = Allhttp
Vue.prototype.$axios = axios
Vue.prototype.$_ = _

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
