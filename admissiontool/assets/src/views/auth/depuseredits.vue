<template>

<dashchild>
<template #dashchildslot>
  <v-container>
    <v-row>
      <v-col
      >


        <h2>Dep User edit page is showing</h2>
        
      </v-col>


      
    </v-row>

    <v-row>
        <v-col>
            <infofiltercom></infofiltercom>
        </v-col>
    </v-row>

    <v-row><infoedittablecom></infoedittablecom></v-row>
  </v-container>


</template>
     </dashchild>

</template>

<script>
import Infoedittablecom from '../../components/depuser/infoedittablecom.vue';
import Infofiltercom from '../../components/depuser/infofiltercom.vue';
import Dashchild from '../../components/layout/dashchild.vue';




//import func from 'vue-editor-bridge'
export default {
    name: "depuseredits",
  components: {  Dashchild, Infofiltercom, Infoedittablecom },

  methods: {
  },

  

}
</script>

<style>

</style>