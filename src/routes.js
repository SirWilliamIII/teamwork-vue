import Homepage from './pages/Home.vue'
import Signup from './pages/Signup.vue'

export const routes = [
	{
		path: '',
		component: Homepage
	},
	{
		path: '/signup',
		component: Signup
	}
]
