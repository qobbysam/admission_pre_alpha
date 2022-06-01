<template>

<dashpage-vue>
    
<template #mainslot>
<v-container>
  <v-row>
    <v-col>
          <slot name="dashchildslot"></slot>

    </v-col>
  </v-row>

</v-container>

    </template>
  </dashpage-vue>
</template>

<script>

 import dashpageVue from '../../components/layout/dashpage.vue'
//import nodashpageVue from '../../components/layout/nodashpage.vue'
export default {
    name: 'dashchild',
  components: { dashpageVue, },

}
</script>

<style>

</style>