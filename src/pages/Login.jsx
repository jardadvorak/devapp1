// src/pages/Login.jsx
// Authentication page with AWS Amplify authentication and language support
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { ROUTES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from '../components/LanguageSwitch';

import Button from '../components/Button';

const Login = () => {
    // Hooks for navigation and accessing route state
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get language context and functions
    const { setCurrentLanguage, getText } = useLanguage();

    // Effect to set language based on navigation state
    useEffect(() => {
        // Get language from navigation state or use current language
        const language = location.state?.language;
        if (language) {
            setCurrentLanguage(language);
        }
    }, [location, setCurrentLanguage]);

    // Effect to set initial auth mode based on navigation state
    useEffect(() => {
        const authMode = location.state?.mode || 'signin';
        // You would implement this based on Amplify's API
        // setAuthMode(authMode);
    }, [location]);

    // Handler for back button - returns to landing page
    const handleBack = () => {
        navigate(ROUTES.INDEX);
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

             <Authenticator initialState="signUp" loginMechanism="email"
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
            </Authenticator>
        </div>
    );
};

export default Login;