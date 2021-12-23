module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'tablet': { 'max': '700px' },
            // => @media (max-width: 640px) { ... }

            'laptop': { 'max': '1000px' },
            // => @media (max-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        minHeight: {
            '150px': '180px'
        },
        minWidth: {
            '80px': '100px',
        },
        maxWidth: {
            '80px': '80px',
        },
        maxHeight: {
            '80px': '80px',
        },
        colors: {
            black: {
                light: '#292b2e',
                DEFAULT: '#000000'
            },
            white: {
                light: '#f5eded',
                soft: '#efeeea',
                DEFAULT: '#ffffff'
            },
            pink: {
                light: '#ff7ce5',
                DEFAULT: '#ff49db',
                dark: '#7d0264',
            },
            blue: {
                light: '#8e93fa',
                soft: '#c4e2ff',
                pale: '#5f64d5',
                DEFAULT: '#2e6cc7',
                dark: '#000078',
            }
        },
        fontFamily: {
            'default': ['Verdana', 'sans-serif'],
            'titles': ['Bookman', 'URW Bookman L', 'serif']
        },
        extend: {
            backgroundImage: {
                'bg-members': "url('../images/home2.png')"
            }
        },
        purge: ["./src/*.html"],
        rules: {
            "at-rule-no-unknown": [
                true,
                {
                    "ignoreAtRules": [
                        "tailwind",
                        "apply",
                        "responsive",
                        "variants",
                        "screen",
                        "use"
                    ]
                }
            ]
        }
    },

    variants: {
        extend: {},
    },
    plugins: [],
}