<template>
  <el-container class="main_content">
    <div class="chat_left dragable">
        <search></search>
        <chat-list></chat-list>
    </div>
    <div class="chat_right">
        <message-box/>
        <chat-input/>
    </div>
  </el-container>
</template>
<script>
import search from '@/components/search'
import chatList from '@/components/chatlist'
import messageBox from '@/components/message'
import chatInput from '@/components/chatInput'
export default {
    components:{
        search,
        chatList,
        messageBox,
        chatInput
    }
};
</script>
<style lang="scss" scoped>

</style>
