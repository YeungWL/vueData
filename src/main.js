import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 添加自己写的日历插件
import datePicker from 'plugin/datePicker/index'
// 字体图标
import 'assets/icons/iconfont.css'

Vue.use(ElementUI)
Vue.use(datePicker)

Vue.config.productionTip = false

// 设置浏览器标题
Vue.directive('title', {
  inserted: (el) => {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
