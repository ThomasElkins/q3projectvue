<template>
<v-container id="commentContainer">
  <v-layout>
    <v-flex>
      <v-text-field class="spaceMeOut topInput" v-model="user_name" name="Name" label="Name"></v-text-field>
      <br />
      <v-text-field class="spaceMeOut" v-model="city" name="City" label="City"></v-text-field>
      <br />
      <v-text-field class="spaceMeOut" v-model="hike_name" name="Hike" label="Hike"></v-text-field>
      <br />
      <v-text-field class="spaceMeOut" v-model="comment" name="CommentBody" label="Comment..."></v-text-field>
      <br />
      <router-link to="/">
        <v-btn class="spaceMeOut" round block color="blue darken-1" v-on:click="executeComment" dark>Submit Comment</v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        user_name: '',
        city: '',
        hike_name: '',
        comment: ''
      }
    },
    methods: {
      executeComment() {
        this.$store.dispatch('addComment', [this.user_name, this.city, this.hike_name, this.comment])
    }
  }
}
</script>
<style>
.topInput {
  margin-top: 2%;
}
.spaceMeOut {
  margin-bottom: 4%;
}

</style>
