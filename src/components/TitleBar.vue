<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ipcRenderer } from "electron";

const activeIndex = ref("1");

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

onMounted(() => {
  window.addEventListener("keydown", shortcutkeyOpenDevTools);
});
onUnmounted(() => {
  window.removeEventListener("keydown", shortcutkeyOpenDevTools);
});

let shortcutkeyOpenDevTools = (e: KeyboardEvent) => {
  if (e.key === "F12") {
    openDevTools();
  }
};

const openDevTools = () => {
  ipcRenderer.send("open-dev-tools");
};
const minimize = () => {
  ipcRenderer.send("window-minimize");
};
const maximize = () => {
  ipcRenderer.send("window-maximize");
};
const close = () => {
  ipcRenderer.send("window-close");
};
</script>
<template>
  <el-header style="-webkit-app-region: drag">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      style="-webkit-app-region: no-drag"
    >
      <el-avatar> 汤 </el-avatar>
      <el-menu-item>
        <el-sub-menu>
          <template #title>帮助</template>
          <el-menu-item @click="openDevTools">开发者工具 (F12)</el-menu-item>
          <el-menu-item @click="close">退出程序</el-menu-item>
        </el-sub-menu>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>
<style scoped lang="scss">
</style>
