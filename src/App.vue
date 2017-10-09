<template>
  <div id="app">
    <v-app>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <MyMap></MyMap>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import SearchBar from './components/SearchBar.vue'
import MyMap from './components/MyMap.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    SearchBar,
    MyMap,
    Footer
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
