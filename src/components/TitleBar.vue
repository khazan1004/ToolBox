<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ipcRenderer } from "electron";
import DeepRouter from "./DeepRouter.vue";

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

const titleBarMenu: any[] = [
  {
    title: "设置",
    children: [
      {
        title: "快捷键",
      },
    ],
  },
  {
    title: "帮助",
    children: [
      {
        title: "开发者工具 (F12)",
        // click: openDevTools,
      },
      {
        title: "退出程序",
        // click: winFrame.close,
      },
    ],
  },
];
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="logo">LOGO</el-menu-item>
    <div class="flex-grow"></div>
    <DeepRouter
      v-for="(item, i) in titleBarMenu"
      :key="i"
      :index="'t' + String(i)"
      :menu="item"
    ></DeepRouter>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu-item {
  .el-sub-menu {
    -webkit-app-region: no-drag;
  }
}
.flex-grow {
  flex-grow: 1;
}
</style>