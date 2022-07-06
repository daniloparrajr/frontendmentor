const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
        container: {
            center: true,
        },
		screens: {
			lg: '1110px',
		},
		fontSize: {
            'base': ['1rem', '1.625rem'],
            'xs': ['0.813rem', '1.188rem'],
            'sm': ['0.938rem', '1.375rem'],
            'lg': ['2.5rem', '2.75rem'],
            'xl': ['3.5rem', '4rem']
		},
		fontFamily: {
			'sans': ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
		},
		extend: {
            maxWidth: {
                md: '27.813rem',
                lg: '33.75rem',
                sm: '21.875rem',
            },
            width: {
                '18': '4.5rem',
            },
            boxShadow: {
                '2xl': '0px 15px 15px -10px #FF9F8E'
            },
			colors: {
				'bright-red': 'hsl(12, 88%, 59%)',
                'light-red': 'hsl(12,92%,72%)',
				'dark-blue': 'hsl(228, 39%, 23%)',
				'dark-grayish-blue': 'hsl(227, 12%, 61%)',
				'very-dark-blue': 'hsl(233, 12%, 13%)',
				'very-pale-red': 'hsl(13, 100%, 96%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
			},
            margin: {
                '30': '7.5rem'
            },
            padding:{
                '16': '3.875rem'
            }
		},
	},
	plugins: [],
}