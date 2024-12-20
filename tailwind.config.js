
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        'bg-transparent',
        'visibleBlock',
        'primary-menu-container',
        'current-menu-item'
    ],
    content: [
        "./src/main.css",
        "./template-parts/**/*.php",
        "./index.php",
        "./header.php",
        "./footer.php",
        "./404.php"
    ],
    theme: {
        fontSize: {
            "10px": "0.6rem", //10px
            "11px": "0.688rem", //11px
            "12px": ".75rem", //12px
            "13px": "0.813rem", //13px
            "14px": ".875rem", //14px
            "16px": "1rem", //16px
            "18px": "1.125rem", //18px
            "20px": "1.25rem", //20px
            "21px": "1.313rem", //21px
            "22px": "1.375rem", //22px
            "24px": '1,5rem', //24px
            "28px": "1.75rem", //28px
            "36px": "2.25rem", //36px
            "42px": "2.625rem", //42px
            "48px": "3rem", //48px
            "64px": "4rem",
            "80px": "5rem"
        },
        colors: {
            lightscale: {
                5: '#cccdd4',
                10: '#E1E8FB',
                15: '#f0f3fd',
                20: '#ffffff',
                40: '#f4f4f4',
                60: '#E0E0E0',
                70: '#fbfbfd',
                80: '#f8f8f8',
                90: '#c6c6c6',
                95: "#dfdfdf",
                100: "#f0f0f0",

            },
            bluescale: {
                60: "#007aff",
                70: "#043CDC",
                80: "#00288c",
                100: "#003366",

            },
            darkscale: {
                40: "#6f6f6f",
                60: "#52556d",
                70: "#676767",
                80: "#041e42", //rgba(4, 30, 66, 1);
                100: "#000528",
                110: "#393939",
                120: "#101622",
            },
            redscale: {
                40: "#ED1C1A",
                50: "#EE1C23",
                60: "#ed1c24",
                70: "#C83539"
            }
        },
        fontFamily: {
            TV: ["TV Sans Screen", "sans-serif"],
            Source: ["Source Sans Pro", "sans-serif"]
        },
        extend: {
            backgroundImage: {
                'blue-gradient': 'linear-gradient(90deg, rgb(1, 156, 225) 0%, rgb(0, 40, 140) 100%)',
                'black-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.6))',
                'shadow-gradient': 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8))',
                'blue-gradient-transparent': 'linear-gradient(270deg, rgba(1, 156, 225, .85) 0%, rgba(0, 40, 140, .85) 100%)',
                'blue-gradient-transparent-solid': 'linear-gradient(270deg, rgba(1, 156, 225, 1) 0%, rgba(0, 40, 140, 1) 100%)',
                'blue-gradient-weather': 'linear-gradient(90deg, #000a50, #00288c)',
                'dropdown-arrow': "url('/wp-content/themes/ct22-theme/assets/icons/dropdown-arrow.png')"
            },
            boxShadow: {
                'box-shadow': '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 12px 24px -8px rgba(0, 0, 0, 0.15)',
            },
            // 414px, 522px (velikosti nadpisu náhledu článků), 767px, 992px (změna velikostí fotek), 1024px, 1200px
            screens: {
                '414': '414px',
                '427': '427px',
                '480': '480px',
                '522': '522px',
                '544': '544px',
                '576': '576px',
                '610': '610px',
                '640': '640px',
                '767': '767px',
                '800': '800px',
                '992': '992px',
                '1024': '1024px',
                '1184': '1184px',
                '1200': '1200px',
                '1232': '1232px',
                '1400': '1400px'
            },
            backgroundColor: {
                ...colors,
                'shadow-black': 'rgba(0, 0, 0, .25);',
                'shadow-dark': 'rgba(0, 0, 0, 0.3);',
                'shadow-light': 'rgba(255, 255, 255, 0.08);',
                'gray-solid': 'rgba(244, 244, 244, 1);',
                'gray-dark': 'rgba(255, 255, 255, 0.33);',
                'gray-light': 'rgba(240, 243, 253, 1);'
            },
            borderColor: {
                'white-transparent': 'rgba(255, 255, 255, 0.2)',
                'black-transparent': 'rgba(0, 0, 0, 0.2)',
            },
            colors: {
                ...colors,
                'navigator-green': "#228900",
                'uv-green': "#00A052"
            },
            gridTemplateColumns: {
                '2-auto': 'repeat(2, auto)',
            },
            gridTemplateRows: {
                '6-auto': 'repeat(6, auto)',
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        function({ addUtilities }) {
            addUtilities({
                '.transition-custom': {
                    transition: 'transform 10ms cubic-bezier(0, 0, 0.3, 1) 300ms, visibility 200ms cubic-bezier(0, 0, 0.3, 1), opacity 200ms cubic-bezier(0, 0, 0.3, 1)',
                },
                '.transition-background': {
                    transition: 'background .2s linear;'
                },
                '.transition-tags-hover': {
                    transition: 'all .25s ease-in-out;'
                }
            });
        },
    ],
}
