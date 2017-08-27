import Vue from 'vue'
//import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

//Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
	el:         '#app',
	routes,
	render: h => h(App)
})
