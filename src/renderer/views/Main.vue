<template>
  <div id="Main">
    <side-bar></side-bar>
    <section class="container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import sideBar from '@/components/sideBar';
export default {
  components:{
    sideBar
  }
}
</script>

<style lang="scss" scoped>
#Main{
  display: flex;
  width: 100%;
  height: 710px;
  background: #ffffff;
}
.el-select {
  display: block;
}
section {
  height: 100%;
  flex: 1;
  background: #f2f2f2;
}
</style>
