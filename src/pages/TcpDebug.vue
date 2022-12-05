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
const history: HistoryItem[] = [
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
  {
    sendTime: new Date(),
    receiveTime: new Date(),
    sendMessage: "123",
    receiveMessage: "1321",
  },
];
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
  <el-container style="height: 100%">
    <el-main style="height: 100%">
      <el-scrollbar>
        <div v-for="(item, index) in history" :key="index">
          <p>
            <!-- <span v-text="item.sendTime"></span> -->
            <span v-text="'>>: ' + item.sendMessage"></span>
          </p>
          <p>
            <!-- <span v-text="item.receiveTime"></span> -->
            <span v-text="'<<: ' + item.receiveMessage"></span>
          </p>
        </div>
      </el-scrollbar>
    </el-main>
    <el-footer style="height: auto">
      <el-row :gutter="20">
        <el-col :sm="4" :md="10" :lg="10" :xl="1">
          <el-input v-model="host" label="Host" />
        </el-col>
        <el-col :sm="8" :md="10" :lg="10" :xl="1">
          <el-input-number
            v-model="port"
            label="Port"
            :min="0"
            :max="65535"
            :step="1"
            :controls="false"
          />
        </el-col>
        <el-col :sm="3" :md="13" :lg="3" :xl="1">
          <el-button
            type="primary"
            size="default"
            @click="sendMessage"
            v-text="isConnection ? '断开' : '连接'"
          />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="20" :md="10" :lg="10" :xl="1">
          <el-input
            type="textarea"
            :rows="2"
            v-model="content"
            placeholder="请输入要发送的指令"
            :show-word-limit="false"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
        </el-col>
        <el-col :sm="4" :md="10" :lg="10" :xl="1">
          <el-row>
            <el-checkbox label="HEX" name="isHex" />
          </el-row>
          <el-row>
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
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
 <style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>