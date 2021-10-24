import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import api from './services/api'
import VueSwal from 'vue-swal'


Vue.prototype.$http = api;
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSwal)


// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
