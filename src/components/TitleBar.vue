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

const winFrame = {
  minimize() {
    ipcRenderer.send("window-minimize");
  },
  maximize() {
    ipcRenderer.send("window-maximize");
  },
  close() {
    ipcRenderer.send("window-close");
  },
};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <el-sub-menu>
        <template #title>帮助</template>
        <el-menu-item @click="openDevTools">开发者工具 (F12)</el-menu-item>
        <el-menu-item @click="winFrame.close">退出程序</el-menu-item>
      </el-sub-menu>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-item {
  .el-sub-menu {
    -webkit-app-region: no-drag;
  }
}
</style>