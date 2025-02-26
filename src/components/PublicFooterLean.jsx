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

function PublicFooterLean() {

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
   
                        <div 
                                style={styles.footerTextStyle}
                                onClick={() => {
                                    navigate('/contactform');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}    
                            >
                                {getText('FOOTER', 'EMAIL')}
                            </div>

                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'HELP')}
                            </div>
                            
                            <div style={styles.footerTextStyle}>
                                {getText('FOOTER', 'FAQS')}
                            </div>
                            
                            <div 
                                style={styles.footerTextStyle}
                                onClick={() => {
                                    navigate('/termsconditions');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {getText('FOOTER', 'TERMS')}
                            </div>
                            
                            <div 
                                style={styles.footerTextStyle}
                                onClick={() => {
                                    navigate('/privacypolicy');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {getText('FOOTER', 'PRIVACY')}
                            </div>

                        </div>
                    </div>

            </div>
        </div>
    );
}

export default PublicFooterLean;
