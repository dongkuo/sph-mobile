<template>
  <div>
    <mt-header class="header" v-bind:title="data.goods.name">
      <router-link to="/"
                   slot="left">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </router-link>
      <i slot="right"
         class="iconfont icon-jushoucang"></i>
    </mt-header>
    <mt-swipe :auto="3000"
              class="swipe">
      <mt-swipe-item >
        <img v-bind:src="data.goods.imgPath"
             alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="info">
      <h2 class="title">{{data.goods.name}}</h2>
      <div class="body">
        <p>价格：<span class="price">￥ {{(data.goods.minPrice / 100.0).toFixed(2)}}</span></p>
        <p>服务：{{data.goods.serviceInfo}}</p>
        <ul class="number-list">
          <li>累计评论 {{data.evalCount}}</li>
          <li>月销量 {{data.goods.monthlySales || 0}}</li>
          <li>累计销量 {{data.goods.totalSales || 0}}</li>
        </ul>
      </div>
    </div>
    <div class="desc">
      <h3 class="title">商品描述</h3>
      <p class="body" v-html="data.goods.description || '暂无描述'"></p>
    </div>
    <div class="tab">
      <a class="button add-to-cart">加入购物车</a>
      <a class="button buy"
         v-on:click="buy">立即购买</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-detail',
  data: function () {
    return {
      data: {}
    }
  },
  created: function () {
    this.$http.get('/api/goods/' + this.$route.params.id).then(response => {
      this.data = response.body.data
    }, response => {
    })
  },
  methods: {
    buy: function () {
      this.$http.get('/api/articles/summaries?skip=0&limit=10').then(response => {
        console.log(response)
      }, response => {
        // error callback
      })
    }
  }
}
</script>

<style>
.mint-header-title {
  font-size: 16px;
}

.mint-header-button .iconfont {
  font-size: 18px;
}
</style>

<style scoped>
.header{
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  z-index: 99999;
}

.mint-header {
  height: 48px;
  background: #FE7126;
}

.swipe {
  margin-top: 48px;
  height: 250px;
}

.swipe img {
  width: 100%;
  height: 100%;
}

.info {
  padding: 8px;
  background: #FFFFFF;
  margin-bottom: 8px;
}

.info .title {
  font-weight: normal;
  font-size: 17px;
  margin: 8px 0;
}

.info .price {
  font-size: 15px;
  color: #ff5000;
  font-weight: bold;
}

.info .body {
  color: #666666;
}

.info .number-list li {
  float: left;
  width: 33.33%;
}

.desc {
  background: #FFFFFF;
  width: 100%;
  word-wrap:break-word ;
}

.desc .title {
  font-size: 16px;
  font-weight: normal;
  padding: 4px 8px;
  margin: 0px;
}

.desc .body {
  padding: 8px;
  margin: 0px;
  color: #666666;
}

.tab {
  background: #FFFFFF;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 4px 0;
  text-align: center;
  border-top: 1px solid #F2F2F2;
}

.button {
  display: inline-block;
  width: 40%;
  font-size: 14px;
  padding: 12px 8px;
  text-align: center;
}

.add-to-cart {
  border: 1px solid #FE7126;
}

.add-to-cart:active {
  color: #ff7000;
}

.buy {
  background: #FE7126;
  color: #FFFFFF;
}

.buy:active {
  background: #FE6126;
}
</style>
