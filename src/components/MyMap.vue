<template>
    <v-container>
      <v-layout>
        <div id='map'></div>
      </v-layout>
    </v-container>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data () {
    return {}
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = `pk.eyJ1IjoidGhvbWFzZWxraW5zIiwiYSI6ImNqN3VxMmtxMjJjYXQzMm4wdWJ1dXg5djgifQ.X4d2c80HiYJWviJzHyArlQ`
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v9',
        center: [-74.50, 40],
        zoom: 7
      })
    }
  }
}
</script>

<style>
  #map {
    width: 100%;
    height: 400px;
  }

</style>
