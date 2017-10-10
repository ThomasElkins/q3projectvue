<template>
  <div class="mapbox-wrap">
    <mapbox
      access-token="pk.eyJ1IjoidGhvbWFzZWxraW5zIiwiYSI6ImNqN3VxMmtxMjJjYXQzMm4wdWJ1dXg5djgifQ.X4d2c80HiYJWviJzHyArlQ"
      :map-options="fakeConfig"
      @map-click="mapClicked"></mapbox>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  name: 'mapcontainer',
  components: {
    'mapbox': Mapbox
  },

  data () {
    return {
      fakeConfig: {
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
      }
    }
  },

  mounted () {
    this.$store.dispatch('getTrails')
  },

  computed: {
    trails() {
      return this.$store.state.trails
    }
  },

  methods: {
    // mapClicked(map, e) {
    //   alert('Map Clicked')
    // },
    mapLoaded(map) {
          map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': {
                  'type': 'geojson',
                  'data': {
                      'type': 'FeatureCollection',
                      'features': [{
                          'type': 'Feature',
                          'geometry': {
                              'type': 'Point',
                              'coordinates': [-77.03238901390978, 38.913188059745586]
                          },
                          'properties': {
                              'title': 'Mapbox DC',
                              'icon': 'monument'
                          }
                      }, {
                          'type': 'Feature',
                          'geometry': {
                              'type': 'Point',
                              'coordinates': [-122.414, 37.776]
                          },
                          'properties': {
                              'title': 'Mapbox SF',
                              'icon': 'harbor'
                          }
                      }]
                  }
              },
              'layout': {
                  'icon-image': '{icon}-15',
                  'text-field': '{title}',
                  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                  'text-offset': [0, 0.6],
                  'text-anchor': 'top'
              }
          });
      },
      mapClicked(map, e) {
          this.addPopUp(map, e);
      },
      mapMouseMoved(map, e) {
          const features = map.queryRenderedFeatures(e.point, {
              layers: ['points']
          });
          map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
      },
      addPopUp(map, e) {
          const features = map.queryRenderedFeatures(e.point, {
              layers: ['points']
          });
          if (!features.length) {
              return;
          }

          const feature = features[0];

          const popupContent = Vue.extend({
              template: '<button @click="popupClicked">Click Me!</button>',
              methods: {
                  popupClicked() {
                      alert('Popup Clicked!');
                  },
              }
          });

          // Populate the popup and set its coordinates
          // based on the feature found.
          const popup = new mapboxgl.Popup()
              .setLngLat(feature.geometry.coordinates)
              .setHTML('<div id="vue-popup-content"></div>')
              .addTo(map);

          new popupContent().$mount('#vue-popup-content');
      }
  }
}

</script>

<style>
#map {
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 2%;
  width: 90%;
  height: 400px;
}

.mapbox-wrap {
  position: relative;
}

</style>
