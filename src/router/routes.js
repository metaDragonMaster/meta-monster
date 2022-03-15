import Layout from "@/layout/index.vue";
const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/homepage',
		children:[
			{
				path: '/homepage',
				name: 'homepage',
				meta: {
					title: "首页",
					isNav: true,
				},
				component: () => import('@/views/homepage/index.vue'),
			},
			{
				path: '/privateRecruit',
				name: 'privateRecruit',
				meta: {
					title: "私募",
					isNav: true,
				},
				component: () => import('@/views/privateRecruit/index.vue'),
			},
			{
				path: '/whiteBooks',
				name: 'whiteBooks',
				meta: {
					title: "白皮书",
					isNav: true,
				},
				component: () => import('@/views/whiteBooks/index.vue'),
			},
			{
				path: '/demo',
				name: 'demo',
				meta: {
					title: "demo",
				},
				component: () => import('@/views/demo/index.vue'),
			},
		]
	},
	{
		path: '/error/404',
		name: 'error404',
		meta: {
			title: "错误页面-找不到资源",
		},
		component: () => import('@/views/errorPage/404.vue'),
	},
	{
		path: "/:catchAll(.*)",
		redirect: '/error/404'
	},
]
export default routes
