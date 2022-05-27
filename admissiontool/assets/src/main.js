import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import {initRouter} from './router'
import { initI18n } from './utils/i18n'
import bootstrap from './bootstrap'

import message from './lib/messages'

const router = initRouter()
const i18n = initI18n('CN', 'US')

Vue.prototype.$message = message

bootstrap({router, store, i18n, message: Vue.prototype.$message})
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
