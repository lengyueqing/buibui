import Vue from 'vue'
import App from './App.vue'

import "./mock/mockServe"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper-bundle.min.css"
import "./assets/font/iconfont.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
