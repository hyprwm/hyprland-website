module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-unused-vars': ['off', { varsIgnorePattern: '.*' }],
		'svelte/no-at-html-tags': 'off'
	},
	globals: { globalThis: true }
}
