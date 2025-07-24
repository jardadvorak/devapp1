// src/pages/SignUp.jsx
// Sign Up page with AWS Amplify authentication and language support
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Authenticator, useAuthenticator, CheckboxField } from '@aws-amplify/ui-react';

import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import { czAuthDict } from '../config/languages/authentication/cz'

// Add Amplify UI translations
I18n.putVocabularies(translations);

// Add Czech vocabulary
I18n.putVocabulariesForLanguage('cz', czAuthDict);

import '@aws-amplify/ui-react/styles.css'; // Important: Add this import

import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
//import { useLanguage } from '../contexts/LanguageContext';
import PublicBanner from '../components/PublicBanner';
import PublicFooter from '../components/PublicFooter';
import Button from '../components/Button';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import LanguageSwitch from '../components/LanguageSwitch';

import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images';


const SignUp = () => {
    // Hooks for navigation and accessing route state
    const navigate = useNavigate();
    
    const location = useLocation();
    
    // Get language context and functions
    const { setCurrentLanguage, getText, currentLanguage } = useLanguage();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    
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

    // Effect to set language based on navigation state
    // Effect to set language based on navigation state and update I18n vocabulary
    useEffect(() => {
        // Get language from navigation state, or fall back to the current language context
        const language = location.state?.language;
        if (language && language !== currentLanguage) {
            // Update the app's language context if the navigation state has a different language
            setCurrentLanguage(language);
        } else {
            // Directly update I18n if the navigation state has no language, or is the same as currentLanguage
            const vocab = UI_TEXT[currentLanguage];
            if (vocab) {
                I18n.putVocabularies(vocab);
                I18n.setLanguage(currentLanguage);
            }
        }
    }, [location, currentLanguage, setCurrentLanguage]);

    // Handler for back button - returns to landing page
    const handleBack = () => {
        navigate(ROUTES.INDEX, {
            state: { language: currentLanguage }
        });
    };

    return (
        <div style={{minHeight: `calc(100vh - ${isMobileScreen ? 56 : isSmallScreen ? 64 : 72}px)`, display: 'flex', flexDirection: 'column'}}>
        
         {/* <PublicBanner /> */}
        
        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        
            
            {/* Language switch in top-right corner */}
            {/* Do not use it on the signup page */}
            {/* <div className="absolute top-4 right-4">
                <LanguageSwitch />
            </div> */}
            
            {/* Back button in top-left corner */}
            {/* <div className="absolute top-4 left-4">
                <Button onClick={handleBack}>
                    {getText('BUTTONS', 'BACK')}
                </Button>
            </div> */}

            {/* <h1 className="text-3xl mb-8">{getText('HEADINGS', 'LOGIN')}</h1> */}
            
             {/* Sign Up page configuration */}
             {/* Use the hideSignIn for signup */}

             {/* https://ui.docs.amplify.aws/react/connected-components/authenticator/configuration */}
             {/* Use email for signup as the default option... */}
             {/* No additional signup attributes - everything else will be handled inside the app... */}
             {/* No social providers at this point... */}
             {/* Variation is default, not modal... */}

             <Authenticator
                    initialState={location.state?.mode || 'signUp'}
                    hideSignIn={true}
                    components={{
                        Header() {
                            return null; // Remove default header
                        },
                        SignUp: {
                            FormFields() {
                                const { validationErrors } = useAuthenticator();

                                return (
                                  <>
                                    {/* Re-use default `Authenticator.SignUp.FormFields` */}
                                    <Authenticator.SignUp.FormFields />

                                    {/* Append & require Terms and Conditions field to sign up  */}
                                    <CheckboxField
                                      errorMessage={validationErrors.acknowledgement}
                                      hasError={!!validationErrors.acknowledgement}
                                      name="acknowledgement"
                                      value="yes"
                                      label={
                                        <span>
                                          {getText('AUTH', 'Terms Agreement')}{' '}
                                          <button
                                            type="button"
                                            style={{
                                              background: 'none',
                                              border: 'none',
                                              color: 'var(--accent-color)',
                                              textDecoration: 'underline',
                                              cursor: 'pointer',
                                              fontSize: 'inherit',
                                              fontFamily: 'inherit',
                                              padding: 0,
                                            }}
                                            onClick={() => {
                                              navigate('/termsconditions', {
                                                state: { 
                                                  language: currentLanguage,
                                                  returnTo: '/signup'
                                                }
                                              });
                                            }}
                                          >
                                            {getText('AUTH', 'Terms Link')}
                                          </button>
                                          {getText('AUTH', 'Privacy Connector')}{' '}
                                          <button
                                            type="button"
                                            style={{
                                              background: 'none',
                                              border: 'none',
                                              color: 'var(--accent-color)',
                                              textDecoration: 'underline',
                                              cursor: 'pointer',
                                              fontSize: 'inherit',
                                              fontFamily: 'inherit',
                                              padding: 0,
                                            }}
                                            onClick={() => {
                                              navigate('/privacypolicy', {
                                                state: { 
                                                  language: currentLanguage,
                                                  returnTo: '/signup'
                                                }
                                              });
                                            }}
                                          >
                                            {getText('AUTH', 'Privacy Link')}
                                          </button>
                                        </span>
                                      }
                                    />
                                  </>
                                );
                            },
                        },
                    }}
                    services={{
                        i18n: {
                            getTranslation: (key) => getText('AUTH', key) || key,
                        }
                    }}
                >
                    {({ user }) => {
                        if (user) {
                            navigate(ROUTES.DASHBOARD, {
                                state: { language: currentLanguage }
                            });
                        }
                        return null;
                    }}
                </Authenticator>

                {/* Link to Sign In page */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: isMobileScreen ? 16 : isSmallScreen ? 20 : 24,
                    marginBottom: isMobileScreen ? 16 : isSmallScreen ? 20 : 24,
                }}>
                    <div style={styles.htmlPstyle}>
                        {getText('AUTH', 'Have an account?')}{' '}
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--accent-color)',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: 'inherit',
                                fontFamily: 'inherit',
                                padding: 0,
                            }}
                            onClick={() => {
                                navigate(ROUTES.LOGIN, {
                                    state: { language: currentLanguage }
                                });
                            }}
                        >
                            {getText('AUTH', 'Sign in')}
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </main>
    
        <PublicFooter />
        
        </div>

);
};

export default SignUp;
