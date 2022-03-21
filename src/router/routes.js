import Layout from "@/layout/index.vue";
const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/homepage',
		children: [
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
			{
				path: '/stockBonus',
				name: 'stockBonus',
				redirect: '/stockBonus/bonusView',
				meta: {
					title: "股票分红",
					isNav: true,
					private: true
				},
				component: () => import('@/views/stockBonus/index.vue'),
				children: [
					{
						path: 'bonusView',
						name: 'bonusView',
						meta: {
							title: "分红查看",
						},
						component: () => import('@/views/stockBonus/bonusView/index.vue'),
					},
					{
						path: 'myProfit',
						name: 'myProfit',
						meta: {
							title: "我的收益",
						},
						component: () => import('@/views/stockBonus/myProfit/index.vue'),
					},
					{
						path: 'recruitDetails',
						name: 'recruitDetails',
						meta: {
							title: "私募详情",
						},
						component: () => import('@/views/stockBonus/recruitDetails/index.vue'),
					},
				]
			},
			{
				path: '/recommendReward',
				name: 'recommendReward',
				redirect: '/recommendReward/myInvite',
				meta: {
					title: "推荐奖励",
					isNav: true,
					private: true
				},
				component: () => import('@/views/recommendReward/index.vue'),
				children: [
					{
						path: 'myInvite',
						name: 'myInvite',
						meta: {
							title: "我的邀请",
						},
						component: () => import('@/views/recommendReward/myInvite/index.vue'),
					},
					{
						path: 'recommendProfit',
						name: 'recommendProfit',
						meta: {
							title: "推荐收益",
						},
						component: () => import('@/views/recommendReward/recommendProfit/index.vue'),
					},
				]
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
