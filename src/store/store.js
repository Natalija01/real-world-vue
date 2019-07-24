import Vue from "vue";
import Vuex from "vuex";
/* Star is importing all public items into user namespace */
import * as user from "@/modules/user.js";
import * as event from "@/modules/event.js";
Vue.use(Vuex);

export default new Vuex.Store({
  /*modules we are telling vuex to use that module */
  modules: {
    user,
    event
  },
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  }
});
