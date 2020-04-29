import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeData from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(storeData)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
