<template>
  <div>
    <!-- 公共样式 头部-->
    <div class="header">哈哈哈
      <navTop></navTop>
    </div>
    <!-- 内容部分 -->
    <div class="main">
        <router-view></router-view>
    </div>
    <!-- 公共样式 尾部-->
    <div class="footer">
        <navFoot></navFoot> 
    </div>
  </div>
</template>
<script>
import navTop from "../../components/navTop/Navtop";
import navFoot from "../../components/navFoot/Navfoot";
export default {
  name: "",
  props: {},
  components: {
    // 注册组件
    navTop,
    navFoot,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="scss">
.header {
  width: 1600px;
  height: 800px;
  background: rgb(40, 91, 134);
}
</style>
