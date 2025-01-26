// Colors, styles etc.
import { colors } from 'components/styles/colors';
import { componentStyles } from 'components/styles/component_styles';
import { fontStyles } from 'components/styles/fonts/fonts';
import { icons } from 'img/icons';
import idioms from 'locales/idioms_static';

// Basic core functions
import React from 'react';

// Support functions
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../utilities/UseWindowSize'
import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

//Update pictures to square ones with right size...
// const icon_email = require('img/icons/icon_email.png');
// const icon_help = require('img/icons/help_component.png');

function PublicFooter() {

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Get language context
    const { currentLanguage, getText } = useLanguage();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    // Responsiveness
    // const windowSize = useWindowSize(); // Call the hook here to get updated window size
    // const isSmallScreen = windowSize.width <= 768;

    // Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);
    // Styles
    // const styles = componentStyles(isSmallScreen); // requires isSmallScreen loaded

    //Handle page width
    const virtualFullWidthLocal = {
        ...virtualFullWidth,
        backgroundColor: colors.gray2,
        position: 'relative',
        top: isSmallScreen ? 10 : 0,  // in conjunction with App.css, .app, min-height
    }

    //Handle redirections
    // const navigate = useNavigate();

    return (
        <div style={virtualFullWidthLocal}>
            <div style={availableWidth}>

                <div>         
                    <div>
                        <div>
                            <div>
                                Ready to learn?
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                info@discito.cz
                            </div>
                        </div>
                        <div>
                            <div>
                                Help
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicFooter;
