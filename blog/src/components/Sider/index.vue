<template>
  <el-card shadow="hover" class="asideCard">
    <div class="Box">
      <img src="@/assets/xx.jpg" class="touxiang" />
      <div class="info">
        <h4>JeasonTest</h4>
      </div>
    </div>
    <el-divider>
      <i class="el-icon-loading"></i>
    </el-divider>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="个人阐述" name="1">
        <div>一个可爱又迷人的反派角色</div>
        <div>懵逼于海大，懵懂于海大</div>
        <div>曾经梦想仗剑走天涯，后来太困了，没去~</div>
      </el-collapse-item>
      <el-collapse-item title="-->前方300m右转" name="2">
        <div class="hexoBlog">
          <a href="https://jeasonzone.github.io/">
            点击小飞机
            <span class="el-icon-s-promotion plane"></span>
          </a>
        </div>
        <div>里面虽然不是什么高大上，但是有我学习中的点点滴滴~</div>
      </el-collapse-item>
      <el-collapse-item title="My demos" name="3">
        <div>
          <a href="http://106.12.126.216/jeasonzone/" style="color:green">
            <span class="el-icon-caret-right"></span>瓜子电影
            <span class="el-icon-caret-left"></span>
          </a>
        </div>
        <div style="width:100px;margin:0 auto">
          <el-divider>
            <i class="el-icon-stopwatch"></i>
          </el-divider>
        </div>
        <div>
          <div>
            恩特打印
            <span class="el-icon-arrow-down"></span>
          </div>
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </div>
      </el-collapse-item>
      <el-collapse-item title="关于本demo" name="4">
        <div>
          参考自Ragnar
          <br />来源于
        </div>
        <a href="https://ragnar-document.github.io/">Ragnar的github</a>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
export default {
  name: "Sider",
  data() {
    return {
      activeName: "1",
      url: "https://jeasonzone.github.io/2019/11/10/恩特打印/1.jpg",
      srcList: ["https://jeasonzone.github.io/2019/11/10/恩特打印/1.jpg"]
    };
  }
};
</script>
<style scoped lang="less">
.asideCard {
  height: 80%;
  width: 400px;
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
  .Box {
    display: flex;
    margin: 0 auto;
    .info {
      padding: 10px;
    }
  }
  .touxiang {
    height: 70px;
    margin: auto;
    border-radius: 30px;
    animation: spin 1s ease-in-out infinite;
  }
}
@keyframes spin {
  50%,
  100% {
    transform: rotate3d(100, 100, 100, 360deg);
  }
}
.hexoBlog {
  text-align: center;
}
.plane {
  font-size: 29px;
}
</style>