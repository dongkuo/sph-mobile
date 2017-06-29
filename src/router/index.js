import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import List from '@/components/List'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/goods/list',
      name: 'list',
      component: List
    },
    {
      path: '/goods/detail/:id',
      name: 'goods-detail',
      component: GoodsDetail
    }
  ]
})
