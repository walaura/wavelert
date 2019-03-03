module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module',
		experimentalObjectRestSpread: true,
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
