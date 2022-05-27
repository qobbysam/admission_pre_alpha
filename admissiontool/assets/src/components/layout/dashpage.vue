<template>
  <basepage>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
       

<v-list nav dense>
    <v-list-item>
<v-btn @click="showmenu">Show me</v-btn>
    </v-list-item>
    <v-list-item
      to="/homedash"
    >
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
  <!--Main category list-->
    <v-list-group
      v-for="(item, k) in linkdata"
      :key="k"
      :value="true"
      prepend-icon="mdi-food-apple"
      no-action
    >
    <template v-slot:activator>
      <v-list-item-title :to="item.to">{{item.text}}</v-list-item-title>
    </template>
       <!--Sub category item-->
        <!--if 2nd lvl child available-->
        
        <v-list-item
          v-for="(subItem,x) in item.subLinks"
          :key="x"
          :value="true"
          :to="subItem.to"
          
        >

    
      <v-list-item-title :to="subItem.to">{{subItem.text}}</v-list-item-title>

    </v-list-item>
   


      <!--if not 2nd lvl child available-->
        <!-- <v-list-item :to="subItem.to"  v-for="(subItem,v) in 
           item.subLinks" :key="v">
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{subItem.name}}</v-list-item-title>
        </v-list-item> -->
    </v-list-group>
  </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
      
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

     
    </v-app-bar>

    <v-main>
      <!--  -->
      <slot></slot>
    </v-main>
  </basepage>
</template>

<script>
import basepage from './basepage.vue'
import { mapGetters } from 'vuex'

export default {
    name: "nodashpage",
  components: { basepage },

  data() {

    return {
      items: [{title:"dash", icon: 'mdi-view-dashboard' }],
      drawer: null,
      linkdata: [],
      color:"green",
    }
  },

computed: {

      ...mapGetters('setting', ['firstMenu', 'subMenu', 'menuData']),


},
  methods: {


    showmenu() {
      //console.log(this.firstMenu)
     // console.log(this.subMenu())
     let ans = this.firstMenu
      console.log(ans)
    
    let mend = this.menuData

    console.log("menud: ",mend)

    var linkss = this.getLinks(mend)

    console.log(linkss)

    this.linkdata = linkss
    },

    getLinks(data) {

      let links = []

      for (var key in data) {
          var obj = data[key]
          console.log(obj.name)
          var tosend = {
            to: obj.fullPath,
            text: obj.name,
            subLinks : []

          }

          if (obj.children) {

            for (var ckey in obj.children) {

              var cobj = obj.children[ckey]

              var tosendch = {
                to: cobj.fullPath,
                text: cobj.name
              }
              tosend.subLinks.push(tosendch)
            }
          }

          links.push(tosend)
      }

      return links
    }, 


    // drawer() {

    //   return this.items
    // }
  }

}
</script>

<style>

</style>