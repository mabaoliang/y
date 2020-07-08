import Vue from 'vue'

// import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '@/other/routes.js'

Vue.use(ElementUI)
// Vue.prototype.$ajax=axios

Vue.config.productionTip = false
// const router = new VueRouter({ routes });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
