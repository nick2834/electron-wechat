<template>
  <el-container class="main_content">
    <div class="chat_left dragable" @click.stop="hideToggleBar">
      <search></search>
      <chat-list></chat-list>
    </div>
    <div class="chat_right" @click.stop="hideToggleBar">
      <message-box/>
      <chat-input/>
      <toggle-bar/>
    </div>
    <toggle-user-modal />
  </el-container>
</template>
<script>
import search from "@/components/search";
import chatList from "@/components/chatlist";
import messageBox from "@/components/message";
import chatInput from "@/components/chatInput";
import toggleBar from "@/components/toggleBar";
import toggleUserModal from "@/components/toggleUserModal";
export default {
  components: {
    search,
    chatList,
    messageBox,
    chatInput,
    toggleBar,
    toggleUserModal
  },
  methods:{
    hideToggleBar(){
      this.$store.commit('hideToggleBar',false)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
