// src/components/LanguageSwitch.jsx
// Component for language switching buttons
import React from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';

const LanguageSwitch = () => {
    // Get language context
    const { currentLanguage, setCurrentLanguage, getText } = useLanguage();

    return (
        <div className="flex gap-2">
            <Button 
                onClick={() => setCurrentLanguage(LANGUAGES.EN)}
                className={`w-12 ${currentLanguage === LANGUAGES.EN ? 'bg-blue-700' : ''}`}
            >
                {getText('BUTTONS', 'LANGUAGE_EN')}
            </Button>
            <Button 
                onClick={() => setCurrentLanguage(LANGUAGES.DE)}
                className={`w-12 ${currentLanguage === LANGUAGES.DE ? 'bg-blue-700' : ''}`}
            >
                {getText('BUTTONS', 'LANGUAGE_DE')}
            </Button>
        </div>
    );
};

export default LanguageSwitch;
