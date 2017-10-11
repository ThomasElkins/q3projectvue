<template>
  <v-container>
    <v-flex>
      <gmap-map
        :center="center"
        :zoom="9"
        style="width: 500px; height: 300px"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
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
      center: {lat: 33, lng: -112},
      markers: [
        { position: {lat: 33.0, lng: -112} },
        { position: {lat: 11.0, lng: 11.0} }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('getTrails')
  },
  computed: {
    trailData () {
      return this.$store.state.trails
    }
  }
}

</script>
