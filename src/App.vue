<template>
<div id="app">
    <v-app class="grey lighten-3">
    <router-view/>
    </v-app>
  </div>
</template>

<script>
import Vuetify from 'vuetify'


export default {
  vuetify: new Vuetify(),
  name: 'App',
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
  
</style>
