<script setup lang="ts" >
import TitleBar from "./components/TitleBar.vue";
import NavLeft from "./components/NavLeft.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
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
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
