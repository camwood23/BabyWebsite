import Vue from "vue";
import App from "./App.vue";
import BabyGender from "./BabyGender";
import Registry from "./components/Registry";
import Pictures from "./components/Pictures";

Vue.config.productionTip = false;

const routes = {
  "/": App,
  "/gender": BabyGender,
  "/registry": Registry,
  "/photos": Pictures,
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
