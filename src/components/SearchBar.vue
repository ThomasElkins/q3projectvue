<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex md6>
        <v-text-field name="input-1" label="City" id="testing"></v-text-field>
        <v-select
                                v-bind:items="states"
                                v-model="al"
                                label="Select"
                                append-icon="map"
                                autocomplete
                                hide-details
                              ></v-select>
      </v-flex>
      <v-flex md1></v-flex>
      <v-flex md6>
        <v-select class="padme"
                                v-bind:items="type"
                                v-model="e2"
                                label="Select"
                                single-line
                                auto
                                append-icon="map"
                                hide-details
                              ></v-select>
                              <v-select
                                                      v-bind:items="radius"
                                                      v-model="e2"
                                                      label="Select"
                                                      single-line
                                                      auto
                                                      append-icon="map"
                                                      hide-details
                                                    ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        states: [
          'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
          'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
          'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
          'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }
</script>
<style scoped>
  .padme {
    padding-bottom: 6%;
  }
</style>
