module.exports = {
	plugins: {
		'postcss-import': {},
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