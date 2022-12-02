<script setup lang="ts">
import { h, ref } from "vue";
import { Socket } from "net";
import { ElMessage } from "element-plus";

class HistoryItem {
  sendTime: Date;
  receiveTime: Date;
  sendMessage: string;
  receiveMessage: string;

  constructor(
    sendTime: Date,
    receiveTime: Date,
    sendMessage: string,
    receiveMessage: string
  ) {
    this.sendTime = sendTime;
    this.receiveTime = receiveTime;
    this.sendMessage = sendMessage;
    this.receiveMessage = receiveMessage;
  }
}
// 通信历史
const history: HistoryItem[] = [];
// 通信历史 - 保留的最大条数
const historyLimit: number = 500;
// 要发送的内容
const content: string = "";
// 连接状态
const isConnection: boolean = false;
const host: string = "127.0.0.1";
const port: number = 8001;

let client: Socket;

const openConnect = () => {
  client = new Socket();
  client.connect(port, host, function () {
    ElMessage({
      type: "success",
      message: h("p", null, [
        h("span", null, "服务器 "),
        h("i", { style: "color: teal" }, host),
        h("i", null, ":"),
        h("i", { style: "color: teal" }, port),
        h("span", null, " 连接成功"),
      ]),
    });
  });
  client.addListener("data", (data) => {
    let dataLength: number = data.byteLength;
    ElMessage({
      type: "warning",
      message: h("p", null, [
        h("span", null, "服务器 "),
        h("i", { style: "color: teal" }, host),
        h("i", null, ":"),
        h("i", { style: "color: teal" }, port),
        h("span", null, " 连接关闭"),
      ]),
    });
  });
};
const sendMessage = () => {
  if (client != null) {
  }
};
const closeConnect = () => {
  if (client != null) {
  }
};
</script>
<template>
  <el-container>
    <el-main id="history-main" ref="1">
      <div v-for="(item, index) in history" :key="index">
        <p>
          <span v-text="item.receiveTime"></span>
          <span v-text="item.sendMessage"></span>
        </p>
        <p>
          <span v-text="item.receiveTime"></span>
          <span v-text="item.receiveMessage"></span>
        </p>
      </div>
    </el-main>
    <el-footer>
      <el-input
        type="textarea"
        :rows="2"
        v-model="content"
        placeholder="请输入要发送的指令"
        :maxlength="-1"
        :show-word-limit="false"
        :autosize="{ minRows: 2, maxRows: 4 }"
      />
      <el-tooltip
        :disabled="isConnection"
        effect="dark"
        content="请先连接服务器"
        placement="top"
      >
        <el-button type="primary" size="default" @click="sendMessage">
          发送
        </el-button>
      </el-tooltip>
    </el-footer>
  </el-container>
</template>
 <style lang="scss" scoped>
#history-main {
}
</style>