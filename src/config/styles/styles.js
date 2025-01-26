// Colors, styles etc.
import { colors } from './colors';

// const ComponentStyles = (isSmallScreen, isHovered, isDisabled) => {
const ComponentStyles = (isMobileScreen, isSmallScreen, isHovered, isDisabled) => {

    return {

        navbarStyles:
        {
            backgroundColor: 'green',
            color: 'red',
            // padding: isSmallScreen ? '8px 12px 8px' : '12px 18px 12px',
            padding: '12px 18px 12px',
            margin: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            innerWidth : '100%',
            innerHeight : '100px',
        },

        // Button style basic
        testButtonStyles:
        {            
            textAlign: 'center', // Align text to the left
            fontSize: isMobileScreen ? 14 : isSmallScreen ? 16 : 18,            
            color: colors.light,
            cursor: 'pointer',
            // marginLeft: isSmallScreen ? 14 : 18,
            // marginRight: isSmallScreen ? 14 : 18,
            // marginTop: isSmallScreen ? 10 : 14,
            // marginBottom: isSmallScreen ? 10 : 14,
            // padding: isSmallScreen ? '4px 18px' : '6px 24px',            
            backgroundColor: isMobileScreen ? colors.primary : isSmallScreen ? colors.amber : colors.green1,
            borderRadius: 100, //needs to be big enough to look like a pill...
            border: `3px solid ${colors.primary}`,
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

