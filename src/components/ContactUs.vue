<template>
    <div id="contact">
            <NavBar/>
        <v-toolbar flat class="black" >
            <v-spacer> 
                <v-toolbar-title class="text-uppercase text-center">
                    <div id="title">
                        <span class="deep-orange--text font-weight-bold ">Contact</span>
                        <span class="white--text font-weight-bold"> Us</span>
                    </div>
                </v-toolbar-title> 
            </v-spacer>
        </v-toolbar>

    <v-container>
        <v-row justify="center">
            <v-col 
            cols="12"
            md="2"
            >
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field
                    color="deep-orange"
                    v-model="firstname"
                    :rules="nameRules"
                    label="first name"
                    required
                    ></v-text-field>

                    <v-text-field
                    dense
                    color="deep-orange"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>
                </v-form>
            </v-col>
            <v-col 
            cols="12"
            md="2"
            >
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field
                    color="deep-orange"
                    v-model="lastname"
                    :rules="nameRules"
                    label="Last name"
                    required
                    ></v-text-field>

                    <v-text-field
                    dense
                    color="deep-orange"
                    v-model="number"
                    counter="10"
                    :rules="numberRules"
                    label="Phone Number"
                    required
                    ></v-text-field>

                    
                
                </v-form>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col
            cols="4"
            >
                <v-textarea
                outlined 
                name="query"
                counter="150"
                :rules="queryRules"
                label="your queries">
                </v-textarea>
                <v-btn 
                    right
                    :disabled="!valid"
                    color="deep-orange"
                    dark
                    @click="validate"
                    >
                    Send
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <AppFooter/>
</div>
</template>
<script>
import NavBar from './NavBar'
import AppFooter from './AppFooter'


export default {
    name:'Contact Us',
    components:{NavBar,AppFooter},

    data: () => ({
      valid: true,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      number:'',
      numberRules: [
        v => !!v || 'Phone number is required',
        v => (/^[0-9]*$/.test(v) && v.length<=10) || 'number must be valid',
      ],
      query:'',
      queryRules: [v => !!v || 'Query is required',
        v => (v && v.length <= 150) || 'Query must be less than 100 characters',
      ],

    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
    
}
</script>
<style>
#title{
    font-family:'Courier New', Courier, monospace;
    word-spacing: 5px;
    letter-spacing: 10px;
    font-size: 25px;
}
label{
    text-transform: uppercase;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2px;
}

</style>