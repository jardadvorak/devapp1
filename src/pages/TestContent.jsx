// src/pages/TestContent.jsx
// Static TestContent page

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBannerLean from '../components/PublicBanner';
import PublicFooterLean from '../components/PublicFooter';
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

const TestContent = () => {
    // Get language context
    const { getText } = useLanguage();
    
    // Navigation hook
    const navigate = useNavigate();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    // Create cards data
    const staticcontentcards = [
         { id: 1, title: 'Zeměpis', description: 'Hlavní města Evropa', exerciseType: 'european-capitals' },
    ];

    // Handle card click navigation
    const handleCardClick = (card) => {
        if (card.exerciseType) {
            navigate(`/exercise/${card.exerciseType}`);
        }
    };

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
        
        {/* <PublicBannerLean /> */}

        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <div style={styles.mainDivStyle}>
                            <div style={styles.simpleBarStyle}>

                                <CardArray cards={staticcontentcards} onCardClick={handleCardClick} />

                            </div>
                        </div>

                </div>
            </div>
        </main>

        <PublicFooterLean />

        </div>
    );
};

export default TestContent;
