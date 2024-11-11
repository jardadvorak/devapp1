// src/contexts/LanguageContext.jsx
// Create a context to manage language state across the application
import React, { createContext, useState, useContext } from 'react';
import { DEFAULT_LANGUAGE, UI_TEXT } from '../config/constants';

// Create a context for language management
const LanguageContext = createContext();

// Create a provider component that will wrap our app
export const LanguageProvider = ({ children }) => {
    // State to store current language
    const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);

    // Function to get text based on current language
    const getText = (section, key) => {
        return UI_TEXT[currentLanguage]?.[section]?.[key] || UI_TEXT[DEFAULT_LANGUAGE][section][key];
    };

    // Values to be provided to consumers
    const value = {
        currentLanguage,
        setCurrentLanguage,
        getText
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};