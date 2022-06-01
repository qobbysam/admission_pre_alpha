<template>
  <div>

     <v-dialog
            v-model="dialog"
            width="500"
          >

        <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add User
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
        Adding user steps
        </v-card-title>

        <v-card-text>
            <createuserstepper></createuserstepper>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
     
  </div>
</template>

<script>
import createuserstepper from './createuserstepper.vue'
export default {
  components: { createuserstepper },

    name:"createuser",
    data() {
        return {
            dialog:false,
        }
    },

}
</script>

<style>

</style>