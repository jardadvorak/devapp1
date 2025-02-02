import React, { createContext, useState, useEffect, useContext } from 'react';
import { themes } from '../config/styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('appTheme');
            return savedTheme === 'dark' ? themes.dark : themes.light;
        } catch {
            return themes.light;
        }
    });

    useEffect(() => {
        try {
            const root = document.documentElement;
            root.setAttribute('data-theme', theme === themes.light ? 'light' : 'dark');
            localStorage.setItem('appTheme', theme === themes.light ? 'light' : 'dark');
        } catch (error) {
            console.error('Error applying theme:', error);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
