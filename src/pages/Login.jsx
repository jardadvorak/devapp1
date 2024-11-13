// src/pages/Login.jsx
// Authentication page with AWS Amplify authentication and language support
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import { czAuthDict } from '../config/languages/authentication/cz'

// Add Amplify UI translations
I18n.putVocabularies(translations);

// Add Czech vocabulary
I18n.putVocabulariesForLanguage('cz', czAuthDict);

import '@aws-amplify/ui-react/styles.css'; // Important: Add this import

import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import LanguageSwitch from '../components/LanguageSwitch';

const Login = () => {
    // Hooks for navigation and accessing route state
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get language context and functions
    const { setCurrentLanguage, getText, currentLanguage } = useLanguage();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

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

    // // Get language from navigation state or use current language
    // useEffect(() => {
    //     const language = location.state?.language;
    //     if (language) {
    //         setCurrentLanguage(language);
    //     }
    // }, [location, setCurrentLanguage]);

    // // Effect to update I18n vocabulary when language changes
    // useEffect(() => {
    //     const language = UI_TEXT[currentLanguage]; // Assuming UI_TEXT contains translations per language
    //     if (language) {
    //         I18n.putVocabularies(language);
    //         I18n.setLanguage(currentLanguage);
    //     }
    // }, [location, currentLanguage]);

    // Original version...
    // seEffect(() => {     
    //     const vocab = UI_TEXT[currentLanguage]; // Assuming UI_TEXT contains translations per language
    //     if (vocab) {
    //         I18n.putVocabularies(vocab);
    //         I18n.setLanguage(currentLanguage);
    //     }
    // }, [currentLanguage]);

    // Redirect to dashboard if already authenticated
    // useEffect(() => {
    //     if (authStatus === 'authenticated') {
    //         navigate(ROUTES.DASHBOARD, {
    //             state: { language: currentLanguage }
    //         });
    //     }
    // }, [authStatus, navigate, currentLanguage]);

    // Handler for back button - returns to landing page
    const handleBack = () => {
        navigate(ROUTES.INDEX, {
            state: { language: currentLanguage }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative">
            {/* Language switch in top-right corner */}
            {/* Do not use it on the login page */}
            {/* <div className="absolute top-4 right-4">
                <LanguageSwitch />
            </div> */}
            
            {/* Back button in top-left corner */}
            <div className="absolute top-4 left-4">
                <Button onClick={handleBack}>
                    {getText('BUTTONS', 'BACK')}
                </Button>
            </div>

            <h1 className="text-3xl mb-8">{getText('HEADINGS', 'LOGIN')}</h1>
            
             {/* Add differentiation based on which button was pressed... likely separate pages, separate flows... */}
             {/* Use the hideSignup for login, keep all for sugn up... */}

             {/* https://ui.docs.amplify.aws/react/connected-components/authenticator/configuration */}
             {/* Use email for login as the default option... */}
             {/* No additional signup attributes - everything else will be handled inside the app... */}
             {/* No social providers at this point... */}
             {/* Variation is default, not modal... */}
             {/* Variation is default, not modal... */}

             <Authenticator
                    initialState={location.state?.mode || 'signIn'}
                    components={{
                        Header() {
                            return null; // Remove default header
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

             {/* <Authenticator initialState="signUp" loginMechanism="email"
                // Add custom translations for the authenticator
                services={{
                  i18n: {
                     getTranslation: (key) => {
                        // You can add more translations in your UI_TEXT constant
                        // and handle them here
                     return getText('AUTH', key) || key;
                     }
                  }
                }}
             >
                {({ signOut }) => {
                    // Redirect to dashboard on successful authentication
                    // Pass the current language to maintain language state
                    const { currentLanguage } = useLanguage();
                    navigate(ROUTES.DASHBOARD, {
                        state: { language: currentLanguage }
                    });    
                    return null;
                }}
            </Authenticator> */}
        </div>
    );
};

export default Login;