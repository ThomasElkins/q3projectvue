<template>
  <div>
    <div v-for="comment in commentsForCity">
      <h5><strong>{{comment.hike_name}}:</strong></h5>
      <h6>{{comment.comment}}</h6>
      <h6>-<em>{{comment.user_name}}</em></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',

data () {
  return {
    comments: []
  }
},
computed: {
  commentsForCity() {
    return this.$store.state.comments.filter(comment => comment.city === this.$store.state.currentCity)
  }
}
}

</script>
