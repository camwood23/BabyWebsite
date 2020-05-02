import Vue from "vue";
import App from "./App.vue";
import BabyGender from "./BabyGender";

Vue.config.productionTip = false;

const routes = {
  "#": App,
  "#gender": BabyGender,
};

new Vue({
  data: {
    currentRoute: window.location.hash,
  },
  computed: {
    ViewComponent() {
      return this.currentRoute ? routes[this.currentRoute] : routes["#"];
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
}).$mount("#app");

window.addEventListener(
  "hashchange",
  function () {
    location.reload();
  },
  false
);
