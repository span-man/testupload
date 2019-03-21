<template>
  <div class="secretManage dd-mask">
    <ManageHead />
    <div class="content dd-row">
      <div class="">
        <ManageLeft />
      </div>
      <div class="dd-flex1">
        <ManageRight />
      </div>
    </div>
  </div>
</template>
<script>
import ManageHead from '@/components/secretManage/ManageHead.vue'
import ManageLeft from '@/components/secretManage/ManageLeft.vue'
import ManageRight from '@/components/secretManage/ManageRight.vue'
export default {
  components: {
    ManageHead,
    ManageLeft,
    ManageRight
  }
}
</script>
<style lang="less">
</style>

