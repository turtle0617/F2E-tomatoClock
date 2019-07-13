<template lang="html">
  <el-col :span="8" class="status-navbar">
    <ul class="navbar-list">
      <li>
        <font-awesome-icon class="status-icon" icon="bars" size="2x" />
        <span>TO-DO LIST</span>
      </li>
      <li>
        <font-awesome-icon class="status-icon" icon="chart-bar" size="2x" />
        <span>ANALYTICS</span>
      </li>
      <li>
        <font-awesome-icon class="status-icon" icon="music" size="2x" />
        <span>RINGTONES</span>
      </li>
    </ul>
    <div class="navbar-zoomout-clock">
      <div class="clock clock-outside">
        <div class="clock clock-middle">
          <div class="clock-inside">
            <font-awesome-icon class="play-icon" icon="play" size="2x" />
          </div>
        </div>
      </div>
      <div class="zoomout-clock__time">
        25:00
      </div>
      <div class="zoomout-clock__title">
        the First thing to do today
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "status_navebar"
};
</script>

<style lang="scss" scoped>
.status-navbar {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
}
.navbar-list {
  color: #335a83;
  list-style: none;
  span {
    padding-left: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 2.25rem;
  }
  li {
    margin-bottom: 2.6rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
}
.navbar-zoomout-clock {
  width: 100%;
  height: 350px;
  position: absolute;
  bottom: -25%;
  background-color: #ffedf7;
  border-radius: 50%;
  max-height: 350px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: center;
}
.zoomout-clock {
  &__time {
    color: #ff4384;
    font-size: 4rem;
    margin-top: 16%;
  }
  &__title {
    color: #003164;
    font-size: 1rem;
  }
}
.clock-outside {
  width: 100%;
  height: 100%;
  max-height: 96px;
  max-width: 96px;
  border: 7px solid #003164;
  padding: 2px;
  background-color: #ff4384;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 35%;
  top: -15%;
}
.clock-middle {
  border-radius: 50%;
  background-color: #003164;
  width: 95%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.clock-inside {
  width: 87%;
  height: 87%;
  background-color: #ff4384;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.play-icon {
  color: white;
}
</style>
