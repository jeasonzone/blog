<template>
  <div id="Home">
    <Welcome class="welcomeBox" v-if="welcomeStatus" />
    <el-container style="height:100%" direction="vertical">
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="18" :offset="3">
            <Sider />
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer（待完成）</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Sider from "@/components/Sider";


export default {
  name: "home",
  data() {
    return {
      welcomeStatus: false
    };
  },
  components: {
    Header,
    Welcome,
    Sider
  }
};
</script>
<style lang="less" scoped>
#Home {
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  .welcomeBox {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
}
.el-header,
.el-footer {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  .el-row {
    height: 100%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
