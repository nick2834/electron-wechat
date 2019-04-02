<template>
  <el-container class="main_content">
    <div class="chat_left dragable">
      <search></search>
      <friend-list />
    </div>
    <div class="chat_right">
      <friend-info></friend-info>
    </div>
  </el-container>
</template>
<script>
import search from '@/components/search'
import friendList from '@/components/friendList'
import friendInfo from '@/components/friendInfo'
export default {
  components:{
    search,
    friendList,
    friendInfo
  }
};
</script>
<style lang="scss" scoped>

</style>
