const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            md: "48rem",
            lg: "90rem",
        },
        fontFamily: {
            "sans": ["Outfit", ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            "xs1": [
                '0.75rem',
                {
                    letterSpacing: "0.047rem",
                    lineHeight: "0.938rem",
                },
            ],
            "xs": [
                "1rem", // 16px
                {
                    letterSpacing: "0.063rem",
                    lineHeight: "1.25rem",
                },
            ],
            "sm": [
                "1.25rem", // 20px
                {
                    letterSpacing: "0.078rem",
                    lineHeight: "1.563rem",
                },
            ],
            "base": [ // 14px
                "0.875rem",
                {
                    letterSpacing: "0.055rem",
                    lineHeight: "1.125rem",
                },
            ],
            "md": [
                "1.5rem", // 24px
                {
                    letterSpacing: "0.094rem",
                    lineHeight: "1.875rem",
                },
            ],
            "lg": "1.875rem", // 30px,
            "xl": [
                "2.5rem", // 40px
                {
                    letterSpacing: "0.156rem",
                    lineHeight: "3.125rem",
                },
            ],
        },
        container: {
            center: true,
        },
        boxShadow: {
            sm: 'inset 0 -2px 0 #10212A',
            DEFAULT: 'inset 0 -4px 0 #10212A',
            md: 'inset 0 -8px 0 #10212A',
        },
        extend: {
            colors: {
                "primary": "hsl(178,60%,48%)",
                "primary-light": "hsl(178,75%,65%)",
                "primary-dark": "hsl(178, 78%, 31%)",
                "secondary": "hsl(39,88%,58%)",
                "secondary-light": "hsl(39,100%,69%)",
                "secondary-dark": "hsl(39, 83%, 44%)",
                "tertiary": "hsl(198,23%,72%)",
                "tertiary-light": "hsl(197,33%,89%)",
                "tertiary-dark": "hsl(199, 17%, 51%)",
                "dark-navy": "hsl(202,32%,15%)",
                "dark-navy-light": "hsl(199,35%,19%)",
            },
            borderRadius: {
                none: 0,
                sm: '5px',
                DEFAULT: '10px',
                md: '15px'
            },
            spacing: {
                4.5: '1.125rem', // 18px
                7.5: '1.875rem', // 30px
                15: '3.875rem', // 62px
                30: '7.5rem', // 120px
                50: '12.5rem', // 200px
                55: '13.75rem', // 220px
                70: '17.25rem' // 276px
            }
        },
    },
    plugins: [],
}
