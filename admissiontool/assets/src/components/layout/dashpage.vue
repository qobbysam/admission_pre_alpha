<template>
<v-app>

  <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list  >
  
    <!-- <v-list-item>
      <v-list-item-title @click="showmenu">Show me</v-list-item-title>
    </v-list-item> -->
    <v-list-item
      to="/homedash"
    >
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

<v-list-group
      v-for="(item, k) in linkdata"
      :key="k"
      sub-group
      :value="true"
      no-action
    >
    <template v-slot:activator>
      <v-list-item-title :to="item.to" v-text="item.text"></v-list-item-title>
    </template>

        <v-list-item
          v-for="(subItem,x) in item.subLinks"
          :key="x"
          :value="true"
          :to="subItem.to"
          
        > 

            <v-list-item-title v-text="subItem.text"></v-list-item-title>

            <v-list-item-icon>
              <v-icon >mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item>
    </v-list-group>
        

          
  </v-list>


    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> 

<v-main>
 <slot name="mainslot"></slot>
</v-main>
 

   

</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "dashpage",

  data() {

    return {
     // items: [{title:"dash", icon: 'mdi-view-dashboard' }],
     // drawer: null,
      linkdata: [],
      color:"green",
      drawer: null,
      
    }
  },

computed: {

      ...mapGetters('setting', ['firstMenu', 'subMenu', 'menuData', 'menuState']),


},

  mounted() {
    this.showmenu()
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