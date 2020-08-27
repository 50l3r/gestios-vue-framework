// Vue Router Wiki: 	https://router.vuejs.org/
// Font Awesome Icons: 	https://fontawesome.com/icons
// GestiOS Roles
//////////////////
// view.mine.APP			 : View user's items
// view.APP					 : View all items
// add.mod.APP				 : Add items with moderation status
// add.APP					 : Add items witouth moderation
// set.mine.APP				 : Edit user's item
// set.APP				 	 : Edit items
// del.mine.APP				 : Del user'sitems
// del.APP					 : Del items
// lock.APP					 : Change item status (publish/draft)
// comment.APP				 : Comment items
// moderate.APP				 : Delete & Moderate comments
// uncomment.mine.APP		 : Delete user's comments
// _BOSS					 : Only Admins


function loadView(path) { // Async component
	return () => import(`../views/${path}`);
}

export default [
	{
		name: '_home',
		path: '/',
		redirect: '/example', 							// Redirect to another url
		meta: {
			auth: true
		}
	},
	{
		name: 'example', 								// Primary route key
		path: '/example', 								// Slug
		component: loadView('example/index.vue'), 		// Route's component
		meta: {
			title: 'Example', 							// Bread's title
			icon: ['fal', 'file'], 						// Bread's icon (FontAwesome)
			auth: true, 								// Only auth users or not
			topbar: {
				buttons: [ 								// Topbar Buttons
					{
						text: 'New Button', 			// Button text
						icon: ['far', 'plus-square'], 	// Button icon
						variant: 'primary', 			// Button Variant (https://www.antdv.com/components/button/)
						class: '', 						// Button classes
						event: 'eventButton' 			// $hub.$emit('XXXXX') Event called
					}
				]
			}
		}
	},
	{
		name: '_config',
		path: '/config',
		component: loadView('_config.vue'),
		meta: {
			title: 'Configuración',
			icon: ['far', 'wrench'],
			auth: {
				strict: false,
				roles: ['_BOSS'],
			},
		},
	},
];
