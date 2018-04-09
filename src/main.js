// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import './components/layout/common.css'
import store from './store/index.js'


Vue.config.productionTip = false
Vue.use(iView, { locale });

/* eslint-disable no-new */
// 开启debug模式
Vue.config.debug = true;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
