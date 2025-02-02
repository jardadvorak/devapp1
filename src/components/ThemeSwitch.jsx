import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { icons } from '../img/icons';
import { themes } from '../config/styles/themes';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        padding: '6px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.2s ease',
    };

    return (
        <button
            onClick={toggleTheme}
            style={buttonStyle}
            title={theme === themes.light ? "Switch to dark mode" : "Switch to light mode"}
        >
            <img 
                src={theme === themes.light ? icons.icon_moon_fill : icons.icon_sun_fill}
                alt={theme === themes.light ? "Switch to dark mode" : "Switch to light mode"}
                style={{ width: '100%', height: '100%' }}
            />
        </button>
    );
};

export default ThemeSwitch;

