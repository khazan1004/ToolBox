<script setup lang="ts">
import { ref, onMounted } from "vue";

const date = ref("");
const time = ref("");

onMounted(() => {
  setInterval(() => {
    let now = new Date();
    let year = String(now.getFullYear());
    let month = String(now.getMonth() + 1);
    let day = String(now.getDay() + 1);
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let hours = String(now.getHours());
    let minutes = String(now.getMinutes());
    let seconds = String(now.getSeconds());
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;

    date.value = year + "-" + month + "-" + day;
    time.value = hours + ":" + minutes + ":" + seconds;
  }, 500);
});
</script>
<template>
  <el-main>
    <el-row :gutter="5">
      <el-col class="block-date" :sm="12" :md="8" :lg="6" :xl="6">
        <p v-text="date"></p>
        <p v-text="time"></p>
      </el-col>
    </el-row>
  </el-main>
</template>
<style lang="scss" scoped>
.el-main {
  .el-col {
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

    transition: all 100ms;
    &:hover {
      box-shadow: 7px 0px 7px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .block-date {
    p {
      &:first-child {
        text-align: left;
        text-indent: 15px;
        font-size: 16px;

        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      &:last-child {
        text-align: center;
        font-weight: 500;
        font-size: 32px;

        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    }
  }
}
</style>