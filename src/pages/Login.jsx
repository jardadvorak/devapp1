// src/pages/Login.jsx
// Authentication page with AWS Amplify authentication and language support
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);

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
    // Get language from navigation state or use current language
    useEffect(() => {
        const language = location.state?.language;
        if (language) {
            setCurrentLanguage(language);
        }
    }, [location, setCurrentLanguage]);

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
            <div className="absolute top-4 right-4">
                <LanguageSwitch />
            </div>
            
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