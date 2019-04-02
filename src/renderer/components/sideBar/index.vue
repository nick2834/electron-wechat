<template>
  <div class="side_bar dragable">
    <header>
      <img :src="userAvatar" alt>
    </header>
    <main class="navbar">
      <router-link to="home" tag="a" class="icon iconfont icon-msg" exact></router-link>
      <router-link to="news" tag="a" class="icon iconfont icon-friend"></router-link>
      <router-link to="user" tag="a" class="icon iconfont icon-collection"></router-link>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import userAvatar from "@/assets/UserAvatar.jpg";
export default {
  data() {
    return {
      userAvatar: userAvatar
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/fonts/iconfont.css";
.side_bar {
  width: 70px;
  height: 100%;
  background: #2b2c2f;
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
      margin-top: 28px;
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
}
</style>
