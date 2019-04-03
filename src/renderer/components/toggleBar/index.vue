<template>
  <div class="toggle_box" :class="isShow?'active':''"  @click.stop>
    <ul v-for="(item,index) in selectedUserList" :key="index">
      <li class="toggle_list" @click.stop="showToggleUser(item)">
        <img :src="item.avatar" alt="" class="avatar">
        <span class="nickname">{{item.name}}</span>
      </li>
    </ul>
    <transition name="el-fade-in">
      <div class="toggle_user" v-show="showModal">
        <span v-if="isMe">{{toggleUser.name}}</span>
        <span v-else>{{toggleUser.nickname}}</span>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data(){
    return{
      showModal:false
    }
  },
  computed: {
    ...mapState(["isShow","selectId","isMe"]),
    ...mapGetters(["showToggleBar","selectedUserList","toggleUser"])
  },
  methods:{
    showToggleUser(item){
      // console.log(item)
      this.showModal = false
      this.$store.commit('showToggleUser',item)
      // this.showModal = true
      // console.log(this.toggleUser)
    }
  },
  mounted(){
    if(!this.isShow){
      this.showModal = false
    }
    // console.log(this.toggleUser)
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
  transition: all .3s;
  padding: 10px 15px;
  box-sizing: border-box;
  &.active {
    right: 0;
  }
  .toggle_user{
    position: absolute;
    width: 338px;
    height: 420px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    left: -358px;
    top: 0;
  }
  .toggle_list{
    display: flex;
    line-height: 30px;
    margin-bottom: 15px;
    position: relative;
    .avatar{
      width: 30px;
      height: 30px;
      border-radius: 2px;
    }
    .nickname{
      flex: 1;
      margin-left: 15px;
    }
  }
}
</style>
