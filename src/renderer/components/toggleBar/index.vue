<template>
  <div class="toggle_box" :class="isShow?'active':''" @click.stop="hideToggleModal">
    <ul v-for="(item,index) in selectedUserList" :key="index">
      <li class="toggle_list" @click.stop="showToggleUser(item)">
        <img :src="item.avatar" alt class="avatar">
        <span class="nickname">{{item.name}}</span>
      </li>
    </ul>
    <transition name="el-fade-in">
      <div class="toggle_user" v-show="toggleShow" @click.stop>
        <div class="toggle_top">
          <div class="name">
            <div class="people">
              <div class="nickname">{{toggleUser.name}}</div>
              <i class="iconfont" :class="toggleUser.sex===1?'icon-male':'icon-female'"></i>
            </div>
            <p class="wxid">微信号:{{toggleUser.wxid}}</p>
          </div>
          <img :src="toggleUser.avatar" alt>
        </div>
        <div class="toggle_bottom">
          <div class="remark">
            <span>备&nbsp&nbsp&nbsp注</span>
            {{toggleUser.remark}}
          </div>
          <div class="area">
            <span>地&nbsp&nbsp&nbsp区</span>
            {{toggleUser.area}}
          </div>
          <div class="wxid">
            <span>微信号</span>
            {{toggleUser.wxid}}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isShow", "toggleShow", "toggleUser"]),
    ...mapGetters(["showToggleBar", "selectedUserList"])
  },
  methods: {
    showToggleUser(item) {
      this.$store.commit("showToggleUser", item);
    },
    hideToggleModal() {
      this.$store.commit("hideToggleModal", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.toggle_box {
  position: fixed;
  top: 60px;
  width: 235px;
  right: -235px;
  bottom: 0;
  background: rgba($color: #ffffff, $alpha: 0.95);
  border-left: 1px solid #eaeaea;
  transition: all 0.3s;
  padding: 10px 15px;
  &.active {
    right: 0;
  }
  .toggle_user {
    position: absolute;
    width: 338px;
    height: auto;
    background: #ffffff;
    border: 1px solid #eaeaea;
    left: -358px;
    top: 0;
    box-shadow: 0 1px 10px 1px #d1d1d1;
    border-radius: 10px;
    padding: 40px;
    .toggle_top {
      border-bottom: 1px solid #e7e7e7;
      display: flex;
      padding-bottom: 20px;
      .name {
        flex: 1;
        .people {
          display: flex;
          align-items: center;
          height: 45px;
          line-height: 45px;
        }
        .nickname {
          font-size: 20px;
          margin-right: 5px;
        }
        .wxid {
          font-size: 14px;
          color: #888888;
        }
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
    .toggle_bottom {
      padding: 40px 0;
      .remark,
      .area,
      .wxid {
        font-size: 14px;
        margin-top: 20px;
        span {
          font-size: 14px;
          color: rgba(153, 153, 153, 0.8);
          margin-right: 40px;
        }
      }
      .remark {
        margin-top: 0;
      }
    }
  }
  .toggle_list {
    display: flex;
    line-height: 30px;
    margin-bottom: 15px;
    position: relative;
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 2px;
    }
    .nickname {
      flex: 1;
      margin-left: 15px;
    }
  }
}
</style>
