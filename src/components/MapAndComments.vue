<template>
  <v-container fluid>
    <v-layout row justify-space-between>
      <v-flex md6>
        <MyMap></MyMap>
      </v-flex>
      <v-flex md6>
        <Comments></Comments>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyMap from './MyMap.vue'
import Comments from './Comments.vue'
export default {
  name: 'MapAndComments',
  components: {
    MyMap,
    Comments
  },

  data () {
    return {
    }
  }
}
</script>
