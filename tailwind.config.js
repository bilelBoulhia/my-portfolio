
module.exports = {
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(-150%) translateY(0)' },
                    '100%': { transform: 'translateX(0) translateY(0)' },
                },
            },
            animation: {
                slideIn: 'slideIn 0.5s ease-out forwards',
            },
        },
    },
}
