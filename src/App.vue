<script setup lang="ts">
import TitleBar from "./components/TitleBar.vue";
import TcpDebug from "./components/TcpDebug.vue";
</script>
<template>
  <el-container>
    <TitleBar></TitleBar>
    <el-container>
      <el-aside>
        <el-scrollbar>
          <el-menu>
            <el-menu-item> TCP调试 </el-menu-item>
            <el-menu-item> 正则匹配 </el-menu-item>
            <el-menu-item> 文本差异比对 </el-menu-item>
            <el-sub-menu>
              <template #title>进制转换</template>
              <el-menu-item> 十六进制转十进制 </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <TcpDebug></TcpDebug>
      </el-main>
    </el-container>
  </el-container>
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
