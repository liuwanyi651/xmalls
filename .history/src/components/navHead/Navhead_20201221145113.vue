<template>
  <div class="felx">
    <div class="left flex j-center ">
      <div class="round bgc-w">
        <div class="cb fw-b t-center">M</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.left{
  width: 45%;
  .round{
    width: 48px;;
    height: 48px;
    border-radius:50%;
    margin: 26px;
    .text{
      line-height: 50px;
    }
  }
}
.right{
  width: 55%;
}
</style>