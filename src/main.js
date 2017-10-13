// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router';
import App from './App'
import {store} from './store'
import BodyContainer from './components/BodyContainer'
import AddComment from './components/AddComment'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDysTMMJGBMd3xGFhySpk4D-uKW3p7L47s'
  }
})
Vue.use(VueRouter)

const routes = [
  {path: '/', component: BodyContainer},
  {path: '/comments', component: AddComment}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
