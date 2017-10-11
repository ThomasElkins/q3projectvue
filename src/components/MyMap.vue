<template>
  <v-container>
    <!-- <h4 v-for='trail in trailDataLocation'>{{trail.position}}</h4> -->
    <v-flex>
      <gmap-map
        :center="center"
        :zoom="3"
        style="width: 500px; height: 300px"
      >
        <gmap-marker
          :key="index"
          v-for="(trail, index) in trailDataLocation"
          :position="trail.position"
          :clickable="true"
          :draggable="true"
          @click="center=trail.position"
        ></gmap-marker>
      </gmap-map>
    </v-flex>
  </v-container>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBXK_zXGqV3CSalMBPyZUh21MG24tEk7OI'
      // libraries: 'places', //// If you need to use place input
    }
  });

export default {
  data () {
    return {
      center: {lat: 39.8283, lng: -98.5795}
    }
  },

  computed: {
    trailDataLocation () {
      return this.$store.state.trails.map(trail => ({position: {lat: trail.lat, lng: trail.lon}}))
    }
  }
}

</script>
