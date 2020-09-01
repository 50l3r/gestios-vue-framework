const project = require('../main.js').default;

const plugins = [
	{
		key: project.name,
		paths: ['example'],
		storage: window.localStorage
	}
];

// DANGER ZONE!!!
// Load Modules from 'modules' folder
const modules = {};
const files = require.context('./modules/', false, /\.js$/);
files.keys().forEach((key) => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default { modules, plugins };
