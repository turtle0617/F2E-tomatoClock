<template lang="html">
  <el-col :span="12" class="status-analytics">
    <div class="analytics__container">
      <div class="analytics analytics-time">
        <div class="analytics-time__title">
          <span>FOCUE TIME</span>
        </div>
        <div class="analytics-time__content">
          <div class="today">
            <div class="today__title">
              <span>TODAY</span>
            </div>
            <div class="today__content">
              <span class="today__content--value">20</span>
              <span class="today__content--unit">/TOMATO</span>
            </div>
          </div>
          <div class="week">
            <div class="week__title">
              <span>WEEK</span>
            </div>
            <div class="week__content">
              <span class="week__content--value">108</span>
              <span class="week__content--unit">/TOMATO</span>
            </div>
          </div>
        </div>
      </div>
      <div class="analytics analytics-chart">
        <div class="analytics-chart__title">
          <span>CHART</span>
          <div class="chart__dateSelector">
            <span>2019.7.1 - 2019.7.7</span>
          </div>
        </div>
        <div class="analytics-chart__content">
          <ve-line :data="chartData" :extend="chartOption" />
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
import VeLine from "v-charts/lib/histogram.common";
export default {
  name: "status_analytics",
  components: { VeLine },
  data() {
    return {
      chartOption: {
        color: ["white"],
        textStyle: {
          color: "white"
        },
        legend: {
          textStyle: {
            color: "white"
          }
        },
        yAxis: {
          splitLine: {
            show: false
          }
        }
      },
      chartData: {
        columns: ["日期", "FOCUS TIME"],
        rows: [
          {
            日期: "1月1日",
            "FOCUS TIME": 4
          },
          {
            日期: "1月2日",
            "FOCUS TIME": 7
          },
          {
            日期: "1月3日",
            "FOCUS TIME": 9
          },
          {
            日期: "1月4日",
            "FOCUS TIME": 1
          },
          {
            日期: "1月5日",
            "FOCUS TIME": 20
          },
          {
            日期: "1月6日",
            "FOCUS TIME": 1
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin timeContent {
  &__title {
    color: white;
    font-size: 1rem;
  }
  &__content--value {
    color: #ff4384;
    font-size: 4rem;
  }
  &__content--unit {
    color: #335a83;
    font-size: 1rem;
  }
}

.status-analytics {
  padding-left: 125px;
}
.analytics {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
.analytics-time__title {
  background-color: #335a83;
  color: white;
  border-bottom: 0;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}
.analytics-time__content {
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: space-between;
}

.today {
  @include timeContent;
}
.week {
  @include timeContent;
}
.analytics-chart {
  margin-top: 10%;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend .analytics-time__title;
  }
}
.chart__dateSelector {
  font-size: 1rem;
  &:before {
    content: "";
    display: inline-block;
    margin-right: 0.5rem;
    padding: 0.2rem;
    border: 1px solid;
    border-width: 0 3px 3px 0;
    transform: rotate(135deg);
  }
  &:after {
    content: "";
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.2rem;
    border: 1px solid;
    border-width: 0 3px 3px 0;
    transform: rotate(-45deg);
  }
}
</style>
