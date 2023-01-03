
<script setup lang="ts">
import { h, ref, nextTick, onMounted, onUnmounted, Ref } from "vue";
import { useRouter } from "vue-router";
import DeepRouter from "./DeepRouter.vue";

const asideMenu: any[] = [
  {
    title: "Socket调试",
    name: "TcpDebug",
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
    name: "404",
    isHade: true,
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
for (let index = 0; index < 20; index++) {
  asideMenu.push({
    title: "菜单" + index,
    name: "404",
  });
}
</script>
<template>
  <el-scrollbar>
    <el-menu>
      <DeepRouter
        v-for="(item, i) in asideMenu"
        :key="i"
        :index="String(i)"
        :menu="item"
      ></DeepRouter>
    </el-menu>
  </el-scrollbar>
</template>
<style lang="scss" scoped>
</style>