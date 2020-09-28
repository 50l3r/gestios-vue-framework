module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['calltek', 'calltek/vue'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js', '.vue', '.scss', '.less']
			}
		}
	}
};
