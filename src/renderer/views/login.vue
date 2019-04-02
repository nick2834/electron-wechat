<template>
  <section style="-webkit-app-region: drag;user-select:none;" class="login">
    <div class="code_container">
      <div class="qrcode_img">
        <img :src="qrcode" alt class="">
      </div>
      <h1>扫码登录微信</h1>
      <p>Mac微信需要配合你的手机登录使用</p>
    </div>
  </section>
</template>

<script>
import qrcode from "@/assets/qrcode.jpg";

export default {
  data() {
    return {
      qrcode: qrcode
    };
  },
  mounted() {
    // this.qrcode = qrcode;
  },
  methods: {
    
  },
  created() {
  }
};
</script>

<style scoped lang="scss">
.login {
  overflow: hidden;
  height: 400px;
  background: #ffffff;
  .code_container {
    text-align: center;
    .qrcode_img {
      margin: 75px auto 30px;
      display: block;
      width: 160px;
      height: 160px;
    }
    h1{
      font-size: 20px;
      font-weight: 500;
      line-height: 2
    }
    p{
      color: #666;
    }
  }
}
</style>