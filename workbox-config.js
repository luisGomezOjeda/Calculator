module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,png,html,css,svg,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};