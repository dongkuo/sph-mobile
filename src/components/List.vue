<template>
  <div>
    <!--搜索-->
    <mt-search class="search"></mt-search>
    <!--列表-->
    <ul v-if="goodsList" class="goods-list">
      <li class="floor-item" v-for="goods in goodsList">
        <router-link v-bind:to="'/goods/detail/' + goods.id">
          <img class="image"
               v-bind:src="goods.imgPath">
          <p class="title">{{goods.name}}</p>
          <p class="price">￥ {{(goods.minPrice / 100).toFixed(2)}}</p>
        </router-link>
      </li>
    </ul>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        goodsList: []
      }
    },
    created: function () {
      this.$http.get('/api/goods/search?typeId=' + this.$route.query.typeId).then(response => {
        this.goodsList = response.body.list.page.data
        console.log('goodsList:', this.goodsList)
      }, response => {
        console.log('err:', response)
      })
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
  }

  .goods-list{
    margin-top: 56px;
    background: #ffffff;
  }

  .goods-list li{
    float: left;
    width: 50%;
  }

  .title {
    color: #666666;
    font-size: 12px;
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  li img{
    width: 100%;
    display: block;
    height: 150px;
    border: none;
  }

  .price {
    padding: 0 8px;
    font-size: 14px;
    color: #ff5000;
    font-weight: bold;
  }
</style>
