// Colors, styles etc.
import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos';
import { icons } from '../img/icons';

// Basic core functions
import React from 'react';

// Support functions
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../utilities/UseWindowSize'
import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';

//Update pictures to square ones with right size...
// const icon_email = require('img/icons/icon_email.png');
// const icon_help = require('img/icons/help_component.png');

import { useLanguage } from '../contexts/LanguageContext';

function PublicFooter() {

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Get language context
    const { currentLanguage, getText } = useLanguage();
    const { theme } = useTheme();
    
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
        backgroundColor: colors.gray2
    }

    //Handle redirections
    // const navigate = useNavigate();

    return (
        <div style={virtualFullWidthLocal}>
            <div style={availableWidth}>

                <div>         
                    <div>
                        <div style={{display: "flex"}}>
                            <div 
                                style={{color: 'black', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex',height: '42px', cursor: 'pointer'}}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <img 
                                    src={theme === themes.light ? logoImages.logo_light : logoImages.logo_light_inverted} 
                                    style={{
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                    alt="Logo"
                                />
                            </div>         
                            <div
                                style={{backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex',height: '42px', cursor: 'pointer'}}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Ready to learn?
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                info@discito.cz
                            </div>
                            <div>
                                Help
                            </div>
                            <div>
                                FAQs
                            </div>
                            <div>
                                Terms of use
                            </div>
                            <div>
                                Privacy policy
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Social Media Icons */}
                <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '20px',
                        marginTop: '20px',
                        marginBottom: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <img src={icons.icon_facebook} alt="Facebook" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                    <img src={icons.icon_instagram} alt="Instagram" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                    <img src={icons.icon_linkedin} alt="LinkedIn" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                    <img src={icons.icon_pinterest} alt="Pinterest" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                    <img src={icons.icon_youtube} alt="YouTube" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
}

export default PublicFooter;
