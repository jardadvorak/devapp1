// src/pages/Index.jsx
// External landing page accessible to all users
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import LanguageSwitch from '../components/LanguageSwitch';

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import styles from '../config/styles/styles';

const Index = () => {
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Get language context
    const { currentLanguage, getText } = useLanguage();

    // Handler for login button - navigates to login page in sign-in mode
    const handleLogin = () => {
        navigate(ROUTES.LOGIN, { 
            state: { 
                mode: AUTH_MODES.SIGN_IN,
                language: currentLanguage 
            }
        });
    };

    // Handler for signup button - navigates to login page in sign-up mode
    const handleSignup = () => {
        navigate(ROUTES.LOGIN, { 
            state: { 
                mode: AUTH_MODES.SIGN_UP,
                language: currentLanguage 
            }
        });
    };
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
        <div style={{backgroundColor: 'red'}}>
        <main>
        <div style={{...virtualFullWidth, backgroundColor: 'white'}}>
        <div style={{...availableWidth, backgroundColor: 'orange', color: 'red'}}>        {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
        {/* Language switch in top-right corner */}
            <div style={{backgroundColor: 'black', width: '100%'}}>
                <LanguageSwitch />
            </div>

            <h1 className="text-3xl mb-8">{getText('HEADINGS', 'WELCOME')}</h1>
            
            <div style={{backgroundColor: 'black', width: '100%'}}>
                <Button onClick={handleLogin}>{getText('BUTTONS', 'LOGIN')}</Button>
                <Button onClick={handleSignup}>{getText('BUTTONS', 'SIGNUP')}</Button>
            </div>

            <div>
                  <button style={buttonStyleCore}>
                    Test button
                  </button>
     
            </div>

        </div>
        </div>
        </main>
        </div>
    );
};

export default Index;