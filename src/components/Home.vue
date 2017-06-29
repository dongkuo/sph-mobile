<template>
  <div>
    <tab></tab>
    <!--搜索-->
    <mt-search class="search"></mt-search>
    <!--幻灯片-->
    <mt-swipe :auto="3000"
              class="swipe">
      <mt-swipe-item v-for="banner in banners" :key="banner.id">
        <img v-bind:src="banner.url + banner.imgPath" width="100%" height="150px">
      </mt-swipe-item>
    </mt-swipe>
    <!--cate-list-->
    <ul class="cate-list">
      <router-link v-for="floor in floors.slice(0, 8)" v-bind:to="'/goods/list?typeId=' + floor.id" :key="floor.id">
        <li>
          <img src="../assets/100x100.png">
          <span>{{floor.name}}</span>
        </li>
      </router-link>
    </ul>
    <!--楼层-->
    <div class="floor"
         v-for="(floor, index) in floors">
      <p class="floor-head"><span class="number">{{index + 1}}L</span> <span class="title">{{floor.name}}</span></p>
      <ul>
        <li class="floor-item" v-for="goods in floor.goodsList">
          <router-link v-bind:to="'/goods/detail/' + goods.id">
            <img class="image"
                 v-bind:src="goods.imgPath">
            <p class="title">{{goods.name}}</p>
            <p class="price">￥ {{(goods.minPrice / 100).toFixed(2)}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        floors: [],
        banners: []
      }
    },
    mounted: function () {
      // 获取banner
      this.$http.get('/api/banners').then(response => {
        this.banners = response.body.list
      }, response => {
      })
      // 获取分类/楼层信息
      this.$http.get('/api/floors').then(response => {
        this.floors = response.body.list
        console.log(this.floors)
      }, response => {
      })
    }
  }
</script>

<style scoped>

  .search {
    height: 44px;
  }

  .swipe {
    width: 100%;
    height: 150px;
    background: #cccccc;
  }

  .cate-list li {
    float: left;
    width: 25%;
    text-align: center;
    margin: 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cate-list li img {
    width: 50%;
    border-radius: 50%;
    display: block;
    margin: 0 auto 8px auto;
  }

  .cate-list a{
    color: #333333;
  }

  .floor {
    margin-top: 8px;
    background: #FFFFFF;
  }

  .floor-head {
    font-size: 16px;
    margin: 0;
  }

  .floor-head .number {
    background: url('../assets/floor.png') no-repeat;
    color: #FFFFFF;
    text-align: center;
    padding: 4px 6px;
    display: inline-block;
  }

  .floor-item {
    float: left;
    width: 50%;
  }

  .floor-item .image {
    width: 100%;
    display: block;
    height: 150px;
    border: none;
  }

  .floor-item .title {
    color: #666666;
    font-size: 12px;
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .floor-item .price {
    padding: 0 8px;
    font-size: 14px;
    color: #ff5000;
    font-weight: bold;
  }
</style>
