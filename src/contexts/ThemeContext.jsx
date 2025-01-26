// src/contexts/ThemeContext.jsx
// Create a context to manage light and dark mode across the application

import React, { createContext, useState, useEffect, useContext } from 'react';
import { themes } from '../config/styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize with the light theme or saved theme from localStorage
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('appTheme');
            return savedTheme && (savedTheme === themes.light || savedTheme === themes.dark) 
                ? savedTheme 
                : themes.light;
        } catch {
            return themes.light;
        }
    });

    useEffect(() => {
        try {
            const root = document.documentElement;
            const currentTheme = themes[theme] || themes[themes.light];
            
            Object.entries(currentTheme).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
        } catch (error) {
            console.error('Error applying theme:', error);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};