// Colors, styles etc.
import { colors } from 'components/styles/colors';

// const ComponentStyles = (isSmallScreen, isHovered, isDisabled) => {
const ComponentStyles = () => {

    return {

        navbarStyles:
        {
            backgroundColor: colors.gray1,
            color: colors.light,
            // padding: isSmallScreen ? '8px 12px 8px' : '12px 18px 12px',
            padding: '12px 18px 12px',
            margin: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

    };
};

export const styles = ComponentStyles;

