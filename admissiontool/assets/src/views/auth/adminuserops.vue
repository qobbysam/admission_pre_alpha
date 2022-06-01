<template>

  <dashchild>
    <template #dashchildslot>
      
          <v-row>
              <v-col>
                    <h2> User ops page</h2>
              </v-col>
              <v-col>
                <createuser></createuser>
              </v-col>
          </v-row>
            <v-spacer></v-spacer>
          <v-row>
              <v-col>
                  <usertable></usertable>
              </v-col>
          </v-row>

        
    </template>

  </dashchild>
     


</template>

<script>

import Usertable from '../../components/admin/usertable.vue'
import Dashchild from '../../components/layout/dashchild.vue'
import Createuser from '../../components/admin/createuser.vue'
export default {
    name: 'adminuserops',
  components: { Usertable, Dashchild, Createuser },
  data() {
    return{

    }
  },

}
</script>

<style>

</style>