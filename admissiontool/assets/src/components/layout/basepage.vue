<template>
  <v-app id="admission">




 

            
            <router-view></router-view>


  
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data: () => ({ drawer: null }),
    computed:{
            ...mapGetters('setting', ['firstMenu', 'subMenu', 'menuData', 'menuState']),

    }
  }
</script>