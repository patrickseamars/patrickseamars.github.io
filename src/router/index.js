import Vue from 'vue'
import Router from 'vue-router'
import Patrick from '@/components/Patrick'
import Santa from '@/components/Santa'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Patrick',
			component: Patrick
		},
		{
			path: '/santa',
			name: 'Santa',
			component: Santa
		}
	]
})
