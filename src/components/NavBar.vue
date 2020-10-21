<template>
<div >
    <v-toolbar  
    color="brown lighten-5"
    flat 
    >
      <v-toolbar-title class="font-weight-light text-uppercase black--text">
        zeal venture
      </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="grey darken-4" ></v-app-bar-nav-icon>
    </v-toolbar>
      <v-navigation-drawer app 
      v-model="drawer" 
      temporary
      right
      class="grey lighten-4" 

      >
        <v-subheader class="brown lighten-4" style="height:65px"></v-subheader>
        <v-list rounded>
          <!-- list starts -->
          <v-list-item-group  :value="true" v-model="SelectedItem">
            <v-list-item class="text-uppercase black--text text-center font-weight-bold">
              <v-icon v-text="items[0].icon"
              dense
              flat
              >
              </v-icon>
              <v-list-item-title  class="text-uppercase black--text text-left  font-weight-bold" style="margin-left:30px; letter-spacing:2px">{{ items[0].title }}</v-list-item-title>
            </v-list-item>

            <!-- drop dowm bar of specialization -->
            <v-list-group :value="false" no-action sub-group left style="margin-left:-20px">
              <template v-slot:activator>
                  <v-list-item-title class="text-uppercase black--text text-left font-weight-bold" style="margin-left:10px; letter-spacing:2px" >{{items[1].title}}</v-list-item-title>
              </template>

            
              <v-list-item v-for="item in specialization" :key="item" class=" text-uppercase black--text text-left" style="margin-left:-25px; letter-spacing:1px">
                <v-icon left v-text="item.icon" dense flat>
                </v-icon>
                <v-list-item-title  style="font-size:12px" v-text="item.title">
                </v-list-item-title>
              </v-list-item>
            </v-list-group>

            <v-list-item
            v-for="(item,i) in items.slice(2)"
            :key="i"
            class=" text-uppercase black--text text-center font-weight-bold">
              <v-icon 
              v-text="item.icon"
              dense
              flat
              >

              </v-icon>
              <v-list-item-title class="text-uppercase black--text text-left  font-weight-bold" style="margin-left:30px; letter-spacing:2px" v-text="item.title"></v-list-item-title>
            </v-list-item>
             
          </v-list-item-group>
        </v-list>
        
      </v-navigation-drawer>
</div>
</template>
<script>
import Vuetify from 'vuetify'

export default {
  vuetify: new Vuetify(),
  data () {
    return {
      drawer : false,
      SelectedItem :1,
      items : [
        {title:'home',icon:'home',link:'Home'},
        {title:'specialization',icon:'work',link:'Specialization'},
        {title:'project',icon:'find_in_page',link:'Project'},
        {title:'journal',icon:'history_edu',link:'Journal'},
        {title:'faq',icon:'help',link:'faq'},
        {title:'contact us',icon:'contacts',link:'Contact'}],
      specialization:[{title:'real estate',icon:'location_city',link:'RealEstate'},{title:'construction tech',icon:'engineering',link:'Construction'}]
      }

  }
}
</script>
<style>
.font-weight-light{
  letter-spacing: 5px;
}


</style>