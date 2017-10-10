// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import Mapbox from 'mapbox-gl-vue'
import router from './router'
import {store} from './store'
window.mapboxgl = require('mapbox-gl');

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('mapbox', require('mapbox-gl-vue/src/components/Mapbox.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App, 'mapbox': Mapbox }
})
