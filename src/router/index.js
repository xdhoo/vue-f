import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import HelloWorld from '@/components/HelloWorld'
import sidebar from '@/components/sidebar'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
			children: [
				{
					path: 'page',
					component: HelloWorld
				}, {
					path: 'side',
					component: sidebar
				}
			]
		}
	]
})
