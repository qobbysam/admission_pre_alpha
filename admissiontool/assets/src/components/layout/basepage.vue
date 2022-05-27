<template>
  <v-app id="admission">
        <router-view></router-view>

    <slot></slot>
  </v-app>
</template>

<script>
  export default {
      name: "basepage",
    data: () => ({ drawer: null }),
  }
</script>  