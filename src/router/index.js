import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import workplace from '@/views/workplace'
import analysis from '@/views/analysis'
import dashboard from '@/views/dashboard'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
			children: [
				{
					path: 'dashboard',
					component: dashboard
				}, {
					path: 'workplace',
					component: workplace
				}, {
					path: 'analysis',
					component: analysis
				}
			]
		}, {
			path: '/',
			redirect: '/dashboard'

		}
	]
})
