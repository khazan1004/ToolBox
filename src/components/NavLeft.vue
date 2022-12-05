
<script setup lang="ts">
class MenuItem {
  title: string;
  name: string;

  constructor(title: string, name: string) {
    this.title = title;
    this.name = name;
  }
}

const asideMenu: MenuItem[] = [
  {
    title: "图库",
    name: "Picture",
  },
  {
    title: "TCP调试",
    name: "TcpDebug",
  },
  {
    title: "正则匹配",
    name: "404",
  },
  {
    title: "文本差异比对",
    name: "404",
  },
  {
    title: "进制转换",
    name: "404",
    // children: [
    //   {
    //     title: "十六进制转十进制",
    //     name: "404",
    //   },
    // ],
  },
];
</script>
<template>
  <el-scrollbar>
    <el-menu>
      <el-menu-item v-for="(item, i) in asideMenu" :key="i" :index="i">
        <router-link :to="{ name: item.name }" v-text="item.title" />
      </el-menu-item>
      <!-- <el-sub-menu v-for="(item, i) in asideMenu" :key="i">
                <template #title v-text="item.title"></template>
                <el-menu-item
                  v-for="(childrenItem, j) in item.children"
                  :key="j"
                >
                  <router-link
                    :to="{ name: childrenItem.name }"
                    v-text="childrenItem.title"
                  />
                </el-menu-item>
              </el-sub-menu> -->
    </el-menu>
  </el-scrollbar>
</template>
<style lang="scss" scoped>
</style>