<script setup lang="ts">
import { h, ref, nextTick, onMounted, onUnmounted, Ref } from "vue";
import { Socket } from "net";
import { ElScrollbar, ElMessage } from "element-plus";
import { tr } from "element-plus/es/locale";
import internal from "stream";

enum MsgType {
  INPUT,
  OUTPUT,
}
class HistoryItem {
  index: number;
  time: Date;
  message: string;
  type: MsgType;

  constructor(time: Date, message: string, type: MsgType) {
    this.index = historyCount++;
    this.time = time;
    this.message = message;
    this.type = type;
  }
}
// 通信历史
const history: Ref<HistoryItem[]> = ref([]);
// 通信历史 - 保留的最大行数
const historyLimit: number = 500;
// 通讯历史总数
let historyCount: number = 1;

// 滚动条
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
// 要发送的内容
const content = ref("");
// 连接状态
const isConnection = ref(false);
// Socket Host
const host = ref("127.0.0.1");
// Socket Port
const port = ref(30001);

let client: Socket;

const addHistory = (historyItem: HistoryItem) => {
  let historyArray = history.value;
  if (historyArray.length >= historyLimit) {
    console.log("删除历史");
    historyArray.splice(0, historyArray.length - historyLimit + 1);
  }
  historyArray.push(historyItem);

  nextTick(() => {
    scrollbarRef.value!.setScrollTop(100000);
  });
};

/**
 * 打开连接
 */
const openConnect = () => {
  console.log("连接Socket", host.value, port.value);
  client = new Socket();
  client.connect(port.value, host.value, () => {
    isConnection.value = true;
    ElMessage({
      type: "success",
      message: h("p", null, [
        h("i", { style: "color: teal" }, host.value),
        h("i", null, ":"),
        h("i", { style: "color: teal" }, port.value),
        h("span", null, "连接成功"),
      ]),
    });
  });
  client.on("error", (e) => {
    console.log(e.message);
    ElMessage({
      type: "error",
      message: "ERROR: " + e.message,
    });
  });
  client.on("data", (data) => {
    let now = new Date();
    let message = data.toString("utf8");
    console.log("接收到消息", message);

    let historyItem = new HistoryItem(now, message, MsgType.INPUT);
    addHistory(historyItem);
  });
};

/**
 * 发送消息
 */
const sendMessage = () => {
  if (client != null) {
    let now = new Date();
    let message = content.value;
    console.log("发送消息", message);
    client.write(message + "\n");

    let historyItem = new HistoryItem(now, message, MsgType.OUTPUT);
    addHistory(historyItem);
  }
};

/**
 * 关闭连接
 */
const closeConnect = () => {
  if (client != null) {
    client.destroy();
    isConnection.value = false;
  }
};

onUnmounted(() => {
  closeConnect();
});
</script>
<template>
  <el-container>
    <el-main>
      <el-scrollbar ref="scrollbarRef">
        <table id="history-table">
          <tr v-for="(item, index) in history" :key="index">
            <td v-text="item.index"></td>
            <td v-text="item.type == MsgType.OUTPUT ? '发送: ' : '接收: '"></td>
            <td v-text="item.message"></td>
          </tr>
        </table>
      </el-scrollbar>
    </el-main>
    <el-footer>
      <el-row :gutter="20">
        <el-col :sm="8" :md="8" :lg="8" :xl="8">
          <el-input v-model="host" />
        </el-col>
        <el-col :sm="8" :md="8" :lg="8" :xl="8">
          <el-input-number
            v-model="port"
            :min="0"
            :max="65535"
            :step="1"
            :controls="false"
          />
        </el-col>
        <el-col :sm="3" :md="3" :lg="3" :xl="3">
          <el-button
            type="primary"
            size="default"
            @click="openConnect"
            v-if="!isConnection"
          >
            连接
          </el-button>
          <el-button
            type="warning"
            size="default"
            @click="closeConnect"
            v-if="isConnection"
          >
            断开
          </el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="21" :md="22" :lg="23" :xl="23">
          <el-input
            type="textarea"
            :rows="3"
            v-model="content"
            placeholder="请输入要发送的指令"
            :show-word-limit="false"
            :autosize="{ minRows: 3, maxRows: 3 }"
          />
        </el-col>
        <el-col :sm="3" :md="2" :lg="1" :xl="1">
          <!-- <el-row>
            <el-checkbox label="HEX" :checked="isHex" />
          </el-row> -->
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
.el-container {
  --tcp-footer-height: 90px;

  height: 100%;
  .el-main {
    height: calc(100% - var(--tcp-footer-height));
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.8);

    #history-table {
      tr:nth-child(even) {
        background: rgba(0,0,0,0.7);
      }
      td {
        text-align: left;
        vertical-align: top;

        word-break: break-all;
        white-space: break-spaces;

        &:nth-child(1) {
          width: 2em;
        }
        &:nth-child(2) {
          width: 3em;
        }
      }
    }
  }
  .el-footer {
    height: var(--tcp-footer-height);
  }
}
</style>