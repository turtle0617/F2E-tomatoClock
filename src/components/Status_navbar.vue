<template lang="html">
  <el-col :span="8" class="status-navbar">
    <ul class="navbar-list">
      <li
        :class="{ active: highlight_nav.todo }"
        class="page-status"
        @click="changeComponent('todo')"
      >
        <font-awesome-icon class="status-icon" icon="bars" size="2x" />
        <span>TO-DO LIST</span>
      </li>
      <li
        :class="{ active: highlight_nav.analytics }"
        class="page-status"
        @click="changeComponent('analytics')"
      >
        <font-awesome-icon class="status-icon" icon="chart-bar" size="2x" />
        <span>ANALYTICS</span>
      </li>
      <li
        :class="{ active: highlight_nav.ringtones }"
        class="page-status"
        @click="changeComponent('ringtones')"
      >
        <font-awesome-icon class="status-icon" icon="music" size="2x" />
        <span>RINGTONES</span>
      </li>
    </ul>
    <div class="navbar-zoomout-clock">
      <div class="clock_container">
        <font-awesome-icon class="play-icon" icon="play" size="2x" />
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
  name: "status_navebar",
  props: ["page"],
  computed: {
    highlight_nav() {
      const nav_list = {
        todo: false,
        analytics: false,
        ringtones: false
      };
      nav_list[this.page] = true;
      return nav_list;
    }
  },
  methods: {
    changeComponent(changePage) {
      if (this.page === changePage) return;
      this.$emit("changeComponent", changePage);
    }
  }
};
</script>

<style lang="scss" scoped>
.status-navbar {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
}
.page-status {
  cursor: pointer;
  &:hover {
    color: #ff4384;
  }
}
.active {
  color: #ff4384;
}
.navbar-list {
  color: #335a83;
  list-style: none;
  margin-top: 0;
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
.clock_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 96px;
  max-width: 96px;
  background-color: #ff4384;
  box-shadow: inset 0 0 0 5px #003164, 0 0 0 4px #ff4384, 0 0 0 11px #003164;
  border-radius: 50%;
  position: absolute;
  left: 37%;
  top: -15%;
}
.play-icon {
  color: white;
}
</style>
