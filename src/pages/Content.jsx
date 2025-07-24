// src/pages/Content.jsx
// External Content page

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBannerLean from '../components/PublicBannerLean';
import PublicFooterLean from '../components/PublicFooterLean';
import PublicBanner from '../components/PublicBanner';
import PublicFooter from '../components/PublicFooter';
import CardArray from '../components/CardArray';
import CardArrayImage from '../components/CardArrayImage';
import Carousel from '../components/Carousel';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images'

const Content = () => {
    // Get language context
    const { getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    // Create cards data
    const cards = [
        { id: 1, title: 'English', description: 'Description for English', image: images.Book004, enabled: 'true', visible: 'true' },
        { id: 2, title: 'Czech', description: 'Description for Czech', image: images.Searching004, enabled: 'true', visible: 'true'  },
        { id: 3, title: 'German', description: 'Description for German', image: images.Elearning007, enabled: 'true', visible: 'true', Enabled: false  },
        { id: 4, title: 'Spanish', description: 'Description for Spanish', image: images.Reading013, enabled: 'true', visible: 'true'  },
        { id: 5, title: 'French', description: 'Description for French', image: images.School001, enabled: 'true', visible: 'true', Enabled: false },
        { id: 6, title: 'Mathematics', description: 'Description for Mathematics', image: images.Mathematics003, enabled: 'true', visible: 'true'  },
        { id: 7, title: 'Physics', description: 'Description for Physics', image: images.Physics001, enabled: 'true', visible: 'true'  },
        { id: 8, title: 'Geography', description: 'Description for Geography', image: images.Geography005, enabled: 'true', visible: 'true'  },
        { id: 9, title: 'History', description: 'Description for History', image: images.Vase007, enabled: 'true', visible: 'true'  },
        { id: 10, title: 'Biology', description: 'Description for Biology', image: images.Science005, enabled: 'true', visible: 'true'  },
        { id: 11, title: 'Chemistry', description: 'Description for Chemistry', image: images.School006, enabled: 'true', visible: 'true'  },
        { id: 12, title: 'Various', description: 'Description for Various', image: images.Creativity017, enabled: 'true', visible: 'true'  },
    ];

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
        <PublicBanner />

        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <div>
                        Content
                    </div>

                    <CardArrayImage cards={cards} />

                    {/* <div style={styles.mainDivStyle}>
                            <div style={styles.simpleBarStyle}>

                                <div style={{ ...styles.simpleBarStyle, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%" }}>
                                    <div style={{...styles.htmlH1style, width: "100%"}}>
                                        {getText('VISIONMISSION', 'TITLE')}
                                    </div>
                                </div>

                                <div style={{ ...styles.htmlH2style, color: colors.amber }}>
                                    {getText('VISIONMISSION', 'VISION_TITLE')}
                                </div>

                                <div style={{...styles.htmlPstyle, fontWeight: "700"}}>
                                    {getText('VISIONMISSION', 'VISION_STATEMENT')}
                                </div>

                                <div style={styles.htmlPstyle}>
                                    {getText('VISIONMISSION', 'VISION_DESCRIPTION')}
                                </div>

                                <div style={{
                                    ...styles.htmlPstyle, // Spreads your existing styles
                                    display: 'flex', // Enables Flexbox
                                    justifyContent: 'center', // Centers children horizontally
                                    alignItems: 'center', // Adjust this if you want vertical centering as well
                                    height: '100%', // Adjust based on your needs, could be 100vh for full viewport height
                                    paddingTop: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
                                    paddingBottom: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
                                    paddingRight: '0',
                                    paddingLeft: '0',

                                }}>
                                    <img
                                        src={images.Creativity017}
                                        alt="Our mission"
                                        style={{
                                            maxWidth: isMobileScreen ? '30%' : isSmallScreen ? "25" : "20%", // Makes sure the image is not bigger than its container
                                            width: 'auto',
                                            height: 'auto', // Keeps the aspect ratio of the image
                                        }}
                                    />
                                </div>

                                <div style={styles.dividerStyle}></div>

                                <div style={{ ...styles.htmlH2style, color: colors.primary }}>
                                    {getText('VISIONMISSION', 'MISSION_TITLE')}
                                </div>

                                <div style={{...styles.htmlPstyle, fontWeight: "700"}}>
                                    {getText('VISIONMISSION', 'MISSION_STATEMENT')}
                                </div>

                                <div style={styles.htmlPstyle}>
                                    {getText('VISIONMISSION', 'MISSION_DESCRIPTION_1')}
                                </div>

                                <div style={styles.htmlPstyle}>
                                    {getText('VISIONMISSION', 'MISSION_DESCRIPTION_2')}
                                </div>

                                <div style={{
                                    ...styles.htmlPstyle, // Spreads your existing styles
                                    display: 'flex', // Enables Flexbox
                                    justifyContent: 'center', // Centers children horizontally
                                    alignItems: 'center', // Adjust this if you want vertical centering as well
                                    height: '100%', // Adjust based on your needs, could be 100vh for full viewport height
                                    paddingTop: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
                                    paddingBottom: isMobileScreen ? 12 : isSmallScreen ? 14 : 16,
                                    paddingRight: '0',
                                    paddingLeft: '0',

                                }}>
                                    <img
                                        src={images.School001}
                                        alt="Our mission"
                                        style={{
                                            maxWidth: isMobileScreen ? '30%' : isSmallScreen ? "25" : "20%", // Makes sure the image is not bigger than its container
                                            width: 'auto',
                                            height: 'auto', // Keeps the aspect ratio of the image
                                        }}
                                    />
                                </div>

                            </div>
                        </div> */}

                </div>
            </div>
        </main>

        {/* <PublicFooterLean /> */}

        <PublicFooter />

        </div>
    );
};

export default Content;
