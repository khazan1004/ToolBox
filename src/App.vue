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
        <el-scrollbar>
          <NavLeft></NavLeft>
        </el-scrollbar>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
