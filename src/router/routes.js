export default [{
		path: '/',
		component: () =>
			import('layouts/index'),
		children: [{
			path: 'home',
			component: () =>
				import('layouts/home'),
			children: [{
				path: 'guanzhu',
				component: () =>
					import('pages/guanzhu')
			}, {
				path: '',
				redirect: 'guanzhu'
			}, {
				path: 'recommend',
				component: () =>
					import('pages/recommend')
			}, {
				path: 'hot',
				component: () =>
					import('pages/hot')
			}]
		}, {
			path: 'category',
			component: () =>
				import('pages/category')
		}, {
			path: '',
			redirect: 'home'
		}]
	},
	{ // Always leave this as last one
		path: '*',
		component: () =>
			import('pages/404')
	},
	{
		path: '/article/:id',
		component: () =>
			import('pages/article')
	},
	{
		path: '/edit',
		component: () =>
			import('pages/edit')
	}
]