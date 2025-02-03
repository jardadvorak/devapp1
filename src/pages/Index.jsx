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

    // Set-up top bar
    //useNavigationConfig(
    //    route === 'authenticated' ? user.username : '', '', settings.leftButtons, settings.rightButtons);

    // TO BE ADDED   
    // Use the useLayoutEffect hook to scroll to the top after the component is rendered
    //useScrollToTop();

    // TO BE ADDED   
    // Responsiveness
    //const windowSize = useWindowSize();
    //const isSmallScreen = windowSize.width <= 768;

    // TO BE ADDED   
    //Styles
    //const colors = colors;
    //const styles = componentStyles(isSmallScreen);
    //const paragraphs = paragraphStyles(isSmallScreen);

    // TO BE ADDED   
    //Images
    //const images = staticImages;

    // Button style basic
    const buttonStyleCore =
           {
                textAlign: 'center', // Align text to the left
                // fontSize: isSmallScreen ? 14 : 18,
                color: colors.light,
                cursor: 'pointer',
                // marginLeft: isSmallScreen ? 14 : 18,
                // marginRight: isSmallScreen ? 14 : 18,
                // marginTop: isSmallScreen ? 10 : 14,
                // marginBottom: isSmallScreen ? 10 : 14,
                // padding: isSmallScreen ? '4px 18px' : '6px 24px',
                backgroundColor: colors.primary,
                borderRadius: 100, //needs to be big enough to look like a pill...
                border: `3px solid ${colors.primary}`,
            }

    return (
        <div style={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
        
        <PublicBanner />

        <main style={{ flexGrow: 1 }}>
        <div style={{...virtualFullWidth, backgroundColor: 'white'}}>
        <div style={{...availableWidth, backgroundColor: 'orange', color: 'red'}}>        
        {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
        {/* Language switch in top-right corner */}

            <h1 className="text-3xl mb-8">{getText('HEADINGS', 'WELCOME')}</h1>
            
            <div>
               <p>Current screen width: {windowSize.width}px</p>
               <p>mobileScreenMaxWidth: {screenWidthSettings.mobileScreenMaxWidth}px</p>
               <p>smallScreenMaxWidth: {screenWidthSettings.smallScreenMaxWidth}px</p>
            </div>
            
            <div 
            style={{
                display: 'flex', 
                backgroundColor: 'white', 
                justifyContent:'center',
                gap: `${isMobileScreen ? 10 : isSmallScreen ? 30 : 50}px`
                }}
            >
                  <button style={buttonStyleCore}>Test button</button>
                  <button style={buttonStyleCore}>Test button</button>
                  <button style={buttonStyleCore}>Test button</button>
            </div>

            <div 
            style={{
                display: 'flex', 
                backgroundColor: 'white', 
                justifyContent:'center',
                gap: `${isMobileScreen ? 10 : isSmallScreen ? 30 : 50}px`
                }}
            >
                  <button style={styles.testButtonStyles}>Test button</button>
                  <button style={styles.testButtonStyles}>Test button</button>
                  <button style={styles.testButtonStyles}>Test button</button>
            </div>
            {/* <div>
                <img src={logoImages.logo_light} alignItems='center' margin='0px' padding='0px' />
            </div>
            <div>
                <img src={logoImages.logo_light} alignItems='center' margin='0px' padding='0px' />
            </div> */}
        </div>
        </div>
        </main>

        <PublicFooter />

        </div>
    );
};

export default Index;
