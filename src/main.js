import Vue from "vue";
import App from "./App.vue";
import BabyGender from "./BabyGender";

Vue.config.productionTip = false;

const routes = {
  "/": App,
  "/gender": BabyGender,
};

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
}).$mount("#app");
