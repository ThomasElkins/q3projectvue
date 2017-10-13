<template>
  <div id="resultContainer">
    <SearchBar></SearchBar>
    <MapAndComments></MapAndComments>
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue'
  import MapAndComments from './MapAndComments.vue'
  export default {
    name: 'BodyContainer',
    components: {
      SearchBar,
      MapAndComments
    },
    data () {
      return {

      }
    }
  }
</script>
<style>
#resultContainer {
  margin-bottom: 20px;
}
</style>
