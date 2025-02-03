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
        },

        //Banner styles

        bannerMainFlexStyle:
        {
            display: 'flex',
            flexDirection: 'row',
            gap: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
            padding: isMobileScreen ? 0 : isSmallScreen ? 0 : 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: colors.gray2,
        },
        
        bannerLeftFlexStyle:
        {
            display: 'flex',
            flexDirection: 'column',
            gap: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
            padding: 0,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            backgroundColor: colors.gray2,
        },
        
        bannerImageStyle:
        {
            maxHeight: isMobileScreen ? 64 :isSmallScreen ? 72 : 96,
            maxWidth: isMobileScreen ? 64 :isSmallScreen ? 72 : 96,
            width: 'auto',
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
            marginBottom: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
        },
        
        bannerTitleStyle:
        {
            fontSize: isMobileScreen ? 28 :isSmallScreen ? 36 : 48,
            fontWeight: 700,
            textAlign: 'left',
            color: colors.amber,
            padding: 0,
            marginTop: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
            marginBottom: 0,
            display: 'block',
            position: 'relative',
            lineHeight: 1,
        },
        
        bannerSubtitleStyle:
        {
            fontSize: isMobileScreen ? 20 :isSmallScreen ? 24 : 32,
            fontWeight: 700,
            textAlign: 'left',
            color: colors.white,
            padding: 0,
            marginTop: 0,
            marginBottom: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
            display: 'block',
            position: 'relative',
            lineHeight: 1,
        },
        
        //Footer styles
        
        footerMainFlexStyle:
        {
            display: 'flex',
            flexDirection: isMobileScreen ? 'column' : isSmallScreen ? "column" : "row",
            gap: isMobileScreen ? 0 :isSmallScreen ? 0 : 0,
            padding: isMobileScreen ? 0 :isSmallScreen ? 0 : 0,
            justifyContent: 'space-between',
            alignItems: isMobileScreen ? 'left' : isSmallScreen ? "left" : "center",
            position: 'relative',
            backgroundColor: colors.gray2,
        },
        
        footerLeftFlexStyle:
        {
            display: 'flex',
            flexDirection: 'column',
            gap: isMobileScreen ? 8 :isSmallScreen ? 12 : 16,
            padding: 0,
            textAlign: 'left',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            // top: '50%',
            backgroundColor: colors.gray2,
        },
        
        footerRightFlexStyle:
        {
            display: 'flex',
            flexDirection: isMobileScreen ? 'column' :isSmallScreen ? 'row' : 'row',
            gap: isMobileScreen ? 8 :isSmallScreen ? 12 : 16,
            padding: 0,
            justifyContent: isMobileScreen ? 'center' :isSmallScreen ? 'center' : 'right',
            alignItems: isMobileScreen ? 'center' :isSmallScreen ? 'center' : 'flex-start',
        },

        footerSMFlexStyle:
        {
            display: 'flex',
            flexDirection: isMobileScreen ? 'row' :isSmallScreen ? 'row' : 'row',
            gap: isMobileScreen ? 8 :isSmallScreen ? 12 : 16,
            marginTop: isMobileScreen ? 16 :isSmallScreen ? 18 : 12,
            padding: 0,
            justifyContent: isMobileScreen ? 'center' :isSmallScreen ? 'center' : 'right',
            alignItems: isMobileScreen ? 'center' :isSmallScreen ? 'center' : 'flex-start',
        },

        footerIconStyle:
        {
            height: isMobileScreen ? 18 :isSmallScreen ? 22 : 26,
            width: isMobileScreen ? 18 :isSmallScreen ? 22 : 26,
            cursor: 'pointer'
        },
        
        footerTextStyle:
        {
            color: colors.white,
            fontSize: isMobileScreen ? 12 :isSmallScreen ? 14 : 16,
            fontWeight: 400,
            margin: 0,
            cursor: 'pointer',
        }
        
    };
};

export const componentStyles = ComponentStyles;
