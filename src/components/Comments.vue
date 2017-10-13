<template>
  <v-container>
    <v-flex>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Comments'
},

data () {
  return {
    comments
  }
},
computed: {
  commentsForCurrentCity() {
    return this.$store.state.comments
  }
}

</script>
