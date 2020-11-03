import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API;

Vue.mixin({
  computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      }
  },
  methods: {
    redirectToNotFound: function() {
      this.$router.push({
          path: `/`
      })
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
