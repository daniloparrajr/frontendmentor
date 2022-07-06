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
            md: '768px',
		},
		fontFamily: {
			'sans': ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
		},
        fontSize: {
            'base': ['1rem', '1.625rem'], // 16px
            'xs': ['0.813rem', '1.188rem'], // 13px
            'sm': ['0.938rem', '1.375rem'], // 14px
            'md': ['0.938rem', '1.375rem'], // 15px
            'lg': ['1.875rem', '2.813rem'], // 30px
            'xl': ['2.5rem', '2.75rem'], // 40px
            '2xl': ['3.5rem', '4rem'] // 56px
        },
		extend: {
            colors: {
                'bright-red': 'hsl(12, 88%, 59%)',
                'light-red': 'hsl(12,92%,72%)',
                'very-light-red': 'hsl(13,100%,96%)',
                'dark-blue': 'hsl(228, 39%, 23%)',
                'dark-grayish-blue': 'hsl(227, 12%, 61%)',
                'very-dark-blue': 'hsl(233, 12%, 13%)',
                'very-pale-red': 'hsl(13, 100%, 96%)',
                'very-light-gray': 'hsl(0, 0%, 98%)',
            },
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
            margin: {
                '30': '7.5rem',
                '15': '3.875rem', // 62px
            },
            padding:{
                '16': '3.875rem'
            }
		},
	},
	plugins: [],
}