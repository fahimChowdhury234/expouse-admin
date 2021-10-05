
let fontobj = {};
let obj = {};
let objdouble = {};
let objFive = {}

for (let i = 0; i < 51; i++) {
    let rem = (i / 10).toFixed(1);
    obj[i] = rem + 'rem';
}



for (let i = 300; i > 50 && i < 301; i--) {
  if(i%2 === 0){
 let rem = (i / 10).toFixed(1);
    objdouble[i] = rem + 'rem';
  }
   
}
for (let i = 700; i > 300 && i < 701; i--) {
  if(i%5 === 0){
 let rem = (i / 10).toFixed(1);
    objFive[i] = rem + 'rem';
  }
   
}


for (let i = 0; i < 61; i++) {
    let rem = (i / 10).toFixed(1);
    fontobj[i] = rem + 'rem';
}
module.exports = {
    purge: {
        enabled: true,
        content: ['./*.html'],
      },
    
    prefix: '',
    important: true,
    separator: ':',
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl : "1280px"
           
        },
        colors: {
            capcod : "rgb(58, 62, 66)",
            transparent: 'transparent',
            current: 'currentColor',
            greaywhite : "rgb(238, 239, 239)",
            white: '#fff',
            brand : "rgb(100, 82, 231)",
            stromgreay : "rgb(113, 117, 132)",
            black: '#000',
        },
        spacing: {
            px: '1px',
            ...obj,
            ...objdouble,
            ...objFive
        },
        backgroundColor: (theme) => theme('colors'),
        backgroundOpacity: (theme) => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor'),
        }),
        borderOpacity: (theme) => theme('opacity'),
        borderRadius: {
            full : "50%",
           ...fontobj
        },
        borderWidth: {
            ...fontobj
        },
    
        container: false,
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
     
        fill: {
            current: 'currentColor',
        },
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            0: '0',
            default: '1',
        },
        flexShrink: {
            0: '0',
            default: '1',
        },
        fontFamily: {
  
            PTserif : ['PT Serif'],
        },
        fontSize: {
            ...fontobj,
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
      
            full: '100%',
            screen: '100vh',
        }),
        inset: {
            0: '0',
            auto: 'auto',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        maxWidth: (theme, { breakpoints }) => ({
            none: 'none',
            ...obj,
            ...objdouble,
            ...objFive,
            full: '100%',
            ...breakpoints(theme('screens')),
        }),
        minHeight: {
            0: '0',
            ...obj,
            ...objdouble,
            ...objFive,
            full: '100%',
            screen: '100vh',
        },
        minWidth: {
            0: '0',
            full: '100%',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        
        padding: (theme) => theme('spacing'),
        placeholderColor: (theme) => theme('colors'),
        placeholderOpacity: (theme) => theme('opacity'),
        stroke: {
            current: 'currentColor',
        },
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2',
        },
        textColor: (theme) => theme('colors'),
        textOpacity: (theme) => theme('opacity'),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            '20/20': "20%",
            full: '100%',
            screen: '100vw',
        }),
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
        },
        gap: (theme) => theme('spacing'),
        gridTemplateColumns: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
        gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
        },


        gridTemplateRows: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
        },
     

    
        transitionProperty: {
            none: 'none',
            all: 'all',
            default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
            colors: 'background-color, border-color, color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform',
        },
        transitionTimingFunction: {
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        transitionDuration: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
        transitionDelay: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
    },
    variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundOpacity: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderOpacity: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        boxSizing: ['responsive'],
        container: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        divideColor: ['responsive'],
        divideOpacity: ['responsive'],
        divideWidth: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        clear: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'hover', 'focus'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        placeholderColor: ['responsive', 'focus'],
        placeholderOpacity: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        space: ['responsive'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textOpacity: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
        gap: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnStart: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridTemplateRows: ['responsive'],
        gridRow: ['responsive'],
        gridRowStart: ['responsive'],
        gridRowEnd: ['responsive'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        scale: ['responsive', 'hover', 'focus'],
        rotate: ['responsive', 'hover', 'focus'],
        translate: ['responsive', 'hover', 'focus'],
        skew: ['responsive', 'hover', 'focus'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        transitionDuration: ['responsive'],
        transitionDelay: ['responsive'],
    },
    corePlugins: {},
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
        ]
};
