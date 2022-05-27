<template>
  <basepage>

    <v-app-bar app>

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

export default {
    name: "nodashpage",
  components: { basepage },

}
</script>

<style>

</style>