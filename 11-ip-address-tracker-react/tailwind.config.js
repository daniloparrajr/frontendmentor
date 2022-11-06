const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "992px",
            xl: "1440px",
        },
        fontFamily: {
            "sans": ["Rubik", ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            "base": ["1.125rem", "1.313rem"], // 18px
            "xs": ["0.625rem", "0.75rem"], // 10px
            "sm": ["0.75rem", "0.875rem"], // 12px
            "md": ["1.25rem", "1.5rem"], // 20px
            "lg": ["1.625rem", "1.875rem"], // 26px
            "xl": ["2rem", "1.875rem"], // 32px
        },
        extend: {
            colors: {
                "dark-gray": "#2c2c2c",
                "gray": "#898989",
            },
            spacing: {
                "4.5": "1.125rem", // 18px
                "6.5": "1.625rem", // 26px
            },
        },
    },
    plugins: [],
}