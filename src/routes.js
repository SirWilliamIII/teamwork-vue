import Homepage from './pages/Home.vue'
import Signup from './pages/Signup.vue'
import Upload from './pages/Upload.vue'
import Info from './pages/Info.vue'

export const routes = [
	{
		path: '',
		component: Homepage
	},
	{
		path: '/signup',
		component: Signup
	},
	{
		path: '/upload',
		component: Upload
	},
	{
		path: '/info',
		component: Info
	}

]
