<template>
  <div class="dd-row dd-h-center">
    <div class="all-link dd-row dd-warp">
      <div v-for="(item,index) in allLink"
           class="item"
           :key="index">
        <img src="@/assets/imgs/nopic.gif"
             alt="">
        <p class="dd-row dd-h-center dd-v-center">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      allLink: []
    }
  },
  mounted () {
    this.initPageStatus()
  },
  methods: {
    async initPageStatus () {
      this.allLink = []
      let res = await this.$store.dispatch('getAllLink')
      console.log(res)
      if (!res.data.success) {
        console.log('返回值错误')
        return
      }
      this.allLink = res.data.dataList.slice(0)
    }
  }
}
</script>
<style lang="less">
html {
  background: linear-gradient(#422818);
}
.all-link {
  // margin: 0 auto;
  width: 750px;
  margin: 0px;
  background: rgba(0, 0, 0, 0.2);
  justify-content: start;

  .item {
    // width: 140px;
    width: calc(~"20% - 10px"); // 注意这里的写法 ~ 和 减号左右需要有空格
    // width: 20%;
    margin: 5px;
    background: #f1f1f1;
    img {
      width: 100%;
      max-height: 140px;
      // background: #f1f1f1;
      background: linear-gradient(#ccc, #f1f1f1);
    }
    p {
      height: 26px;
      width: 100%;
      // background: rgba(0, 0, 0, 0.9);
      background: linear-gradient(rgb(76, 85, 100), rgb(38, 38, 49));
      font-size: 14px;
      color: #f1c40f;
      // border-bottom: 4px solid #f1c40f;
    }
  }
}
</style>
