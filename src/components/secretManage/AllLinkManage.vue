<template>
  <div class="AllLinkManage">
    <el-form :model="lk"
             ref="lk"
             label-width="80px">
      <el-form-item label="path"
                    :rules="[
                    { required: true, message: '请输入网址', trigger: 'blur' },
                    ]">
        <!-- { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' } -->
        <!-- { type: 'url', message: '请输入正确的网址', trigger: 'blur'} -->
        <el-input v-model="lk.path"
                  placeholder="path"></el-input>
      </el-form-item>
      <el-form-item label="name"
                    :rules="[
                    { required: true, message: '请输入网址名称', trigger: 'blur' },
                    ]">
        <el-input v-model="lk.name"
                  placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="picUpload">

        <!-- s手动上传 -->
        <!-- <el-upload class="upload-demo"
                   ref="upload"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :file-list="fileList"
                   :auto-upload="false">
          <el-button slot="trigger"
                     size="small"
                     type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;"
                     size="small"
                     type="success"
                     @click="submitUpload">上传到服务器</el-button>
          <div slot="tip"
               class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->

        <!-- v-model="picPath" -->
        <input ref="myInput"
               type="file"
               @change="selectPic"></input>

        <div class="picCut dd-row">

          <div class="picBig">
            <img :src="picBig"
                 alt="">
            <!-- <img src="@/assets/imgs/nopic.gif" -->
          </div>
          <div class="picSmall">
            <img src="@/assets/imgs/nopic.gif"
                 alt="">
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">提 交</el-button>
        <el-button>取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 本页的逻辑
// 111 输入
// 222 校验
// 333 生成文件名路径 上传到文件夹中
// 444 将文件夹路径和其他的参数上传到 mysql

export default {
  data () {
    return {
      link: '',
      name: '',
      fileList: [],
      lk: {
        path: '',
        name: ''
      }, // 表单所有数据

      picBig: '@/assets/imgs/nopic.gif', // 待裁切的大图
      picPath: '' // 图片本地路径 
    }
  },
  methods: {
    // submitUpload () {
    //   this.$refs.upload.submit();
    // },
    // handleRemove (file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview (file) {
    //   console.log(file);
    // },

    // 选中文件 将其展示到大图部分 等待裁切
    selectPic (e) {
      console.log(e)
      console.log(this.picPath)
      let file = this.$refs.myInput
      let filePath = file.files[0]
      let render = new FileReader()
      console.log(filePath)
      console.log(filePath, 123)
      render.readAsDataURL(filePath)
      let that = this
      render.onload = function (ee) {
        console.log(ee.srcElement)
        console.log(this)
        // that.picBig = this.result // 这两种写法都可以但是注意 this 的指向1231313213131
        that.picBig = ee.srcElement.result
      }
    },
    // 点击提交
    async onSubmit (e) {
      console.log("点击了提交", e)
      console.log("点击了提交2", this.lk)
      let resPicPath = await this.$store.dispatch('uploadPic', )
      let resUploadWebLink = await this.$store.dispatch('uploadWebLink', {
        picPath: resPicPath,
        ...this.lk
      })
    }
  }
}
</script>
<style lang="less">
.AllLinkManage {
  width: 800px;

  .picBig {
    min-width: 200px;
    min-height: 200px;
    max-width: 400px;
    max-height: 400px;
    background: url("../../assets/imgs/uploadbg.png");
    background-size: 2px;
    img {
      min-width: 200px;
      min-height: 200px;
      max-width: 400px;
      max-height: 400px;
      opacity: 1;
    }
  }
  .picSmall {
    margin-left: 20px;
    width: 140px;
    height: 109px;
    background: url("../../assets/imgs/uploadbg.png");
    background-size: 2px;
    img {
      width: 140px;
      height: 109px;
      opacity: 1;
    }
  }
}
</style>

