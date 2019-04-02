<!-- 文本输入框 -->
<template>
  <div class="text">
    <div class="emoji">
      <i class="icon iconfont icon-look" @click="showEmoji=!showEmoji"></i>
      <transition name="showbox">
        <div class="emojiBox" v-show="showEmoji">
          <li v-for="(item, index) in emojis" :key="index">
            <img :src="'static/emoji/'+item.file" :data="item.code" @click="content +=item.code">
          </li>
        </div>
      </transition>
    </div>
    <textarea ref="text" v-model="content" @keyup="onKeyup" @click="showEmoji=false"></textarea>
    <transition name="appear">
      <div class="warn" v-show="warn">
        <div class="description">不能发送空白信息</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { getRobot } from "@/service";
export default {
  data() {
    return {
      content: "",
      reply: "未找到",
      frequency: 0,
      warn: false,
      showEmoji: false
    };
  },
  computed: {
    ...mapState(["selectId", "emojis", "robotKey"]),
    ...mapGetters(["selectedChat"])
  },
  methods: {
    // 按回车发送信息
    onKeyup(e) {
      if (e.keyCode === 13) {
        this.sendMessage();
      }
    },
    // 点击发送按钮发送信息
    sendMessage() {
      if (this.content.length <= 1) {
        this.warn = true;
        this.content = "";
        setTimeout(() => {
          this.warn = false;
        }, 1000);
      } else {
        getRobot({
          key: this.robotKey,
          info: this.content
        }).then(({ data }) => {
          if (data.code == 302000) {
            let msg = {
              content: this.content,
              reply: data.list.filter((item, index) => index <= 2),
              messageType: 302000
            };
            this.$store.dispatch("sendMessage", msg);
          } else {
            this.reply = data.url ? data.url : data.text;
            let msg = {
              content: this.content,
              reply: this.reply
            };
            this.$store.dispatch("sendMessage", msg);
          }
          this.content = "";
        });
      }
    }
  },
  // 在进入的时候 聚焦输入框
  mounted() {
    this.$refs.text.focus();
  },
  watch: {
    // 在选择其它对话的时候 聚焦输入框
    selectId() {
      setTimeout(() => {
        this.$refs.text.focus();
      }, 0);
    },
    // 当输入框中的值为空时 弹出提示  并在一秒后消失
    content() {
      if (this.content === "") {
        if (this.frequency === 0) {
          this.warn = true;
          this.frequency++;
          setTimeout(() => {
            this.warn = false;
          }, 1000);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  position: relative;
  height: 160px;
  background: #fff;
  .emoji {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding: 0 30px;
    box-sizing: border-box;
    color: #7c7c7c;
    .icon-look {
      cursor: pointer;
      font-size: 20px;
      &:hover {
        color: #1aad19;
      }
    }
    .emojiBox {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      top: -210px;
      left: -100px;
      width: 300px;
      height: 200px;
      padding: 5px;
      background-color: #fff;
      border: 1px solid #d1d1d1;
      border-radius: 2px;
      box-shadow: 0 1px 2px 1px #d1d1d1;
      &.showbox-enter-active,
      &.showbox-leave-active {
        transition: all 0.5s;
      }
      &.showbox-enter,
      &.showbox-leave-active {
        opacity: 0;
      }
    }
  }
  textarea {
    box-sizing: border-box;
    padding: 0 30px;
    height: 110px;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
    font-size: 14px;
  }
  .warn {
    position: absolute;
    bottom: 50px;
    right: 10px;
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    box-shadow: 0 1px 5px 1px #bdbdbd;
    &.appear-enter-active,
    &.appear-leave-active {
      transition: all 1s;
    }
    &.appear-enter,
    &.appear-leave-active {
      opacity: 0;
    }
    &:before {
      content: " ";
      position: absolute;
      top: 100%;
      right: 20px;
      border: 7px solid transparent;
      border-top-color: #fff;
      filter: drop-shadow(1px 3px 2px #bdbdbd);
    }
  }
}
</style>
