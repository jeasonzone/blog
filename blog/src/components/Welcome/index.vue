<template>
  <div id="Welcome">
    <div class="centerBox">
      <el-button type="success" icon="el-icon-check" class="enterBtn" circle></el-button>
    </div>
    <div id="wrap">
      <canvas id="canvas">canvas not support</canvas>
    </div>
  </div>
</template>

<script>
import "../../../public/lib/style.css";
import "../../../public/lib/script.js";
export default {
  name: "Welcome"
};
</script>
<style scoped lang="less">
#Welcome {
  background-color: #e9eef3;
  position: relative;
  .centerBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .enterBtn {
      font-size: 55px;
    }
  }
}
</style>