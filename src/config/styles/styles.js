// Colors, styles etc.
import { colors } from './colors';

// const ComponentStyles = (isSmallScreen, isHovered, isDisabled) => {
const ComponentStyles = () => {

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

    };
};

export const styles = ComponentStyles;

