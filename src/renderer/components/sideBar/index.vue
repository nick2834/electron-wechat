<template>
  <div class="side_bar dragable" @click.stop="hideToggleBar">
    <header>
      <img :src="userAvatar" alt>
    </header>
    <main class="navbar">
      <router-link to="home" tag="a" class="icon iconfont icon-msg" exact></router-link>
      <router-link to="news" tag="a" class="icon iconfont icon-friend"></router-link>
      <router-link to="user" tag="a" class="icon iconfont icon-collection"></router-link>
    </main>
    <footer>
      <i class="icon iconfont icon-more"></i>
    </footer>
  </div>
</template>
<script>
import userAvatar from "@/assets/UserAvatar.jpg";
export default {
  data() {
    return {
      userAvatar: userAvatar
    };
  },
  methods:{
    hideToggleBar(){
      this.$store.commit('hideToggleBar',false)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/fonts/iconfont.css";
.side_bar {
  width: 70px;
  height: 100%;
  background: #2b2c2f;
  position: relative;
  header {
    img {
      width: 48px;
      height: 48px;
      margin: 70px 12px 0;
      border-radius: 2px;
    }
  }
  main {
    width: 100%;
    text-align: center;
    .icon {
      display: inline-block;
      font-size: 28px;
      margin-top: 33px;
      padding: 0 16px;
      box-sizing: border-box;
      color: rgb(173, 174, 175);
      opacity: 0.8;
      cursor: pointer;
      .active {
        color: rgb(0, 220, 65);
      }
      &:hover {
        opacity: 1;
      }
    }
    .router-link-active{
        color: rgb(0, 220, 65);
    }
  }
  footer{
    position: absolute;
    width: 100%;
    bottom: 25px;
    text-align: center;
    .icon{
      font-size: 28px;
      color: #adaeaf;
      cursor: pointer;
    }
  }
}
</style>
