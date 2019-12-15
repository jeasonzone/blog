<template>
  <el-row :gutter="23" id="headerBox">
    <el-col :span="8">
      <el-image
        class="logo"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="contain"
      ></el-image>
    </el-col>
    <el-col :span="13">
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo navbox"
        mode="horizontal"
        background-color="#e9eef3"
      >
        <el-menu-item index="/nicearticles">精彩博文</el-menu-item>
        <el-menu-item index="/articlefiles">博文归档</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="3">
      <el-button type="text" @click="open">登录</el-button>
      <!-- <LoginBox /> -->
    </el-col>
  </el-row>
</template>

<script>
import LoginBox from "../LoginBox";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/nicearticles",
      activeIndex2: "/articlefiles"
    };
  },
  components: {
    LoginBox
  },
  methods: {
    open() {
      this.$alert("", "", {
        showConfirmButton: false,
        center: true,
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
#headerBox {
  .logo {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
}
</style>