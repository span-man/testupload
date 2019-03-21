<template>
  <div class="home">
    <!-- 顶部 登陆等 -->
    <nav class="head-nav dd-row dd-h-2side dd-v-center">
      <div><a href="http://derlol.top">derlol</a></div>
      <div>
        <!-- 注册 和 登录 -->
        <div class="dd-row">
          <SignIn />
        </div>
      </div>
    </nav>
    <!-- 主要的一些链接 -->
    <div class="content dd-row">
      <div class="item"
           v-for="(x,index) in all_star"
           :key="index">
        <a :href="x.url">
          {{x.name}}
        </a>
      </div>
    </div>
    <!-- 去管理的小链接 -->
    <div class="gotoManage"
         @click="goto('/secretManage')">
    </div>
  </div>
</template>
<script>
import SignIn from "../components/home/SignIn.vue"
export default {
  components: {

    SignIn
  },
  data () {
    return {
      all_star: [
        {
          url: '/allLink',
          name: 'all-link'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.head-nav {
  height: 40px;
  background: rgba(255, 255, 255, 0.8);
  padding: 0 10%;
}
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(49, 39, 39, 0.8);
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508002254441&di=9da8586471a29cf4d25e6dc97db66372&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F161101%2F1436002615-7.jpg");
  background-size: cover;
}
.content {
  margin: 100pt auto;
  width: 80vw;
  background: rgba(255, 255, 255, 0.3);
  min-height: 460pt;
  padding: 10pt;
  flex-wrap: wrap;
}
.content .item {
  margin: 10pt;
  width: 100pt;
  height: 40pt;
}
.content .item a {
  display: block;
  color: wheat;
  width: 100pt;
  height: 40pt;
  background-color: #444;
  box-shadow: 0 0 5pt blue;
  border: 1pt solid transparent;
  text-align: center;
  line-height: 40pt;
  transition: 0.1s;
}
.content .item a:hover {
  transform: translateX(10px);
}

.gotoManage {
  width: 10px;
  height: 10px;
  background: linear-gradient(#3b59df, #32c4de);
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
