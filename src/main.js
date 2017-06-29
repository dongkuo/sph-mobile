import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.css'
import App from './App'
import router from './router'

import { Search, Swipe, SwipeItem, Header } from 'mint-ui'
import Tab from '@/components/Tab'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.component(Tab.name, Tab)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Search.name, Search)
Vue.component(Header.name, Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
