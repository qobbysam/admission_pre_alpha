<template>
  
  <dashchild>
    <template #dashchildslot>
      <v-container>
        <v-row>
          <v-col>
            <h2> HomePage page is showing</h2>

          </v-col>
        </v-row>
      </v-container>
    </template>
  </dashchild>
    

</template>

<script>
import Dashchild from '../../components/layout/dashchild.vue'

//import dashchildVue from '../../components/layout/dashchild.vue'

 //import dashpageVue from '../../components/layout/dashpage.vue'
//import nodashpageVue from '../../components/layout/nodashpage.vue'
export default {
    name: 'home',
  components: {  Dashchild, },

}
</script>

<style>

</style>