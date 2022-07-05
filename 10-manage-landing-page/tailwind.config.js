const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
        container: {
            center: true,
        },
		screens: {
			sm: '375px',
			md: '768px',
			lg: '992px',
			xl: '1440px',
		},
		fontSize: {
            'base': ['1rem', '1.625rem'],
            'xs': ['0.813rem', '1.188rem'],
            'lg': ['2.5rem', '2.75rem'],
            'xl': ['3.5rem', '4rem']
		},
		fontFamily: {
			'sans': ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				'bright-red': 'hsl(12, 88%, 59%)',
				'dark-blue': 'hsl(228, 39%, 23%)',
				'dark-grayish-blue': 'hsl(227, 12%, 61%)',
				'very-dark-blue': 'hsl(233, 12%, 13%)',
				'very-pale-red': 'hsl(13, 100%, 96%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
			},
            margin: {
                '30': '7.5rem'
            }
		},
	},
	plugins: [],
}