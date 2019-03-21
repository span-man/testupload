<template>
  <div class="secretManageRight">
    <!-- secretManageRight
    {{ manageID }} -->
    <div v-if="manageID===1">
      <AllLinkManage />
    </div>
    <div v-if="manageID===2">
      <AllLinkManage2 />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AllLinkManage from './AllLinkManage.vue'
import AllLinkManage2 from './AllLinkManage2.vue'
export default {
  components: {
    AllLinkManage,
    AllLinkManage2
  },
  computed: {
    ...mapState({
      manageID: state => state.manageID
    })
  },
  watch: {
    manageID (newV) {
      console.log(newV)
    }
  }
}
</script>
<style lang="less">
.secretManageRight {
  background: #f1f1f1;
  height: calc(~"100vh - 40px");
  padding: 0 10px;
}
</style>

