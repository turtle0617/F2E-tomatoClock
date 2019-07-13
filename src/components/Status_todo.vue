<template lang="html">
  <el-col :span="8" class="status-todo">
    <el-input
      class="add-mission--input"
      @keypress.enter.native="addMission"
      placeholder="ADD A NEW MISSION"
      suffix-icon="el-icon-plus"
    >
    </el-input>
    <el-collapse accordion>
      <el-collapse-item
        class="mission-list mission-list--todo"
        title="TO-DO"
        name="1"
      >
        <el-row
          class="mission-item"
          v-for="(mission, index) in todo"
          :key="index"
        >
          <el-col :span="20" class="mission-item__title">
            <div class="mission-item__title--circle"></div>
            <span>{{ mission }}</span>
          </el-col>
          <el-col :span="4" class="mission-item__active el-icon-video-play">
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item
        class="mission-list mission-list--done"
        title="DONE"
        name="2"
      >
      </el-collapse-item>
    </el-collapse>
  </el-col>
</template>

<script>
export default {
  name: "status_todo",
  computed: {
    todo() {
      return this.$store.getters.todo;
    }
  }
};
</script>

<style lang="scss" scoped>
.status-todo {
  margin-left: 125px;
}
.add-mission--input {
  /deep/ input {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 1rem;
    &::placeholder {
      color: #ff4384;
      font-family: "Roboto", sans-serif;
      font-style: italic;
      font-weight: bold;
    }
  }
  /deep/ span {
    color: #ff4384;
  }
}

.mission-list {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-top: 20%;
  /deep/ .el-collapse-item__header {
    background-color: #335a83;
    color: white;
    border-bottom: 0;
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  /deep/ .el-collapse-item__wrap {
    background-color: #003164;
    padding-bottom: 0;
    border: 0;
  }
}
.mission-item {
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 1px solid #335a83;
  &__title {
    display: flex;
    align-items: center;
    padding: 0.6rem 0;
    &--circle {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid;
      border-radius: 50%;
      margin-right: 0.4rem;
    }
  }
  &__active {
    font-size: 1.5rem;
  }
}
</style>
