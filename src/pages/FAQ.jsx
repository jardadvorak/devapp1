// src/pages/FAQ.jsx
// External FAQ page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBannerLean from '../components/PublicBannerLean';
import PublicFooterLean from '../components/PublicFooterLean';
import CardArray from '../components/CardArray';
import Carousel from '../components/Carousel';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images'

import texts_FAQ from '../config/texts_FAQ';
import ExpandableList from '../components/ExpandableList';

const FAQ = () => {
    // Get language context
    const { currentLanguage } = useLanguage();
    const currentTexts = texts_FAQ[currentLanguage];
    const faq_issues = currentTexts.faq_issues;

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    const availableHeight = `calc(100vh - ${
        // Top navigation
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner
        (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
        // Footer
        (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
    }px)`;

    // Set-up top bar
    //useNavigationConfig(
    //    route === 'authenticated' ? user.username : '', '', settings.leftButtons, settings.rightButtons);

    return (
        <div style={{minHeight: `calc(100vh - ${isMobileScreen ? 56 : isSmallScreen ? 64 : 72}px)`, display: 'flex', flexDirection: 'column'}}>
        
        <PublicBannerLean />

        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <div style={{
                        ...styles.mainDivStyle, 
                        width: isMobileScreen ? '90%' : isSmallScreen ? '75%' : '60%',
                        margin: '0 auto'
                    }}>
            
                        <div style={styles.htmlH1style}>
                            {currentTexts.faq_title}
                        </div>

                        <div style={styles.simpleBarStyle}>
                            <div>
                                {Object.keys(faq_issues).map((issueKey) => {
                                    const issue = faq_issues[issueKey];
                                    return (
                                        <ExpandableList key={issueKey} issueKey={issueKey} issue={issue} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <PublicFooterLean />

        </div>
    );
};

export default FAQ;
