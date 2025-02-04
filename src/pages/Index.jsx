// src/pages/Index.jsx
// External landing page accessible to all users

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBanner from '../components/PublicBanner';
import PublicFooter from '../components/PublicFooter';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'

const Index = () => {
    // Get language context
    const { getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    const availableHeight = `calc(100vh - ${
        // Top navigation 56 : 64 : 72
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner 68 : 88 : 116
        (isMobileScreen ? 88 : isSmallScreen ? 114 : 144) +
        // Footer 76 : 82 : 80:
        (isMobileScreen ? 260 : isSmallScreen ? 160 : 134)
    }px)`;

    // Set-up top bar
    //useNavigationConfig(
    //    route === 'authenticated' ? user.username : '', '', settings.leftButtons, settings.rightButtons);

    return (
        <div style={{minHeight: `calc(100vh - ${
            // Top navigation
            (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
            // Banner
            (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
            // Footer
            (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
        }px)`, display: 'flex', flexDirection: 'column'}}>
        
        <PublicBanner />

        <main style={{ flexGrow: 1 }}>
                <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, height: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <h1 className="text-3xl mb-8">{getText('HEADINGS', 'WELCOME')}</h1>

                </div>
            </div>
        </main>

        <PublicFooter />

        </div>
    );
};

export default Index;
