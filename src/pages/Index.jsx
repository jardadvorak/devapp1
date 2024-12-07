// src/pages/Index.jsx
// External landing page accessible to all users
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import LanguageSwitch from '../components/LanguageSwitch';

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';

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

    return (
        <div className="app">
        <main>
        <div style={{...virtualFullWidth, color: 'orange'}}>
        <div style={{...availableWidth, color: 'green'}}>        {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
        {/* Language switch in top-right corner */}
            <div className="absolute top-4 right-4">
                <LanguageSwitch />
            </div>
            <h1 className="text-3xl mb-8">{getText('HEADINGS', 'WELCOME')}</h1>
            <div className="space-x-4">
                <Button onClick={handleLogin}>{getText('BUTTONS', 'LOGIN')}</Button>
                <Button onClick={handleSignup}>{getText('BUTTONS', 'SIGNUP')}</Button>
            </div>
        </div>
        </div>
        </main>
        </div>
    );
};

export default Index;