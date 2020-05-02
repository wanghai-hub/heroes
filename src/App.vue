<template>
  <div id="app" class="container">
    <!-- 头部 -->
    <my-top ></my-top>
    <!-- 侧边栏 -->
    <div class="col-md-2 left">
      <my-side></my-side>
    </div>
    <!-- 展示区域 -->
    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyTop from './components/MyHead'
import MySide from './components/MySide'
export default {
  name: 'App',
  components: {
    MyTop,MySide
  }
}
</script>

<style lang="less">
#app .left {
  padding: 0;
}
</style>
