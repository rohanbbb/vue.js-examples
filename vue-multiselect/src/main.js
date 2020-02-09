import Vue from "vue";
import App from "./App.vue";
import Multiselect from "vue-multiselect";

Vue.component("multiselect", Multiselect);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
