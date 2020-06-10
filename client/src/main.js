// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#5fc0be',
          secondary: '#074847'
        }
      }
    }
  }),
  components: { App },
  template: '<App/>'
})
