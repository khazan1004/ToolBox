
<script setup lang="ts">
import { h, ref, nextTick, onMounted, onUnmounted, Ref } from "vue";
import { useRouter } from "vue-router";
import MenuIter from "./MenuIter.vue";

const asideMenu: any[] = [
  {
    title: "首页",
    name: "Home",
  },
  {
    title: "Socket调试",
    name: "SocketDebug",
  },
  {
    title: "WebSocket调试",
    name: "WebSocketDebug",
    isHade: true,
  },
  {
    title: "正则匹配",
    name: "404",
    isHade: true,
  },
  {
    title: "文本差异比对",
    name: "404",
    isHade: true,
  },
  {
    title: "进制转换",
    name: "HexConvert",
  },
  {
    title: "其他",
    children: [
      {
        title: "图库",
        name: "Picture",
      },
    ],
  },
];
</script>
<template>
  <el-scrollbar>
    <el-menu>
      <MenuIter
        v-for="(item, i) in asideMenu"
        :key="i"
        :index="String(i)"
        :menu="item"
      ></MenuIter>
    </el-menu>
  </el-scrollbar>
</template>
<style lang="scss" scoped>
</style>