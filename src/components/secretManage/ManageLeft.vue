<template>
  <div class="secretManageLeft">
    <ul class="ul">
      <li v-for="(item,index) in allManage"
          :key="index"
          class="dd-row dd-center dd-hover-hand"
          @click="goto(item.id)">{{ item.value }}</li>
    </ul>
  </div>
</template>
<script>

export default {
  data () {
    return {
      allManage: [
        {
          id: 1,
          value: '管理所有链接'
        },
        {
          id: 2,
          value: '管理所有链接'
        }
      ]
    }
  },
  methods: {
    goto (_id) {
      console.info(_id)
      this.$store.commit('changeManageID', _id)
    }
  }
}
</script>
<style lang="less">
.secretManageLeft {
  width: 200px;
  height: calc(~"100vh - 40px");
  overflow-y: hidden;
  background: #f1f1f1;
  .ul {
    width: 100%;
    height: 100%;
    li {
      height: 40px;
      border-bottom: 1px solid #e2e2e2;
      background: #007acc;
      border-radius: 0 50px 10px 50px;
      color: #e2e2e2;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>

