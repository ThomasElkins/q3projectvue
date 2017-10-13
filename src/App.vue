<template>
  <div id="app">
    <v-app>
      <Toolbar></Toolbar>
      <router-view></router-view>
      <BottomNav></BottomNav>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import SearchBar from './components/SearchBar.vue'
import MapAndComments from './components/MapAndComments.vue'
import AddComment from './components/AddComment.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    SearchBar,
    MapAndComments,
    AddComment,
    BottomNav
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
