/* eslint-disable global-require */

export default {
	name: 'ExampleProject', 								// Project Miscelanea Name
	version: require('../../package.json').version,			// Project Version
	globalSearch: false,  									// Enable global search (In dev...)
	config: false, 											// Add config menu item to user's menu
	icon: ['fad', 'conveyor-belt-alt'], 					// Project Icon (FontAwesome)
	keepalive: ['ExampleComponent', 'ExampleComponent2'] 	// KeepAlive components
};
