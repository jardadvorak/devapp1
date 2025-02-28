// src/pages/Index.jsx
// External landing page accessible to all users

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images';

const Index = () => {
    const navigate = useNavigate();
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

    // State for hover effects
    const [hoveredElement, setHoveredElement] = useState(null);

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

                    {/* <div 
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
                    </div> */}
                    
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
                              ...componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'main-login', false).normalButtonStyles,
                              marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                            }}
                            onMouseEnter={() => setHoveredElement('main-login')}
                            onMouseLeave={() => setHoveredElement(null)}
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

                    {/* <div style={styles.dividerStyle}></div> */}

                    <div style={styles.simpleBarStyle}>
                    
                    {/* First set */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: isMobileScreen ? 'column' : 'row',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'var(--background-color-2)'
                      }}
                    >
                      {/* Image Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 40%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 1 : isSmallScreen ? 1 : 1
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <img
                            src={images.Creativity017}
                            alt="Empower_your_learning_journey"
                            style={{
                              maxWidth: isMobileScreen ? '30%' : isSmallScreen ? '70%' : '40%',
                              height: 'auto',
                              margin: '0 auto',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 60%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 2 : isSmallScreen ? 2 : 2
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <div style={styles.htmlH2style}>
                            Empower Your&nbsp;Learning Journey: Anytime,&nbsp;Anywhere
                          </div>
                          <div style={styles.htmlPstyle}>
                            Join a community dedicated to creating, sharing, and experiencing high-quality learning without limits.
                          </div>
                          <div style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                          }}>
                            <button
                              style={{
                                ...componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'start-learning', false).normalButtonStyles,
                                marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              }}
                              onMouseEnter={() => setHoveredElement('start-learning')}
                              onMouseLeave={() => setHoveredElement(null)}
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
                    </div>

                    {/* <div style={styles.dividerStyle}></div> */}

                    {/* Second set */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: isMobileScreen ? 'column' : 'row',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'var(--background-color-1)'
                      }}
                    >
                      {/* Content Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 60%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 2 : isSmallScreen ? 1 : 1
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <div style={styles.htmlH2style}>
                            Revolutionizing&nbsp;Learning for&nbsp;Everyone
                          </div>
                          <div>
                            <div style={styles.htmlPstyle}>Our vision and mission is to dismantle the barriers to education.</div>
                            <div style={styles.htmlPstyle}>With our innovative platform, we want bring high-quality learning content to your fingertips.</div>
                            <div style={styles.htmlPstyle}>Promoting practical experience and memory-making, our platform is more than just a learning tool.</div>
                          </div>
                          <div style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                          }}>
                            <button
                              style={{
                                ...componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'find-out-more', false).normalButtonStyles,
                                marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              }}
                              onMouseEnter={() => setHoveredElement('find-out-more')}
                              onMouseLeave={() => setHoveredElement(null)}
                              onClick={() => {
                                navigate('/visionmission');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              Find&nbsp;out more
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 40%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 1 : isSmallScreen ? 1 : 2
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <img
                            src={images.Searching004}
                            alt="Vision and mission"
                            style={{
                              maxWidth: isMobileScreen ? '30%' : isSmallScreen ? '70%' : '40%',
                              height: 'auto',
                              margin: '0 auto',
                              display: 'block',
                              borderRadius: isSmallScreen ? 6 : 9
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End of second set */}

                    {/* <div style={styles.dividerStyle}></div> */}

                    {/* Third set */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: isMobileScreen ? 'column' : 'row',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'var(--background-color-2)'
                      }}
                    >
                      {/* Image Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 40%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 1 : isSmallScreen ? 1 : 1
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <img
                            src={images.School006}
                            alt="Empower_your_learning_journey"
                            style={{
                              maxWidth: isMobileScreen ? '30%' : isSmallScreen ? '70%' : '40%',
                              height: 'auto',
                              margin: '0 auto',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 60%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 2 : isSmallScreen ? 2 : 2
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <div style={styles.htmlH2style}>
                            Explore, Use and Create Content without Limits
                          </div>
                          <div>
                            <div style={styles.htmlPstyle}>Choose from wide variety of subjects and exercise types and tailor the experience to your needs.</div>
                            <div style={styles.htmlPstyle}>Work online or on paper, slowly or intensively, go broad or go deep - all based on your preferences.</div>
                            <div style={styles.htmlPstyle}>Create your own content, assign tasks and track your progress and see comparison with your peers.</div>
                          </div>
                          <div style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                          }}>
                            <button
                              style={{
                                ...componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'start-learning', false).normalButtonStyles,
                                marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              }}
                              onMouseEnter={() => setHoveredElement('start-learning')}
                              onMouseLeave={() => setHoveredElement(null)}
                              onClick={() => {
                                navigate('/content');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              Explore content
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of the third set */}

                    {/* Fourth set */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: isMobileScreen ? 'column' : 'row',
                      justifyContent: 'center', 
                      alignItems: 'center',
                      backgroundColor: 'var(--background-color-1)'
                    }}>
                      {/* Content Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 60%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 2 : isSmallScreen ? 1 : 1
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <div style={styles.htmlH2style}>
                            Get Most out of Your Learning with Discito! 
                          </div>
                          <div>
                            <div style={styles.htmlPstyle}>Use for free forever with basic free plan - or leverage benefits of supervised learning in premium subscription plans.</div>
                            <div style={styles.htmlPstyle}>Explore our subscription plans to choose the best option for you or your group - just start by signing up for the platform and get first-hand experience.</div>
                          </div>
                          <div style={{
                            ...styles.simpleBarStyle, 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                            marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                          }}>
                            <button
                              style={{
                                ...componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'find-out-more', false).normalButtonStyles,
                                marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                                marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                              }}
                              onMouseEnter={() => setHoveredElement('find-out-more')}
                              onMouseLeave={() => setHoveredElement(null)}
                              onClick={() => {
                                navigate('/pricing');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              Explore options
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div style={{
                        height: 'auto',
                        flex: isMobileScreen ? '1 0 100%' : '1 0 40%',
                        width: isMobileScreen ? '100%' : 'auto',
                        order: isMobileScreen ? 1 : isSmallScreen ? 1 : 2
                      }}>
                        <div style={{ ...styles.simpleBarStyle, marginRight: '24', marginLeft: '24' }}>
                          <img
                            src={images.Elearning007}
                            alt="Vision and mission"
                            style={{
                              maxWidth: isMobileScreen ? '30%' : isSmallScreen ? '70%' : '40%',
                              height: 'auto',
                              margin: '0 auto',
                              display: 'block',
                              borderRadius: isSmallScreen ? 6 : 9
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End of fourth set */}

                    {/* Do not remove these notes */}
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
