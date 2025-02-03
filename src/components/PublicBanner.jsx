// Colors, styles etc.
// import { colors } from 'components/styles/colors';
// import { componentStyles } from 'components/styles/component_styles';
// import { fontStyles } from 'components/styles/fonts/fonts';
// import { icons } from 'img/icons';
import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'

// Basic core functions
import React from 'react';

// Support functions
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../utilities/UseWindowSize'
import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../contexts/LanguageContext';

function PublicBanner() {

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Get language context
    const { currentLanguage, getText } = useLanguage();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;


    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);


    //Handle page width
    //t.b.d.
    const virtualFullWidthLocal = {
        ...virtualFullWidth,
        backgroundColor: `var(--header-bg)`
    }

    return (
        <div style={virtualFullWidthLocal}>
            <div style={availableWidth}>

                <div style={styles.bannerMainFlexStyle}>
                    <div style={styles.bannerLeftFlexStyle}>
                        <div style={styles.bannerTitleStyle}>
                            Learning
                        </div>
                        <div style={styles.bannerSubtitleStyle}>
                            {isMobileScreen ? 'anytime, anywhere' : isSmallScreen ? 'anytime, anywhere' : 'anything, anytime, anywhere'}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default PublicBanner;
