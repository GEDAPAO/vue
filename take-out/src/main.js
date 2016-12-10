import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
/* eslint-disable no-new */

import goods from "./components/goods"
import evaluation from "./components/evaluation"
import merchants from "./components/merchants"

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes:[
		{path:"/a",component: goods},
		{path:"/b",component: evaluation},
		{path:"/c",component: merchants}
	]
})

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components:{
  	App
  }
}).$mount("#app");
