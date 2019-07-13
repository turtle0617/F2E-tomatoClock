import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlayCircle,
  faPlay,
  faBars,
  faChartBar,
  faMusic
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPlayCircle, faBars, faChartBar, faMusic, faPlay);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
