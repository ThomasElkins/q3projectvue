import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    trails: [],
    comments: [],
    currentCity: ''
  },
  mutations: {
    setTrails(state, args) {
      state.trails = args
    },
    setComments(state, args) {
      state.comments = args
    },
    setCity(state, args) {
      state.currentCity = args
    }
  },
  actions: {
    getTrails(context, [searchCity, searchState]) {
      axios.get(`https://trailapi-trailapi.p.mashape.com/?limit=100&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${searchCity}&q[state_cont]=${searchState}&radius=100`,
        {headers: {"X-Mashape-Key": "zUC9v7vhTTmshRZhrNE1rQk5JtbGp1SS6DujsnmsruSvj2RWYd"}})
          .then(res => context.commit('setTrails', res.data.places))
    },
    getComments(context) {
      axios.get(`http://localhost:8000/comments`)
        .then(res => context.commit('setComments', res))
    },
    getCity(context, searchCity) {
        context.commit('setCity', `${searchCity}`)
    }
  }
})
