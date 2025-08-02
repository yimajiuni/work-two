import localFont from 'next/font/local'

// Bodoni 72 Smallcaps for shop name
export const bodoni = localFont({
    src: [
        {
            path: './Bodoni 72 Smallcaps Book.ttf',
            weight: '400', // 'Book' weight maps to 400
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-bodoni',
})

// Finches for headings
export const finches = localFont({
    src: [
        {
            path: './Finches.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-finches',
})

// Century Gothic for buttons and UI elements
export const centuryGothic = localFont({
    src: [
        {
            path: './Century Gothic.ttf',
            weight: '300',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-century-gothic',
})

// Century Gothic Thin for lighter text
export const centuryGothicThin = localFont({
    src: [
        {
            path: './Century Gothic Thin.ttf',
            weight: '100',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-century-gothic-thin',
})

// Times New Roman - system font with italic support
export const timesNewRoman = {
    variable: '--font-times-new-roman',
    className: 'font-times-new-roman',
}

// Times New Roman Italic - system font
export const timesNewRomanItalic = {
    variable: '--font-times-new-roman-italic',
    className: 'font-times-new-roman-italic',
}

// Ming font for Japanese characters
export const ming = {
    variable: '--font-ming',
    className: 'font-ming',
} 