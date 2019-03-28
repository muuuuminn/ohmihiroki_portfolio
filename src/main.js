import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import firebase from '@/firebase';

Vue.use(Vuetify, {
  theme: {
    primary: '#009688',
    secondary: '#8bc34a',
    accent: '#4caf50',
    error: '#cddc39',
    warning: '#ff5722',
    info: '#f44336',
    success: '#e91e63',
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app');
