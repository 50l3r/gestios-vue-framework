export default [
	{
		category: true,
		title: 'General '
	},
	{
		title: 'Partes',
		key: 'partes',
		icon: ['fal', 'file'],
		url: {
			name: 'partes'
		},
		auth: {
			strict: false,
			roles: ['view.partes', 'view.mine.partes']
		}
	},
	{
		title: 'Encuestas',
		key: 'reviews',
		icon: ['far', 'star'],
		url: {
			name: 'reviews'
		},
		auth: {
			strict: true,
			roles: ['_BOSS']
		}
	}
];
