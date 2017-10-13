<template>
      <gmap-map
        :center="trailDataLocation[0].position"
        :zoom="8"
        style="width: 500px; height: 300px">
        <gmap-marker
          :key="index"
          v-for="(trail, index) in trailDataLocation"
          :position="trail.position"
          :clickable="true"
          :draggable="true"
          @click="center=trail.position">
          <gmap-info-window
            :opened="true">{{trail.position.name}}</gmap-info-window>
        </gmap-marker>
        <gmap-info-window
          :key="index"
          v-for="(trail, index) in trailDataLocation"
          :position="trail.position"
          :opened="false">
          {{trail.position.name}}
        </gmap-info-window>
      </gmap-map>
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
  name: 'MyMap',
  data () {
    return {
      center: {lat: 39.8283, lng: -98.5795},
      markers: [],
      zoom: 9
    }
  },
  watch: {
      markers(markers) {
        const bounds = new google.maps.LatLngBounds()
        for (let m of markers) {
          bounds.extend(m.position)
        }
        this.$refs.gmap.$mapObject.fitBounds(bounds)
      },

    },
  computed: {
    trailDataLocation () {
      return this.$store.state.trails.filter(trail => trail.lat !== 0)
      .map(trail => ({position: {lat: trail.lat, lng: trail.lon, name: trail.name}}))
    }
  },
  methods: {
    toggleInfoWindow() {
      this.$infowindow.open()
    }
  }
}

</script>
