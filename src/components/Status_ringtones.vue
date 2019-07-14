<template lang="html">
  <el-col :span="12" class="status-ringtiones">
    <div class="ringtiones__container">
      <div class="ringtiones ringtiones-work">
        <div class="ringtiones-work__title">
          <span>WORK</span>
        </div>
        <div class="ringtiones-work__content">
          <el-radio-group class="radio-group" v-model="work_choose">
            <el-radio
              v-for="(work_ring, index) in ringMusic.work"
              :key="index"
              :label="index"
              >{{ work_ring }}</el-radio
            >
          </el-radio-group>
        </div>
      </div>
      <div class="ringtiones ringtiones-break">
        <div class="ringtiones-break__title">
          <span>BREAK</span>
        </div>
        <div class="ringtiones-break__content">
          <el-radio-group class="radio-group" v-model="break_choose">
            <el-radio
              v-for="(break_ring, index) in ringMusic.break"
              :key="index"
              :label="index"
              >{{ break_ring }}</el-radio
            >
          </el-radio-group>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "status_ringtiones",
  data() {
    return {
      ringMusic: {
        work: [
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW"
        ],
        break: [
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW",
          "NONE",
          "DEFAULT",
          "SNOW"
        ]
      },
      work_choose: 0,
      break_choose: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.status-ringtiones {
  padding-left: 125px;
}
.ringtiones {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: white;
}
.ringtiones-work__title {
  background-color: #335a83;
  color: white;
  border-bottom: 0;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}
.ringtiones-work__content {
  margin-top: 1rem;
}
.ringtiones-break {
  margin-top: 15%;
}
.ringtiones-break__title {
  @extend .ringtiones-work__title;
}
.ringtiones-break__content {
  @extend .ringtiones-work__content;
}
.radio-group {
  display: flex;
  flex-wrap: wrap;
}
/deep/ .el-radio {
  color: white;
  font-size: 1rem;
  flex: 1 1 33.33%;
  margin: 0.65rem 0;
}
/deep/.el-radio__input.is-checked .el-radio__inner {
  border-color: #f54384;
  background-color: #f54384;
}
/deep/.el-radio__input.is-checked + .el-radio__label {
  color: white;
}
</style>
