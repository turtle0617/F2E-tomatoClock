<template>
  <div class="tomato-clock__constainer">
    <el-row>
      <el-col :span="10">
        <el-input
          class="add-mission--input"
          @keypress.enter.native="addMission"
          placeholder="ADD A NEW MISSION"
          suffix-icon="el-icon-plus"
          v-model="add_mission"
        >
        </el-input>
        <div class="ongoing-mission">
          <div class="ongoing-mission__header">
            <div class="ongoing-mission__header--circle"></div>
            <span>{{ ongoing_mission }}</span>
          </div>
          <div class="ongoing-mission__time">{{ time_clock }}:00</div>
        </div>
        <div class="mission-list">
          <template v-for="(mission, index) in mission_list">
            <el-row class="mission-item" v-if="index < 3" :key="index">
              <el-col :span="20" class="mission-item__title">
                <div class="mission-item__title--circle"></div>
                <span>{{ mission }}</span>
              </el-col>
              <el-col :span="4" class="mission-item__active el-icon-video-play">
              </el-col>
            </el-row>
          </template>
          <div class="mission-list__footer" v-if="mission_list.length > 3">
            <span>MORE</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="clock__constainer">
        <div class="clock-outside">
          <div class="clock-inside">
            <font-awesome-icon
              class="clock-play"
              icon="play-circle"
              size="6x"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="2" class="tomato-clock__navbar">
        <div class="navbar-status">
          <font-awesome-icon class="status-icon" icon="bars" size="2x" />
          <font-awesome-icon class="status-icon" icon="chart-bar" size="2x" />
          <font-awesome-icon class="status-icon" icon="music" size="2x" />
        </div>
        <div class="navbar-title">
          <span>POMODORO</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "tomato-clock",
  data() {
    return {
      add_mission: "",
      ongoing_mission: "test",
      mission_list: [],
      time_clock: 25
    };
  },
  methods: {
    addMission() {
      this.mission_list.push(this.add_mission);
      this.add_mission = "";
    }
  }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:700");
.tomato-clock__constainer {
  box-sizing: border-box;
  background-image: linear-gradient(90deg, #ffedf7 64.5%, #003164 0);
  background-repeat: no-repeat;
  padding: 48px 80px 0;
  height: 100vh;
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
.ongoing-mission {
  margin-top: 34%;
}
.ongoing-mission__header {
  &--circle {
    border: 1px solid;
    display: inline-block;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  span {
    font-size: 1.5rem;
    margin-left: 1rem;
    vertical-align: top;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
}
.ongoing-mission__time {
  font-size: 11rem;
  color: #ff4384;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
.mission-list {
  margin-top: 18%;
}
.mission-item {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #003164;
}
.mission-item__title {
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
}
.mission-item__title--circle {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid;
  border-radius: 50%;
  margin-right: 0.4rem;
}
.mission-item__active {
  cursor: pointer;
  text-align: right;
}
.mission-list__footer {
  color: #ff4384;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: right;
  margin-top: 0.6rem;
  cursor: pointer;
}
.clock__constainer {
  position: relative;
  height: 70vh;
}
.clock-outside {
  border-radius: 50%;
  padding: 4px;
  border: 4px solid #ff4384;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-height: 540px;
  max-width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.clock-inside {
  width: 95%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4384;
  border-radius: 50%;
}
.clock-play {
  color: white;
  cursor: pointer;
}
.tomato-clock__navbar {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.navbar {
  &-status {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &-title {
    display: flex;
    align-items: flex-end;
    writing-mode: vertical-lr;
    font-size: 1.5rem;
    margin-top: 40vh;
  }
}
.status-icon {
  color: white;
  cursor: pointer;
  margin-bottom: 3rem;
}
</style>
