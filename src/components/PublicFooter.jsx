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
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

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

                    <div style={styles.footerLeftFlexStyle}>
                        <div style={{display: "flex", gap: isMobileScreen ? 8 : isSmallScreen ? 12 : 16}}>

                            <div
                                style={{backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex',height: '42px', cursor: 'pointer'}}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span style={{ ...styles.simpleTextStyle, fontSize: isMobileScreen ? 16 : isSmallScreen ? 20 : 24, fontWeight: 700, color: `var(--text-color-highlight)`, cursor: 'pointer' }}>
                                    {(() => {
                                        const highlightedWord = getText('FOOTER', 'HIGHLIGHTED_WORD');
                                        const [before, after] = getText('FOOTER', 'CALL_TO_ACTION').split(highlightedWord);
                                        return (
                                            <>{before}<span style={{ color: colors.amber }}>{highlightedWord}</span>{after}</>
                                        );
                                    })()}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div style={styles.footerRightFlexStyle}>
                        <div style={styles.footerRightFlexStyle}>
   
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'EMAIL')}
                            </div>
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'HELP')}
                            </div>
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'FAQS')}
                            </div>
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'TERMS')}
                            </div>
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'PRIVACY')}
                            </div>

                        </div>
                    </div>

                    {/* <div style={{...styles.dividerStyle,  marginBottom: 0}}></div> */}

                    {/* Language and Theme Switch */}
                    <div style={styles.footerSMFlexStyle}>
                        <div style={styles.footerIconStyle}>
                            <LanguageSwitch />
                        </div>
                        <div style={styles.footerIconStyle}>
                            <ThemeSwitch />
                        </div>
                    </div>
                    
                    <div style={{height: isMobileScreen ? 12 : isSmallScreen ? 12 : 12}}></div>
                    {/* <div style={styles.dividerStyle}></div> */}

                    {/* Social Media Icons */}
                    <div style={styles.footerSMFlexStyle}>
                    <img src={theme === themes.light ? icons.icon_facebook_light:icons.icon_facebook_dark} alt={getText('FOOTER', 'ALT_FACEBOOK')} style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_instagram_light:icons.icon_instagram_dark} alt={getText('FOOTER', 'ALT_INSTAGRAM')} style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_linkedin_light:icons.icon_linkedin_dark} alt={getText('FOOTER', 'ALT_LINKEDIN')} style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_pinterest_light:icons.icon_pinterest_dark} alt={getText('FOOTER', 'ALT_PINTEREST')} style={styles.footerIconStyle} />
                    <img src={theme === themes.light ? icons.icon_youtube_light:icons.icon_youtube_dark} alt={getText('FOOTER', 'ALT_YOUTUBE')} style={styles.footerIconStyle} />
                    </div>
                {/* </div> */}
                

            </div>
        </div>
    );
}

export default PublicFooter;
