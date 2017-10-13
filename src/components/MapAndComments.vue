<template>
  <v-container id="MCcontainer" fluid>
    <v-layout row justify-space-between>
      <v-flex offset-md1 md6>
        <v-progress-circular v-if="isLoading" indeterminate v-bind:size="70" v-bind:width="7" color="green"></v-progress-circular>
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
  },
  computed: {
    isLoading () {
      return this.$store.state.loading
    }
  }
}
</script>
<style>
</style>
