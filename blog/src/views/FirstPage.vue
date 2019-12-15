<template>
  <div id="FirstPage">
    <el-container style="height:100%" direction="horizontal">
      <el-container>
        <el-header height="200px">
          <img src="@/assets/title.png" alt />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
      <el-aside width="600px">Aside</el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
#FirstPage {
  height: 100%;
  .el-header {
    background: url("../assets/titlebackground.jpg") no-repeat fixed;
    background-size: cover;
    color: #333;
    text-align: center;
    line-height: 60px;
    img{
      margin: 0 auto;
    }
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 260px;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
