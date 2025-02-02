// Colors, styles etc.
import { colors } from './colors';
import './fonts.css';

// const ComponentStyles = (isSmallScreen, isHovered, isDisabled) => {
const ComponentStyles = (isMobileScreen, isSmallScreen, isHovered, isDisabled) => {
    // Typography styles
    const typography = {
        h1: {
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: isMobileScreen ? '24px' : isSmallScreen ? '32px' : '40px',
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: isMobileScreen ? '20px' : isSmallScreen ? '28px' : '32px',
            lineHeight: 1.3,
        },
        h3: {
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: isMobileScreen ? '18px' : isSmallScreen ? '24px' : '28px',
            lineHeight: 1.4,
        },
        body1: {
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: isMobileScreen ? '14px' : isSmallScreen ? '16px' : '18px',
            lineHeight: 1.5,
        },
        body2: {
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: isMobileScreen ? '12px' : isSmallScreen ? '14px' : '16px',
            lineHeight: 1.5,
        },
        button: {
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: isMobileScreen ? '14px' : isSmallScreen ? '16px' : '18px',
            lineHeight: 1.5,
        },
    };

    return {
        typography,

        navbarStyles:
        {
            ...typography.body1,
            backgroundColor: 'green',
            color: 'red',
            padding: '12px 18px 12px',
            margin: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            innerWidth: '100%',
            innerHeight: '100px',
        },

        // Button style basic
        testButtonStyles:
        {            
            ...typography.button,
            textAlign: 'center',
            color: colors.light,
            cursor: 'pointer',
            backgroundColor: isMobileScreen ? colors.primary : isSmallScreen ? colors.amber : colors.green1,
            borderRadius: 100, //needs to be big enough to look like a pill...
            border: `3px solid ${colors.primary}`,
            padding: '8px 24px',
        },

        // Div for icon sizes to manage reponsivenes
        iconDivSizeStyle:
        {            
            height: isMobileScreen ? 28 : isSmallScreen ? 32 : 36,            
            width: isMobileScreen ? 28 : isSmallScreen ? 32 : 36,            
        }
    };
};

export const componentStyles = ComponentStyles;
