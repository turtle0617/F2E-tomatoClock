import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: [
      "the First thing to do today",
      "the First thing to do today",
      "the First thing to do today",
      "the First thing to do today",
      "the First thing to do today",
      "the First thing to do today",
      "the First thing to do today"
    ],
    done: []
  },
  getters: {
    todo(state) {
      return state.todo;
    }
  },
  mutations: {},
  actions: {}
});
