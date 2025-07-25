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
            fontSize: isMobileScreen ? '12px' : isSmallScreen ? '14px' : '14px',
            lineHeight: 1.5,
        },
        buttonS: {
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: isMobileScreen ? '10px' : isSmallScreen ? '12px' : '12px',
            lineHeight: 1.5,
        },
        footer: {
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: isMobileScreen ? '8px' : isSmallScreen ? '10px' : '10px',
            lineHeight: 1.2,
        },    };

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
            display: 'flex',
            flexDirection: isMobileScreen ? 'column' : isSmallScreen ? 'column' : 'row',
            justifyContent: isMobileScreen ? 'flex-start' : isSmallScreen ? 'flex-start' :'space-around',
            position: 'absolute',
            bottom: '100%',  // Position above instead of below
            right: 0,
            top: 'auto',     // Remove top positioning
            marginBottom: 8,  // Add some spacing above the icon
            backgroundColor: 'var(--background-color-2)',
            border: 'none',
            borderRadius: '0px',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            zIndex: 1000,
            minWidth: isMobileScreen ? 100 : isSmallScreen ? 120 : 360
        },

        languageSwitchListStyle:
        {
            ...typography.buttonS,
            display: 'flex',
            alignItems: 'center',
            padding: isMobileScreen ? '4px 6px' : isSmallScreen ? '6px 8px' : '8px 10px',
            cursor: 'pointer',
            //backgroundColor: currentLanguage === lang ? 'var(--hover-color)' : 'transparent',
            color: 'var(--text-color-normal)',
            gap: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,

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
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 14 : 14,
            transition: 'all 0.3s ease',
            boxShadow: isHover && !isDisabled ? '2px 2px 2px rgba(0,0,0,0.3)' : 'none',
            transform: isHover && !isDisabled ? 'scale(1.02)' : 'scale(1)',
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
            transition: 'all 0.3s ease',
            boxShadow: isHover && !isDisabled ? '0 4px 4px rgba(0,0,0,0.3)' : 'none',
            transform: isHover && !isDisabled ? 'scale(1.04)' : 'scale(1)',            
        },

        // Card style basic
        normalCardStyles:
        {            
            ...typography.button,
            textAlign: 'center',
            // color: colors.light,
            cursor: 'pointer',
            backgroundColor: isDisabled ? colors.gray6 : isHover ? 'var(--card-bg)' : 'var(--card-bg)',
            borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 6,
            border: `3px solid ${'var(--card-bg)'}`,
            padding: isMobileScreen ? '3px 12px' : isSmallScreen ? '3px 14px' : '4px 16px',
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 14 : 14,
            transition: 'all 0.3s ease',
            boxShadow: isHover && !isDisabled ? '2px 2px 4px rgba(0,0,0,0.3)' : 'none',
            transform: isHover && !isDisabled ? 'scale(1.04)' : 'scale(1)',
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
            flexDirection: isMobileScreen ? 'column' : isSmallScreen ? "column" : "column",
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
            // justifyContent: 'flex-start',
            //alignItems: 'flex-start',
            alignItems: isMobileScreen ? 'center' : isSmallScreen ? "center" : "left",

            position: 'relative',
            // top: '50%',
            backgroundColor: 'transparent',
        },
        
        footerRightFlexStyle:
        {
            display: 'flex',
            flexDirection: isMobileScreen ? 'column' :isSmallScreen ? 'column' : 'row',
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
            fontSize: isMobileScreen ? 10 :isSmallScreen ? 12 : 12,
            fontWeight: 400,
            margin: 0,
            cursor: 'pointer',
        },
        
        // Basic divider style
        dividerStyle:
        {
            height: '1px',
            backgroundColor: colors.gray6,
            // marginRight: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
            // marginLeft: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
            marginTop: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
            marginBottom: isMobileScreen ? 14 : isSmallScreen ? 16 : 18,
        },
                
        dividerDarkStyle:
        {
            height: '1px',
            backgroundColor: colors.gray4,
            marginRight: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
            marginLeft: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
            marginTop: isMobileScreen ? 8 : isSmallScreen ? 10 : 14,
            marginBottom: isMobileScreen ? 8 : isSmallScreen ? 10 : 14,
        },
                
        dashboardDividerStyle:
        {
            height: '1px',
            backgroundColor: colors.gray6,
            marginRight: isMobileScreen ? 10 : isSmallScreen ? 14 : 18,
            marginLeft: isMobileScreen ? 10 : isSmallScreen ? 14 : 18,
            marginTop: isMobileScreen ? 10 : isSmallScreen ? 14 : 18,
            marginBottom: isMobileScreen ? 10 : isSmallScreen ? 14 : 18,
        },

        htmlH1style:
        {
            // same as captionLabelStyle
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 14 : 18,
            fontWeight: 700,
            textAlign: 'center',
            backgroundColor: 'var(--card-bg)',
            padding: isMobileScreen ? 12 : isSmallScreen ? 14 : 18,
            borderRadius: isMobileScreen ? 12 : isSmallScreen ? 6 : 9,
            marginTop: isMobileScreen ? 12 : isSmallScreen ? 14 : 18,
            marginBottom: isMobileScreen ? 12 : isSmallScreen ? 14 : 18,
        },

        htmlH2style:
        {
            // ...this.simpleBarStyle,
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 14 : 18,
            fontWeight: 700,
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'center',
            padding: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
            marginTop: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
            marginBottom: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
        },

        htmlH3style:
        {
            // ...this.simpleBarStyle,
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 13 : 16,
            fontWeight: 700,
            fontStyle: 'italic',
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'center',
            padding: isSmallScreen ? 4 : 6,
            marginTop: isSmallScreen ? 4 : 6,
            marginBottom: isSmallScreen ? 4 : 6,
        },

        htmlPstyle:
        {
            fontSize: isMobileScreen ? 12 : isSmallScreen ? 12 : 14,
            fontWeight: 400,
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'center',
            padding: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
            margin: '0',
        },

        htmlULstyle:
        {
            fontSize: isMobileScreen ? 11 : isSmallScreen ? 12 : 14,
            fontWeight: 400,
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'left',
            padding: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
            margin: '0',
        },

        htmlLIstyle:
        {
            fontSize: isMobileScreen ? 11 : isSmallScreen ? 12 : 14,
            fontWeight: 400,
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'left',
            padding: isMobileScreen ? 4 : isSmallScreen ? 4 : 6,
            margin: '0',
            listStylePosition: 'inside'
        },

        htmlFTstyle:
        {
            fontSize: isMobileScreen ? 9 : isSmallScreen ? 10 : 12,
            fontWeight: 400,
            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'center' : 'left',
            padding: isMobileScreen ? 3 : isSmallScreen ? 3 : 4,
            margin: '0',
            listStylePosition: 'inside'
        }

    };
};

export const componentStyles = ComponentStyles;
