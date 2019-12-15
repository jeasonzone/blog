<template>
  <ul id="containBox" class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">
      <Article />
      <el-divider>
        <i class="el-icon-link"></i>
      </el-divider>
    </li>
  </ul>
</template>

<script>
import Article from "@/components/Article";
export default {
  name: "ContainBox",
  data() {
    return {
      count: 0
    };
  },
  components: {
    Article
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>
<style scoped lang="less">
#containBox {
}
</style>