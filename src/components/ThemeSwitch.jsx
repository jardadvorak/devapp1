import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { icons } from '../img/icons';
import { themes } from '../config/styles/themes';
import { componentStyles } from '../config/styles/styles';

import {useWindowSize} from '../utilities/UseWindowSize'
import { screenWidthSettings } from '../config/styles/page_width';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    return (
        <button
            onClick={toggleTheme}
            style={styles.iconButtonStyle}
            title={theme === themes.light ? "Switch to dark mode" : "Switch to light mode"}
        >
            <img 
                src={theme === themes.light ? icons.icon_moon_fill : icons.icon_sun_fill}
                alt={theme === themes.light ? "Switch to dark mode" : "Switch to light mode"}
                style={{ width: '100%', height: '100%' }}
            />
        </button>
    );
};

export default ThemeSwitch;

