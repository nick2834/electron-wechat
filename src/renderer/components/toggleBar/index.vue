<template>
  <div class="toggle_box" :class="isShow?'active':''">123</div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isShow"]),
    ...mapGetters(["showToggleBar"])
  },
  watch: {
    showToggleBar() {}
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
  background: rgba($color: #ffffff, $alpha: 0.8);
  border-left: 1px solid #eaeaea;
  transition: all .3s;
  &.active {
    right: 0;
  }
}
</style>
