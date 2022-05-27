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
        <h2>Hi Login page is showing</h2>
        
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



import {getVerifyInfo} from '@/services/user'
import {setAuthorization} from '@/utils/request'
import {loadRoutes} from '@/utils/routerUtil'
import {mapMutations} from 'vuex'
//import func from 'vue-editor-bridge'
export default {
    name: "login",
  components: { nodashpageVue },

  methods: {
      ...mapMutations('account', ['setUser', 'setPermissions', 'setRoles']),
      doLogin() {
        //call to django 

        //response with data//

       const res = getVerifyInfo()
        
        // res.then(function(res_d){
        //   console.log(res)
        //   this.afterLogin(res_d)
        // })

        res.then(this.afterLogin)
        res.catch(function(e){
          console.log(e.message)
        })

        
      },

      afterLogin(res) {
      this.logging = false
      console.log("afterlogin started")
      console.log(res)
      const loginRes = res.data
      if (loginRes.code >= 0) {

        console.log(loginRes)
       // const {user, permissions, roles} = loginRes.data.data
        const user = loginRes.user
        const permissions = loginRes.permissions
        const roless = loginRes.roles
        console.log(user)
        console.log(permissions)
        console.log(roless)
        this.setUser(user)
        this.setPermissions(permissions)
        this.setRoles(roless)

        //let fakedate = new Date().getTime() + 30 * 60 * 1000
        setAuthorization({token: loginRes.token, expireAt: new Date(new Date().getTime() + 30 * 60 * 1000)})
        
        // 
       
          //const routesConfig = loginRes.data.data
          //console.log(routesConfig)
          //loadRoutes(routesConfig)
         //let roles = roless[0]
        //  if (roles == "su"){
        //     this.$router.push('/suDash')
        //     this.$message.success(loginRes.message, 3)
            
        //   } else if (roles == "bmanager") {
        //     this.$router.push('/bdmDash')
        //     this.$message.success(loginRes.message, 3)
            
        //   }else if (roles == "bworker") {
        //     this.$router.push("/bdwDash")
        //     this.$message.success(loginRes.message, 3)
            
        //   }else if (roles == "cowner") {
        //     this.$router.push("/crrOwnerDash")
        //     this.$message.success(loginRes.message, 3)
            
        //   }else if (roles == "cdriver") {
        //     this.$router.push("/crrDriverDash")
        //     this.$message.success(loginRes.message, 3)
            
        //   }else{
        //     this.$router.push("/dashboard/analysis")
        //                 this.$message.success(loginRes.message, 3)

        //   }

        loadRoutes(this.$router.options)

        this.$router.push("/homedash")

        
          
       
      } else {
        this.error = loginRes.message
      }
    }
  },

  

}
</script>

<style>

</style>