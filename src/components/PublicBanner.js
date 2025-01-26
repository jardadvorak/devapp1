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
import { useWindowSize } from '../utilities/UseWindowSize'
import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import LanguageSwitch from '../components/LanguageSwitch';

// const logo = require('img/icons/homepage_title_image_right_aligned.png');

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
    //Responsiveness
    // const windowSize = useWindowSize();
    // const isSmallScreen = windowSize.width <= 768;

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);
    //Styles
    // const styles = componentStyles(isSmallScreen); // requires isSmallScreen loaded

    //Handle page width
    //t.b.d.
    const virtualFullWidthLocal = {
        ...virtualFullWidth,
        backgroundColor: colors.gray2
    }

    return (
        <div style={virtualFullWidthLocal}>
            <div style={availableWidth}>

                <div>
                    <div>
                        <div>
                        <p>Learning</p>
                        <p>anytime, anywhere</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default PublicBanner;