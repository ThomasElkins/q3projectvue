<template>
  <div id="app">
    <v-app>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <MapAndComments></MapAndComments>
      <BottomNav></BottomNav>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import SearchBar from './components/SearchBar.vue'
import MapAndComments from './components/MapAndComments.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    SearchBar,
    MapAndComments,
    BottomNav
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
