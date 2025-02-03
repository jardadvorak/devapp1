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

    // Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    //Handle page width
    const virtualFullWidthLocal = {
        ...virtualFullWidth,
        backgroundColor: `var(--footer-bg)`
    }

    //Handle redirections
    // const navigate = useNavigate();

    return (
        <div style={virtualFullWidthLocal}>
            <div style={availableWidth}>

                <div style={styles.footerMainFlexStyle}>         
                    <div style={styles.footerLeftFlexStyle}>
                        <div style={{display: "flex", gap: isMobileScreen ? 8 : isSmallScreen ? 12 : 16}}>
                            {/* <div 
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
                            </div>          */}
                            <div
                                style={{backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex',height: '42px', cursor: 'pointer'}}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span style={{ ...styles.simpleTextStyle, fontSize: isMobileScreen ? 16 : isSmallScreen ? 20 : 24, fontWeight: 700, color: `var(--text-color-highlight)`, cursor: 'pointer' }}>
                                    Ready to <span style={{ color: colors.amber }}>learn</span>?
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.footerRightFlexStyle}>
                        <div style={styles.footerRightFlexStyle}>
   
                            <div style={styles.footerTextStyle}>
                                info@discito.cz
                            </div>
                            <div style={styles.footerTextStyle}>
                                Help
                            </div>
                            <div style={styles.footerTextStyle}>
                                FAQs
                            </div>
                            <div style={styles.footerTextStyle}>
                                Terms of use
                            </div>
                            <div style={styles.footerTextStyle}>
                                Privacy policy
                            </div>

                        </div>
                    </div>
                </div>
                
                {/* Social Media Icons */}
                <div 
                    style={styles.footerSMFlexStyle}
                >
                    <img src={theme === themes.light ? icons.icon_facebook_light:icons.icon_facebook_dark} alt="Facebook" style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_instagram_light:icons.icon_instagram_dark} alt="Instagram" style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_linkedin_light:icons.icon_linkedin_dark} alt="LinkedIn" style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_pinterest_light:icons.icon_pinterest_dark} alt="Pinterest" style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_youtube_light:icons.icon_youtube_dark} alt="YouTube" style={styles.footerIconStyle} />
                </div>
            </div>
        </div>
    );
}

export default PublicFooter;
