import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyD0iUuzNcq0YMuPqHafhfFoxLzVVQoJbEE',
  authDomain: 'vue-crm-b639f.firebaseapp.com',
  databaseURL: 'https://vue-crm-b639f.firebaseio.com',
  projectId: 'vue-crm-b639f',
  storageBucket: 'vue-crm-b639f.appspot.com',
  messagingSenderId: '678868916207',
  appId: '1:678868916207:web:d5fff8c7cd4ffa6a23481a',
  measurementId: 'G-D2KPM3WL4H'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
