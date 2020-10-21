import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' //ensure usage of css-loader

Vue.use(Vuetify, {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})

Vue.config.productionTip = false

new Vue({
    router,
    vuetify: new Vuetify(),
    render: h => h(App),
}).$mount('#app')