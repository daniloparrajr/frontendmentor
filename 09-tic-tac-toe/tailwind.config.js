const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            md: "54.857rem",
            lg: "102.857rem",
        },
        fontFamily: {
            "sans": ["Outfit", ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            "xs": [
                "1rem",
                {
                    letterSpacing: "0.063rem",
                    lineHeight: "1.25rem",
                },
            ],
            "sm": [
                "1.25rem",
                {
                    letterSpacing: "0.078rem",
                    lineHeight: "1.563rem",
                },
            ],
            "base": [
                "0.875",
                {
                    letterSpacing: "0.055rem",
                    lineHeight: "1.125rem",
                },
            ],
            "md": [
                "1.5rem",
                {
                    letterSpacing: "0.094rem",
                    lineHeight: "1.875rem",
                },
            ],
            "lg": [
                "2.5rem",
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
            sm: 'inset 0 -2px 0 #000',
            DEFAULT: 'inset 0 -4px 0 #000',
            md: 'inset 0 -8px 0 #000',
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
                "dark-navy-hover": "hsl(199,35%,19%)",
            },
            borderRadius: {
                none: 0,
                DEFAULT: '10px',
                md: '15px'
            },
        },
    },
    plugins: [],
}
