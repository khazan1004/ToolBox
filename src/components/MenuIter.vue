<script setup lang="ts">
import { h, ref, nextTick, onMounted, onUnmounted, Ref } from "vue";
import { useRouter } from "vue-router";

defineProps({
  menu: {
    type: Object,
    default: {},
  },
  index: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const toPage = (item: any) => {
  router.push({
    name: item.name,
    params: {},
  });
};
</script>
<template>
  <template v-if="menu.isHade"></template>
  <template v-else-if="menu.children">
    <el-sub-menu :index="index">
      <template #title>{{ menu.title }}</template>
      <MenuIter
        v-for="(item, i) in menu.children"
        :key="i"
        :index="index + '-' + i"
        :menu="item"
      ></MenuIter>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="index" @click="toPage(menu)">
      {{ menu.title }}
    </el-menu-item>
  </template>
</template>
<style lang="scss" scoped>
</style>