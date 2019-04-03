<template>
  <div class="toggle_box" :class="isShow?'active':''" @click.stop="hideToggleModal">
    <ul v-for="(item,index) in selectedUserList" :key="index">
      <li class="toggle_list" @click.stop="showToggleUser(item)" @mousedown="mousedown">
        <img :src="item.avatar" alt class="avatar">
        <span class="nickname">{{item.name}}</span>
      </li>
    </ul>
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
    },
    mousedown(e) {
      this.$store.commit('getMousePosition',e)
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
