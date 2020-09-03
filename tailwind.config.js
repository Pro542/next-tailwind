const plugin = require('tailwindcss/plugin');

function firstOfTypeVariant({ addVariant, e }) {
    addVariant('firstOfType', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.${e(`firstOfType${separator}${className}`)}:first-of-type`;
        })
    })
}

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    plugins: [
        plugin(firstOfTypeVariant)
    ],
    variants: {
        margin: ['responsive', 'firstOfType'],
    },
}