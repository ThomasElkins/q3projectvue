<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex md6>
        <v-text-field v-model="searchCity" name="userSearch" label="City"></v-text-field>
        <v-select
          v-model="searchState"
          v-bind:items="realms"
          label="State"
          append-icon="map"
          autocomplete
          hide-details
        ></v-select>
      </v-flex>
        <v-flex md1></v-flex>
      <v-flex md6>
        <v-btn class="padme" round block color="light-blue darken-1" v-on:click="executeSearch" dark>Search</v-btn>
        <router-link class="commentButton" to="/comments">
          <v-btn round block color="light-blue darken-1" dark>Add a Comment</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        rules: {
          required: (value) => !!value || 'Required.',
        },
        realms: [
          'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
          'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
          'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
          'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        radius: [10,20,30,40,50],
        searchCity: '',
        searchState: ''
      }
    },
    methods: {
      executeSearch() {
        this.$store.dispatch('getTrails', [this.searchCity, this.searchState])
        this.$store.dispatch('getComments')
        this.$store.dispatch('getCity', this.searchCity)
        this.searchCity = ''
        this.searchState = 'State'
      }
    }
  }
</script>
<style scoped>
  .padme {
    margin-top: 4%;
    margin-bottom: 10%;
  }
  .commentButton {
    text-decoration: none;
  }

</style>
