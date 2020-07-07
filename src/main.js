import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.scss'
import 'font-awesome/css/font-awesome.min.css'
import './static/bootstrap.min.css'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/directives'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
