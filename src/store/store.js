import Vue from "vue";
import Vuex from "vuex";
/* Star is importing all public items into user namespace */
import * as user from "@/store/modules/user.js";
import * as event from "@/store/modules/event.js";
import * as notification from "@/store/modules/notification.js";
Vue.use(Vuex);

export default new Vuex.Store({
  /*modules we are telling vuex to use that module */
  modules: {
    user,
    event,
    notification
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
