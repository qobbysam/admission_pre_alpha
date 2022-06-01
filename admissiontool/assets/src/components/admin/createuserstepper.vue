<template>

    <div>

<v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
    Search User Email

        <small>one</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continue
      </v-btn>
      <v-btn text>
        Back
      </v-btn>
    </v-stepper-content>



<v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
    Invite or Add
</v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Back
      </v-btn>
    </v-stepper-content>

    
    <v-stepper-step step="3">

        Add user to Department
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Continue
      </v-btn>
      <v-btn text>
        Back
      </v-btn>
    </v-stepper-content>
  </v-stepper>
    </div>
  
</template>

<script>
export default {

    name:'createuserstepper',
    data () {
      return {
        e6: 1,
      }
    },

}
</script>

<style>

</style>