<template lang="html">
  <el-row class="status">
    <Status_navbar />
    <Status_analytics />
  </el-row>
</template>

<script>
import Status_navbar from "@/components/Status_navbar.vue";
import Status_analytics from "@/components/Status_analytics.vue";
export default {
  name: "status",
  components: {
    Status_navbar,
    Status_analytics
  }
};
</script>

<style lang="scss" scoped>
.status {
  background-color: #003164;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2.9rem 5.4rem 0 5.4rem;
}
</style>
