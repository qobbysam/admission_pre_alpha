<template>
<v-app>
<Basepage></Basepage>
</v-app>
   
</template>

<script>
import Basepage from './components/layout/basepage.vue';
//import basepageVue from './components/layout/basepage.vue'

export default {
    name: "app",
    components: { Basepage }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>


