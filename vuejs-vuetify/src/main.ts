import Vue from "vue";
import _Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCapacitorPlugins from 'vue-capacitor';

Vue.use(VueCapacitorPlugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount("#app");
