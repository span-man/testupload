<template>
  <div class="register-and-signIn">
    <!-- 登陆 注册 -->
    <div class="sign-in">
      <span class="dd-hover-hand"
            @click="signIn">登陆</span> | <span class="dd-hover-hand"
            @click="register">注册</span>
    </div>
    <!-- 弹出登陆框 -->
    <div v-show="isNotShowMask"
         class="dd-mask dd-row dd-h-center">
      <div class="out-box">
        <!-- top -->
        <div class="top dd-row dd-h-2side">
          <div class="dd-row">
            <div class="nav-bar dd-hover-hand"
                 @click="navBarGoto(0)">登陆</div>
            <div class="nav-bar dd-hover-hand"
                 @click="navBarGoto(1)">注册</div>
          </div>
          <div class="close dd-hover-hand"
               @click="close">
            <img src="@/assets/imgs/wrong.png"
                 width="18"
                 height="18"
                 alt="close">
          </div>
        </div>
        <!-- 线 -->
        <div class="move-line dd-pr">
          <!-- 选中之后的 橙色的线 -->
          <div ref="activeLine"
               class="dd-pa active"></div>
        </div>
        <!-- 账号登陆 -->
        <div class="view0"
             v-show="navBarIndex === 0">
          <p class="tit">账号登陆</p>
          <div>
            <input type="text"
                   placeholder="账号"
                   name=""
                   id="">
          </div>
          <div>
            <input type="password"
                   placeholder="密码"
                   name=""
                   id="">
          </div>
          <div>
            <input class="signInBtn dd-hover-hand"
                   type="button"
                   value="登 陆">
          </div>
        </div>
        <!-- 注册 -->
        <div class="view1"
             v-show="navBarIndex === 1">
          <p class="tit">账号注册</p>
          <div>
            <input type="text"
                   placeholder="账号"
                   name=""
                   id="">
          </div>
          <div>
            <input type="password"
                   placeholder="密码"
                   name=""
                   id="">
          </div>
          <div>
            <input type="password"
                   placeholder="再次输入密码"
                   name=""
                   id="">
          </div>
          <div>
            <input class="signInBtn dd-hover-hand"
                   type="button"
                   value="注 册">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isNotShowMask: false, // 是否显示弹出框
      navBarIndex: 0, // 显示 登陆还是注册 默认是 0 = 登陆
    }
  },
  methods: {
    // 登陆
    signIn () {
      this.isNotShowMask = true
      this.navBarGoto(0)
    },
    // 注册
    register () {
      this.isNotShowMask = true
      this.navBarGoto(1)
    },
    // 点击登陆 或者 注册
    navBarGoto (num) {
      this.navBarIndex = num
      this.$refs.activeLine.style.left = Number(num) * 80 + 'px'
    },
    close () {
      this.isNotShowMask = false
    }
  }
}
</script>
<style lang="less">
.register-and-signIn {
  .out-box {
    margin-top: 25vh;
    height: 280px;
    width: 520px;
    border-radius: 5px;
    background: #ffffff;
    padding: 10px;
    padding-bottom: 60px;
    .top {
      height: 30px;
      .nav-bar {
        width: 80px;
        font-size: 14px;
      }
    }
    .move-line {
      height: 2px;
      width: 100%;
      background: #d8d8d8;
      .active {
        height: 2px;
        background: rgb(255, 85, 0);
        width: 80px;
      }
    }
    .tit {
      color: #666;
      font-size: 13px;
      height: 40px;
      line-height: 40px;
    }
    input {
      width: 200px;
      height: 30px;
      border: 1px solid #999;
      margin-bottom: 10px;
      padding: 0 5px;
      line-height: 30px;
    }
    .signInBtn {
      background: #ff7420;
      border: 0;
      color: #fff;
      font-weight: 400;
    }
  }
}
</style>
