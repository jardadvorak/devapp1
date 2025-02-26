// src/pages/VisionMission.jsx
// External VisionMission page

import React from 'react';
import { Link } from 'react-router-dom';
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

const VisionMission = () => {
    // Get language context
    const { getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    // Create cards data
    // const cards = [
    //     { id: 1, title: 'Card 1', description: 'Description for card 1' },
    //     { id: 2, title: 'Card 2', description: 'Description for card 2' },
    //     { id: 3, title: 'Card 3', description: 'Description for card 3' },
    //     { id: 4, title: 'Card 4', description: 'Description for card 4' },
    //     { id: 5, title: 'Card 5', description: 'Description for card 5' },
    //     { id: 6, title: 'Card 6', description: 'Description for card 6' },
    // ];

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

                    <Link to="/">
                        <h1 className="text-3xl mb-8">{getText('HEADINGS', 'WELCOME')}</h1>
                    </Link>

                </div>
            </div>
        </main>

        <PublicFooterLean />

        </div>
    );
};

export default VisionMission;
