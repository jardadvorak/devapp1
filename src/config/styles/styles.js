// Colors, styles etc.
import { colors } from './colors';
import './fonts.css';

// const ComponentStyles = (isSmallScreen, isHovered, isDisabled) => {
const ComponentStyles = (isMobileScreen, isSmallScreen, isHover, isDisabled) => {
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

        navbarNavStyles:
        {
            ...typography.body1,
            color: 'var(--text-color-normal)',
            backgroundColor: 'var(--navbar-bg)',
            width: '100%',
            minWidth: '320px',
            padding: '0px',
            margin: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            innerWidth: '100%',
            innerHeight: '100px',
        },

        navbarDivStyles:
        {
            ...typography.body1,
            display: 'flex',
            alignItems: 'center',
            width: 'min(1440px, 100%)',
            margin: '0 auto',
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
            innerWidth: '100%',
            innerHeight: '100px',
        },

        navbarFlexStyles:
        {
            display: 'flex',
            alignItems: 'center',
            gap: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
            margin: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
            padding: 0
        },

        // LanguageSwitch
        languageSwitchBoxstyle:
        {
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 8,
            backgroundColor: 'var(--background-color-2)',
            border: 'none',
            borderRadius: '0px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: isMobileScreen ? 120 : isSmallScreen ? 140 : 160,
        },

        languageSwitchListStyle:
        {
            display: 'flex',
            alignItems: 'center',
            padding: isMobileScreen ? '4px 12px' : isSmallScreen ? '6px 14px' : '8px 16px',
            cursor: 'pointer',
            //backgroundColor: currentLanguage === lang ? 'var(--hover-color)' : 'transparent',
            color: 'var(--text-color-normal)',
            gap: isMobileScreen ? 6 : isSmallScreen ? 8 : 10
        },

        // Button style basic
        normalButtonStyles:
        {            
            ...typography.button,
            textAlign: 'center',
            // color: colors.light,
            cursor: 'pointer',
            backgroundColor: isDisabled ? colors.gray6 : isHover ? colors.primary : colors.primary,
            borderRadius: 100, //needs to be big enough to look like a pill...
            border: `3px solid ${colors.primary}`,
            padding: isMobileScreen ? '3px 12px' : isSmallScreen ? '3px 14px' : '4px 16px',
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
            transition: 'all 0.3s ease',
            boxShadow: isHover && !isDisabled ? '0 4px 4px rgba(0,0,0,0.3)' : 'none',
            transform: isHover && !isDisabled ? 'scale(1.04)' : 'scale(1)',
        },

        // Icon button style
        iconButtonStyle:
       {            
            ...typography.button,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobileScreen ? 32 : isSmallScreen ? 34 : 36,
            height: isMobileScreen ? 32 : isSmallScreen ? 34 : 36,
            cursor: isDisabled ? 'normal' : 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
            transition: 'all 0.3s ease'
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
            backgroundColor: 'transparent',
        },
        
        bannerLeftFlexStyle:
        {
            width : '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobileScreen ? 10 :isSmallScreen ? 14 : 18,
            padding: 0,
            justifyContent: 'flex-start',
            alignItems: isMobileScreen ? 'center' : 'flex-start',
            position: 'relative',
            backgroundColor: 'transparent',
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
            fontSize: isMobileScreen ? 32 :isSmallScreen ? 40 : 48,
            fontWeight: 700,
            textAlign: isMobileScreen ? 'center' : 'left',
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
            textAlign: isMobileScreen ? 'center' : 'left',
            color: `var(--text-color-highlight)`,
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
            backgroundColor: 'transparent',
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
            backgroundColor: 'transparent',
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
            color: `var(--text-color-normal)`,
            fontSize: isMobileScreen ? 12 :isSmallScreen ? 14 : 16,
            fontWeight: 400,
            margin: 0,
            cursor: 'pointer',
        }
        
    };
};

export const componentStyles = ComponentStyles;
