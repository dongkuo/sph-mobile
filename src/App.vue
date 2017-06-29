<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    color: #333333;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    overflow: hidden;
  }

  p {
    margin: 8px 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 13px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F3F3F3;
    padding-bottom: 50px;
  }

  .tabbar .iconfont {
    display: block;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .mint-searchbar-inner {
    box-sizing: border-box;
  }
</style>
