// src/pages/Index.jsx
// External landing page accessible to all users

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBanner from '../components/PublicBanner';
import PublicFooter from '../components/PublicFooter';
import CardArray from '../components/CardArray';
import Carousel from '../components/Carousel';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images';

const Index = () => {
    // Get language context
    const { getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    // Create cards data
    const cards = [
        { id: 1, title: 'Card 1', description: 'Description for card 1' },
        { id: 2, title: 'Card 2', description: 'Description for card 2' },
        { id: 3, title: 'Card 3', description: 'Description for card 3' },
        { id: 4, title: 'Card 4', description: 'Description for card 4' },
        { id: 5, title: 'Card 5', description: 'Description for card 5' },
        { id: 6, title: 'Card 6', description: 'Description for card 6' },
    ];

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    //Handle theme
    const { theme } = useTheme();
    
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
        
        <PublicBanner />

        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <div 
                        style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                            }}
                        >
                        <img
                            src={theme === themes.light ? logoImages.logo_yellow : logoImages.logo_yellow_inverted}
                            style={{
                                maxWidth: isMobileScreen ? '30%' : isSmallScreen ? "25" : "20%",
                                width: 'auto',
                                height: 'auto',
                            }}
                            className='logo'
                            alt='Logo'
                        />
                    </div>
                    
                    <div 
                        style={styles.htmlH2style}
                    >
                        Welcome to&nbsp;Discito
                    </div>

                    <div>
                        
                        <div 
                            style={styles.htmlPstyle}
                            >
                            Explore high-quality educational content and learn anything, anytime, anywhere.
                        </div>
                        <div
                            style={styles.htmlPstyle}
                        >
                            Whether you're a student, professional, or lifelong learner, enjoy resources and activities to expand your knowledge!
                        </div>
                    </div>

                    <div 
                        style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                            }}
                        >
                        <button
                            style={{
                              ...styles.normalButtonStyles,
                              marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                            }}
                              onClick={() => {
                                navigate('/login');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        > 
                        {/* Leads to Dashboard or Login */}
                        {/* {route === 'authenticated' ? 'Dashboard' : 'Login'} */}
                            Login
                        </button>
                    </div>

                    <div style={styles.dividerStyle}></div>

                    <div style={styles.simpleBarStyle}>

                    {/* First set */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: isMobileScreen ? 'column' : isSmallScreen ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>

                      <div style={{
                        backgroundColor: colors.white,
                        height: 'auto',
                        flex: isSmallScreen ? '1 0 100%' : '1 0 40%', // 40% of the space on larger screens
                        width: isSmallScreen ? '100%' : 'auto', // Ensure full width on small screens
                        // position: 'relative',
                        }}
                      >
                    
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <img
                            src={isSmallScreen ? images.Creativity017 : images.Vase007}
                            alt="discito_image_003"
                            style={{
                                maxWidth: '100%', // Makes sure the image is not bigger than its container
                                height: 'auto', // Keeps the aspect ratio of the image
                                alignItems: 'center',
                                borderRadius: isSmallScreen ? 6 : 9,
                                // Adjust as necessary to control the size of the image relative to the screen width
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div 
                        style={{
                            backgroundColor: colors.white,
                            height: 'auto',
                            flex: isSmallScreen ? '1 0 100%' : '1 0 60%', // 60% of the space on larger screens
                            width: isSmallScreen ? '100%' : 'auto', // Ensure full width on small screens
                            // position: 'relative',
                        }}
                    >

                    </div>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                    
                        <div 
                            style={styles.htmlH2style}
                        >
                            Empower Your&nbsp;Learning Journey: Anytime,&nbsp;Anywhere
                        </div>

                        <div style={styles.htmlPstyle}>
                            <div style={{marginBottom: 10}}>
                                Join a community dedicated to creating, sharing, and experiencing high-quality learning without limits.
                            </div>
                        
                            <div>
                                <button
                                  style={{
                                    ...styles.normalButtonStyles,
                                    marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                    marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                  }}  
                                  onClick={() => {
                                    navigate('/login');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  Start learning&nbsp;now
                                </button>
                            </div>
                        </div>

                    </div>

                    <div style={styles.dividerStyle}></div>

                    {/* <div style={styles.simpleBarStyle}></div> */}

                {/* Second set */}
                {/* <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>

                  <div style={{
                    display: isSmallScreen ? 'none' : 'flex', // Hide on small screens, show otherwise
                    backgroundColor: colors.white,
                    height: 'auto',
                    flex: isSmallScreen ? '1 0 100%' : '1 0 60%', // 40% of the space on larger screens
                    width: isSmallScreen ? '100%' : 'auto', // Ensure full width on small screens
                  }}>
                    <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                      <div style={{
                        ...styles.simpleTextStyle,
                        fontSize: isSmallScreen ? 18 : 24,
                        fontWeight: 700,
                        margin: 0,
                        padding: 0,
                        marginBotton: 10,
                      }}>
                        Revolutionizing&nbsp;Learning for&nbsp;Everyone
                      </div>

                      <div style={{ ...styles.simpleBarStyle, fontWeight: '400', marginTop: 10, marginbottom: 10, padding: 0}}>
                        <div style={{ marginBottom: 10 }}>Our vision and mission is to dismantle the barriers to education.</div>
                        <div style={{ marginBottom: 10 }}>With our innovative platform, we want bring high-quality learning content to your fingertips.</div>
                        <div style={{ marginBottom: 10 }}>Promoting practical experience and memory-making, our platform is more than just a learning tool.</div>
                      </div>

                      <div>
                        <button
                          style={styles.buttonStyleCore}
                          onClick={
                            () => {
                              navigate('/vision');
                            }
                          }
                        >
                          Find&nbsp;out more
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: colors.white,
                    height: 'auto',
                    flex: isSmallScreen ? '1 0 100%' : '1 0 40%', // 40% of the space on larger screens
                    width: isSmallScreen ? '100%' : 'auto', // Ensure full width on small screens
                    // position: 'relative',
                  }}>
                    <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                      <img
                        src={isSmallScreen ? staticImages.discito_image_002_small : staticImages.discito_image_002_large}
                        alt="discito_image_001"
                        style={{
                          maxWidth: '100%', // Makes sure the image is not bigger than its container
                          height: 'auto', // Keeps the aspect ratio of the image
                          alignItems: 'center',
                          borderRadius: isSmallScreen ? 6 : 9,
                          // Adjust as necessary to control the size of the image relative to the screen width
                        }}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: isSmallScreen ? 'flex' : 'none', // Show on small screens, hide otherwise
                    backgroundColor: colors.white,
                    height: 'auto',
                    flex: isSmallScreen ? '1 0 100%' : '1 0 50%', // 40% of the space on larger screens
                    width: isSmallScreen ? '100%' : 'auto', // Ensure full width on small screens
                    // position: 'relative',
                  }}>
                    <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                      <div style={{
                        ...styles.simpleTextStyle,
                        fontSize: isSmallScreen ? 18 : 24,
                        fontWeight: 700,
                        margin: 0,
                        padding: 0,
                        marginBotton: 10,
                      }}>
                        Revolutionizing&nbsp;Learning for&nbsp;Everyone
                      </div>

                      <div style={{ ...styles.simpleBarStyle, fontWeight: '400', marginTop: 10, marginbottom: 0, padding: 0, marginLeft: 20, marginRight: 20 }}>
                        <div style={{ marginBottom: 10 }}>Our vision and mission is to dismantle the barriers to education.</div>
                        <div style={{ marginBottom: 10 }}>With our innovative platform, we want bring high-quality learning content to your fingertips.</div>
                        <div style={{ marginBottom: 10 }}>Promoting practical experience and memory-making, our platform is more than just a learning tool.</div>
                      </div>

                      <div>
                        <button
                          style={styles.buttonStyleCore}
                          onClick={
                            () => {
                              navigate('/vision');
                            }
                          }
                        >
                          Find out more
                        </button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Add two more elements */}
                    {/* Showcase / Content */}
                    {/* Same component types as above */}
                    {/* Lists few examples of things that are already implemented... */}
                    {/* Will be importnat when we enable login from the street to see free content... */}

                    {/* Donations */}
                    {/* Same component types as above */}
                    {/* Shows QR code for donations and a story around this - why people should donate and what we are doing with the money... */}

                    {/*  */}

                    <div style={{ marginBottom: '40px' }}>
                        <Carousel cards={cards} />
                    </div>
                    
                    <CardArray cards={cards} />

                    </div>
                </div>
            </div>
        </main>

        <PublicFooter />

        </div>
    );
};

export default Index;
