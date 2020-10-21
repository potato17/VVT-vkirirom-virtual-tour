<template>
<div id="footer">
  <v-footer
    absolute
    padless
    >
    <v-card
      class="flex"
      flat
      tile
      >
      <v-card-text>
        <v-layout class="text-center">
          <v-flex 
          v-for="(col,i) in rows"
          :key="i"
          xs3 layout column>

           <span class="body-2 deep-orange--text font-weight-bold" v-text="col.title.toUpperCase()"/>

          <div class="grey--text " 
          v-for="(child,i) in col.children"
          :key="i"
          v-text="child"/>
          </v-flex>
        </v-layout>
      </v-card-text>
      
      <v-card-text 
      class="py-2 white--text text-left black"
      xs3 layout column>
         <h class="font-weight-medium  ">ZEALVENTURE ,  {{ new Date().getFullYear() }} All right reserved</h>
       <v-btn 
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >

        <router-link>#</router-link>
          <v-icon size="24px" right>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>
<script>
import Vuetify from 'vuetify'

  export default {
    vuetify: new Vuetify(),
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      rows : [
        {
          title:'From Us',
          children :["If you believe what we believe, you are a part of the vision. Together we can change the world for the better"]
        },
        {
          title:'Company',
          children :["#99 Main street 123, Phnom Penh,1200","zealventure@info.com","(855) 123 456 789"]
        },
        {
          title:'Link',
          children :['BLOG','SERVICE','PROJECT','ABOUT US']
        },
        {
          title:'Help Center',
          children :['FAQ','TERM & CONDITION','HOW IT WORK', 'PRIVACY']
        },

      ]
    }),
  }
</script>
<style>
.grey--text{
  font-size: 10px;
  line-height: 17px;
  
}
h{
  margin-left: 100px;
  margin-right: 650px;
  font-size: 10px;
  letter-spacing: 2px;
}

</style>