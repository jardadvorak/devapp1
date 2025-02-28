import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images';

const ExpandableBox = (props) => {
    
    // Get language context
    const { getText } = useLanguage();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    // State for hover effects
    const [hoveredElement, setHoveredElement] = useState(null);
    
    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);
    
    //Handle theme
    const { theme } = useTheme();
        
    const availableHeight = `calc(100vh - ${
        // Top navigation
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner
        (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
        // Footer
        (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
    }px)`;

    const { title, data, setUserInput } = props;

    // Extract data for each issue
    const sentence = data

    // Image definitions
    const icon_down = theme === themes.dark ? 
        '../src/img/icons/icon-dm-chevron-double-down.svg' : '../src/img/icons/icon-lm-chevron-double-down.svg';
    const icon_up = theme === themes.dark ? 
        '../src/img/icons/icon-dm-chevron-double-up.svg' : '../src/img/icons/icon-lm-chevron-double-up.svg';

    // Control the hovering effect
    const [isHovered, setIsHovered] = useState(false);

    // Control clicking on the bar
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    // Styles
    const containerStyle = {
        position: 'relative',
        marginTop: isSmallScreen ? 0 : 0,
        marginBottom: isSmallScreen ? 4 : 6,
        padding: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
        backgroundColor: isHovered ? `var(--background-color-2)` : `var(--background-color-1)`,
        marginLeft: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
        marginRight: isSmallScreen ? 12 : 18,
        borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
    };

    const mainBlockStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobileScreen ? 8 : isSmallScreen ? 10 : 12
    }

    const textWordStyle = {
        textAlign: 'left',
        fontSize: isSmallScreen ? 18 : 24,
        fontWeight: 700,
        marginLeft: isSmallScreen ? 9 : 12,
        marginRight: isSmallScreen ? 36 : 50,
        marginTop: isSmallScreen ? 2 : 3,
        marginBottom: isSmallScreen ? 2 : 3,
    };

    const detailTextStyle = {
        textAlign: 'left',
        fontWeight: 400,
        fontSize: isSmallScreen ? 14 : 18,
        margin: 0,
    }
    
    const detailTextStyleLine = {
        textAlign: 'left',
        fontSize: isSmallScreen ? 14 : 18,
        marginLeft: isSmallScreen ? 9 : 12,
        marginRight: isSmallScreen ? 36 : 50,
        marginTop: isSmallScreen ? 6 : 9,
        marginBottom: isSmallScreen ? 6 : 9,
    }
    const iconAreaStyle = {
        display: 'flex',
        alignItems: 'center',
        marginRight: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
    }
    const iconStyle = {
        cursor: 'pointer',
        marginRight: 0,
        maxWidth: isMobileScreen ? 20 : isSmallScreen ? 24 : 28,
        maxHeight: isMobileScreen ? 20 : isSmallScreen ? 24 : 28,
    };


    return (
        <div
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div style={mainBlockStyle}>
                <div style={{...styles.htmlH3style, textAlign: 'left'}}>
                    {title}
                </div>
                <div style={iconAreaStyle}>
                    <img
                        src={isInfoVisible ? icon_up : icon_down}
                        alt="INFO"
                        style={iconStyle}
                        onClick={() => setIsInfoVisible(!isInfoVisible)} />
                </div>
            </div>

            {isInfoVisible && (
                <div>
                    <div style={{...styles.htmlPstyle, textAlign: 'left'}}>
                        {sentence}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ExpandableBox;
