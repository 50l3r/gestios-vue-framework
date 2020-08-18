function loadView(path) {
	return () => import(`../views/${path}`);
}

export default [
	{
		name: '_home',
		path: '/',
		redirect: '/dummy',
		meta: {
			auth: true
		}
	},
	{
		name: 'dummy',
		path: '/dummy',
		component: loadView('index.vue'),
		meta: {
			title: 'Dummy',
			icon: ['fal', 'file'],
			auth: true,
			topbar: {
				buttons: [
					{
						text: 'New Button',
						icon: ['far', 'plus-square'],
						variant: 'primary',
						class: '',
						event: 'eventAction'
					}
				]
			}
		}
	}
];
