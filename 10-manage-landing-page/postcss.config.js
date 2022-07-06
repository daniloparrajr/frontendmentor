module.exports = {
	plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {},
		autoprefixer: {},
		cssnano: {
			preset: [
				'cssnano-preset-advanced',
				{
					discardComments: {
						removeAll: true,
					},
					zindex: false,
					discardUnused: false,
				}
			]
		}
	}
}