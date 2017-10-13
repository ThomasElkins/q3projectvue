import Vue from 'vue'
import Router from 'vue-router'
import AddComment from '../components/AddComment'
import SearchBar from '../components/SearchBar.vue'
import MapAndComments from '../components/MapAndComments.vue'
import BodyContainer from '../components/BodyContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'BodyContainer',
      components: BodyContainer
    },
    {
      path: '/comments',
      name: 'AddComment',
      component: AddComment
    }
  ]
})
