<template lang="html">
  <el-row class="status">
    <Status_navbar />
    <Status_ringtones />
    <el-col :span="4" class="status-sideBar">
      <div class="sideBar__close-icon el-icon-close"></div>
      <div class="sideBar__logo-name">
        <span>POMODORO</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Status_navbar from "@/components/Status_navbar.vue";
import Status_ringtones from "@/components/Status_ringtones.vue";
export default {
  name: "status",
  components: {
    Status_navbar,
    Status_ringtones
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
.status-sideBar {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
}
.sideBar {
  &__close-icon {
    font-size: 3rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  &__logo-name {
    font-size: 1.5rem;
    writing-mode: vertical-rl;
    margin-bottom: 2.9rem;
  }
}
</style>
