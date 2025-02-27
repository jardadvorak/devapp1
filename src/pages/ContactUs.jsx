// src/pages/ContatUs.jsx
// External ContatForm page

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBannerLean from '../components/PublicBanner';
import PublicFooterLean from '../components/PublicFooter';
import CardArray from '../components/CardArray';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images'

const ContatForm = () => {
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

                    <div
                    style={styles.htmlPstyle}
                    >
                        Contact Form
                        Do you have a question? Can we help you?
                        Get in touch!
                        Name
                        Email
                        Your message
                        Submit message
                        * By submitting this message, you agree to the processing of your data.
                        Thank you!
                    </div>

                    <ContactForm/>

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

        <PublicFooterLean />

        </div>
    );
};

export default ContatForm;