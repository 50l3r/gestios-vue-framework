const plugins = [
	{
		key: 'dummy',
		paths: ['general'],
		storage: window.localStorage
	}
];

// LOAD MODULES
const modules = {};
const files = require.context('./modules/', false, /\.js$/);
files.keys().forEach(key => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default { modules, plugins };
