<template>
  <div class="flex bs bor-r20 over-h mt20">
    <div class="pic brs_E" v-for="(item, index) in list" :key="index">
      <img :src="item.picUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
//活动版块
.pic {
  flex: 4;
  img {
    width: 100%;
    flex: 1;
  }
  img:hover{
    box-shadow: 3px 3px 3px 3px rgb(212, 212, 212);
  cursor: pointer;
  }
}
</style>
