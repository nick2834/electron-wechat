<template>
  <section class="dragable" style="background:white">
    <header>
      <div class="title_bar">
        <div class="btn_bar" @click="close">
          <el-icon class="el-icon el-icon-circle-close-outline" @click="close()"></el-icon>
          <el-icon class="el-icon el-icon-remove-outline" @click="mini()"></el-icon>
        </div>
        <div class="title">{{title}}</div>
      </div>
      <div class="tool_bar"></div>
    </header>
    <webview id="foo" :src="webviewUrl"></webview>
  </section>
</template>
<script>
export default {
  data() {
    return {
      webviewUrl: "",
      title: ""
    };
  },
  methods: {
    close() {
      this.$electron.ipcRenderer.send("webClose");
    },
    mini() {}
  },
  mounted() {
    this.$electron.ipcRenderer.on("WebViewData", (event,data) => {
        console.error(data);
        this.webviewUrl = data.detailurl;
        this.title = data.article;
      });
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  box-shadow: 0 1px 2px 1px #d1d1d1;
  line-height: 30px;
  font-size: 14px;
  padding: 0 10px;
  border-bottom: 1px solid #d1d1d1;
  .title_bar {
    height: 30px;
    cursor: pointer;
    display: flex;
    .btn_bar {
      color: #999999;
      width: 40px;
    }
    .title {
      flex: 1;
      text-align: center;
      padding-right: 40px;
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .tool_bar {
    height: 40px;
  }
}
webview {
  width: 380px;
  height: 785px;
}
</style>
