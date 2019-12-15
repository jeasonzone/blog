<template>
  <div class="">归档</div>
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