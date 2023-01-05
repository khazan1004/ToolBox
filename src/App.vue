<script setup lang="ts" >
import TitleBar from "./components/TitleBar.vue";
import NavLeft from "./components/NavLeft.vue";
</script>
<template>
  <el-container style="height: 100vh">
    <el-header style="-webkit-app-region: drag">
      <TitleBar></TitleBar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <NavLeft></NavLeft>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: $--font-family;
  color: $--font-color;
  text-align: center;
  overflow: hidden;
}
.el-header {
  height: $--el-header-height;
}
.el-aside {
  height: calc(100vh - $--el-header-height);
}
.el-main {
  height: calc(100vh - $--el-header-height);

  // 滚动条样式优化
  &::-webkit-scrollbar {
    // ​滚动条整体部分
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    // ​外层轨道
    box-shadow: inset 0 0 5px $--scrollbar-color-light;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    // 内嵌滑块
    border-radius: 10px;
    box-shadow: inset 0 0 5px $--scrollbar-color-light;
    opacity: 0.2;
  }
}
</style>
