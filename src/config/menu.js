export default [
	// Category
	{
		category: true, // Required for category mode
		title: 'General' // Category title
	},
	// Menu Item
	{
		title: 'Example', // Menu title
		key: 'example', // Primary key for active menu detection
		icon: ['fal', 'file'], // Font Awesome Icon
		url: {
			name: 'example' // Url Slug
		},
		auth: {
			strict: false, // Require all roles or not
			roles: ['view.example', 'view.mine.example'] // Required Roles
		},
		children: [ // Children items
			{
				title: 'Example SubMenu',
				key: 'example_submenu',
				icon: ['far', 'list'],
				url: {
					name: 'example'
				},
				auth: {
					strict: false,
					roles: ['add.example', 'add.mod.example']
				}
			}
		]
	}
];
