<template>
<div class="foot flex">
    <div class="footbox flex">
        <div class="left" >

        </div>
        <div class="right"></div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
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
<style lang="scss">
.foot {
  width: 80%;
  height: 350px;
  border: 1px solid black;
  margin: 60px 0;
  padding: 50px 0px 20px;
  .footbox{
    flex: 1;
    height: 200px;
    border: 1px solid red; 
    .left{
        flex: 6;
        border: 1px solid gold;
    }
    .right{
        flex: 2;
        border: 1px solid rgb(53, 53, 51);
    }
  }
}
</style>
