// Assuming the font files are served from the public directory or a similar accessible path in your web application

const FontStyles = () => ({
    interThin: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Thin.ttf') format('truetype')",
        fontWeight: 100,
    },
    interExtraLight: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-ExtraLight.ttf') format('truetype')",
        fontWeight: 200,
    },
    interLight: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Light.ttf') format('truetype')",
        fontWeight: 300,
    },
    interRegular: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Regular.ttf') format('truetype')",
        fontWeight: 400,
    },
    interMedium: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Medium.ttf') format('truetype')",
        fontWeight: 500,
    },
    interSemiBold: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-SemiBold.ttf') format('truetype')",
        fontWeight: 600,
    },
    interBold: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Bold.ttf') format('truetype')",
        fontWeight: 700,
    },
    interExtraBold: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-ExtraBold.ttf') format('truetype')",
        fontWeight: 800,
    },
    interBlack: {
        fontFamily: 'Inter',
        src: "url('./fonts/Inter-Black.ttf') format('truetype')",
        fontWeight: 900,
    },
});

export const fontStyles = FontStyles();
