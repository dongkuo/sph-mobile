<template>
  <ul class="tab">
    <router-link to="/home">
      <li>
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </li>
    </router-link>
    <router-link to="/cart">
      <li>
        <i class="iconfont icon-cart"></i>
        <span>购物车</span>
      </li>
    </router-link>
    <router-link to="/mine">
      <li>
        <i class="iconfont icon-mine"></i>
        <span>我的</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped>
.tab {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  list-style: none;
  font-size: 12px;
  padding: 0;
  margin: 0;
  border-top: 1px solid #eeeeee;
}

a{
  color: #5D656B;
}

a:active{
  background: #CCCCCC;
}

.router-link-active{
  color: #FE7126;
}

.tab li {
  float: left;
  width: 33.3333333%;
  text-align: center;
  padding: 4px 0;
}

.tab .iconfont {
  display: block;
  margin-bottom: 4px;
  font-size: 20px;
}
</style>
