<template>
  <nodashpage-vue>
      
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
       
        cols="12"
        sm="4"
      >

        <v-card
          class="pa-2"
          outlined
          tile
        >
        <h2>Hi Verify page is showing</h2>
        
        </v-card>
      </v-col>

      
    </v-row>
    <v-row>
      <v-btn @click="doLogin">Login</v-btn>
    </v-row>
  </v-container>
  </nodashpage-vue>
</template>

<script>

import nodashpageVue from '../../components/layout/nodashpage.vue'



//import func from 'vue-editor-bridge'
export default {
    name: "verify",
  components: { nodashpageVue },

  methods: {
  },

  

}
</script>

<style>

</style>