<template>
  <div id="app">
    <v-app>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <MyMap></MyMap>
      <BottomNav></BottomNav>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import SearchBar from './components/SearchBar.vue'
import MyMap from './components/MyMap.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    SearchBar,
    MyMap,
    BottomNav
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
