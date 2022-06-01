<template>

  <dashchild>
    <template #dashchildslot>
      
          <v-row>
              <v-col>
                    <h2> User Live Page</h2>
              </v-col>
           
          </v-row>
            <v-spacer></v-spacer>
          <v-row>
              <v-col>
                  <filtercom></filtercom>
                  
              </v-col>
          </v-row>

            <v-spacer></v-spacer>
          <v-row>
              <v-col>
                  <tablecom></tablecom>
              </v-col>
          </v-row>

        
    </template>

  </dashchild>
     


</template>

<script>

import Dashchild from '../../components/layout/dashchild.vue'
import Filtercom from '../../components/depuser/filtercom.vue'
import Tablecom from '../../components/depuser/tablecom.vue'
export default {
    name: 'depuserlive',
  components: {  Dashchild ,Filtercom, Tablecom},
  
  data() {
        return{

    }
  },

}
</script>

<style>

</style>