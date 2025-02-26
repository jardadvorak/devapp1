import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import PublicBannerLean from '../components/PublicBannerLean.jsx';
import PublicFooterLean from '../components/PublicFooterLean.jsx';

import DiscitoTC_cz from '../assets/discitoTC_CZ.jsx';
import DiscitoTC_en from '../assets/discitoTC_EN.jsx';
import DiscitoTC_de from '../assets/discitoTC_DE.jsx';

import { useWindowSize } from '../utilities/UseWindowSize.jsx';
import { virtualFullWidth, availableWidth, screenWidthSettings } from '../config/styles/page_width.js';
import { componentStyles } from '../config/styles/styles.js';

const TermsConditions = () => {
    const { currentLanguage, getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    // Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    const availableHeight = `calc(100vh - ${
        // Top navigation
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner
        (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
        // Footer
        (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
    }px)`;

    // Render content based on language
    const renderContent = () => {
        switch (currentLanguage) {
            case 'cz':
                return <DiscitoTC_cz />;
            case 'de':
                return <DiscitoTC_de />;
            default:
                return <DiscitoTC_en />;
        }
    };

    return (
        <div style={{
            minHeight: `calc(100vh - ${isMobileScreen ? 56 : isSmallScreen ? 64 : 72}px)`,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <PublicBannerLean />

            <main style={{ flexGrow: 1 }}>
                <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                    <div style={{
                        ...availableWidth,
                        minHeight: availableHeight,
                        backgroundColor: 'transparent',
                        color: `var(--text-color-normal)`,
                        padding: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
                    }}>
                        {/* <h1 style={styles.htmlH1style}>{getText('FOOTER', 'TERMS')}</h1> */}
                        {renderContent()}
                    </div>
                </div>
            </main>

            <PublicFooterLean />
        </div>
    );
};

export default TermsConditions;
