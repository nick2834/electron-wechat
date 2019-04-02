<template>
  <el-container class="main_content">
    <div class="chat_left dragable">
        <search></search>
        <chat-list></chat-list>
    </div>
    <div class="chat_right">
        <message-box/>
        <chat-input/>
        <toggle-bar/>
    </div>
  </el-container>
</template>
<script>
import search from '@/components/search'
import chatList from '@/components/chatlist'
import messageBox from '@/components/message'
import chatInput from '@/components/chatInput'
import toggleBar from '@/components/toggleBar'
import { mapGetters, mapState } from "vuex";
export default {
    components:{
        search,
        chatList,
        messageBox,
        chatInput,
        toggleBar
    },
    computed:{
      ...mapState(['isShow'])
    }
};
</script>
<style lang="scss" scoped>

</style>
