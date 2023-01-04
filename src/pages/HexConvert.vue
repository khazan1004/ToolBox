<script setup lang="ts">
import { h, ref, nextTick, onMounted, onUnmounted, Ref } from "vue";

const value = ref("");
const showValues: Ref<Array<String>> = ref([]);

const types = [
  {
    key: 2,
    name: "二进制",
  },
  {
    key: 4,
    name: "四进制",
  },
  {
    key: 8,
    name: "八进制",
  },
  {
    key: 10,
    name: "十进制",
  },
  {
    key: 16,
    name: "十六进制",
  },
  {
    key: 32,
    name: "三十二进制",
  },
];
const type = ref(16);

const refreshValue = () => {
  let numberValue = parseInt(value.value, type.value);
  if (numberValue || numberValue == 0) {
    showValues.value[0] = numberValue.toString(2);
    showValues.value[1] = numberValue.toString(4);
    showValues.value[2] = numberValue.toString(8);
    showValues.value[3] = numberValue.toString(10);
    showValues.value[4] = numberValue.toString(16);
    showValues.value[5] = numberValue.toString(32);
  }
};
</script>
<template>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3">
      <el-select
        v-model="type"
        value-key=""
        placeholder=""
        clearable
        filterable
        @change="refreshValue"
      >
        <el-option
          v-for="item in types"
          :key="item.key"
          :label="item.name"
          :value="item.key"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input
        v-model="value"
        placeholder=""
        size="normal"
        clearable
        @change="refreshValue"
        @keyup="refreshValue"
      />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 二进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[0]" size="normal" />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 四进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[1]" size="normal" />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 八进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[2]" size="normal" />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 十进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[3]" size="normal" />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 十六进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[4]" size="normal" />
    </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :sm="6" :md="5" :lg="4" :xl="3"> 三十二进制 </el-col>
    <el-col :sm="18" :md="17" :lg="16" :xl="15">
      <el-input v-model="showValues[5]" size="normal" />
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
</style>