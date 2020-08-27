export default [
	// Category
	{
		category: true, // Required for category mode
		title: 'General' // Category title
	},
	// Menu Item
	{
		title: 'Partes', // Menu title
		key: 'partes', // Primary key for active menu detection
		icon: ['fal', 'file'], // Font Awesome Icon
		url: {
			name: 'partes' // Url Slug
		},
		auth: {
			strict: false, // Require all roles or not
			roles: ['view.partes', 'view.mine.partes'] // Array of required Roles
		}
	}
];
