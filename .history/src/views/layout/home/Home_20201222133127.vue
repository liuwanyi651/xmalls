<template>
  <div class="conbox">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item, index) in banner" :key="index">
        <div class="banbox">
          <img :src="item.picUrl" alt="" />
          <div class="imgb"><img :src="item.picUrl3" alt="" /></div>
          <div class="imgb"><img :src="item.picUrl2" alt="" /></div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
// import banner from "../../../components/home/banner/Banner"
export default {
  name: "",
  props: {},
  data() {
    return {
      banner: [],
      value2: 0,
    };
  },
  components: {
    //注册组件
    // banner
  },
  methods: {
    getGoodsHome() {
      //获取首页商品推荐
      this.$api
        .getGoodsHome()
        .then((res) => {
          // console.log(res);
          this.banner = res.data[0].panelContents; //拿到轮播图的数据
          console.log(this.banner);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getGoodsHome();
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.conbox {
  margin-top:12px;
  width: 1280px;
  height: 480px;
}
.banbox {
  position: relative;
  overflow: hidden;
   cursor: pointer;
  img {
    width: 100%;
    border-radius: 20px;
  }
  .imgb {
    position: absolute;
    top: 0;
    left: 120px;
  }
}
</style>
