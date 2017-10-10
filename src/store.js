import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    trails: []
  },
  mutations: {
    setTrails(state, args) {
      state.trails = args
    }
  },
  actions: {
    getTrails(context) {
      axios.get(`https://trailapi-trailapi.p.mashape.com/?limit=100&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Phoenix&q[state_cont]=Arizona&radius=100`,
        {headers: {"X-Mashape-Key": "zUC9v7vhTTmshRZhrNE1rQk5JtbGp1SS6DujsnmsruSvj2RWYd"}})
          .then(res => context.commit('setTrails', res.data))
    }
  }
})
