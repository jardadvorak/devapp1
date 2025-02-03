import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';
import { icons } from '../img/icons';
import { flagIcons } from '../img/flags';

const LANGUAGE_NAMES = {
    [LANGUAGES.CZ]: "Čeština",
    [LANGUAGES.EN]: "English",
    [LANGUAGES.DE]: "Deutsch"
};

const LanguageSwitch = () => {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('appLanguage', language);
        setIsOpen(false);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('appLanguage');
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
    }, [setCurrentLanguage]);

    const getFlagIcon = (lang) => {
        switch (lang) {
            case LANGUAGES.EN:
                return flagIcons.flags_circ_EN;
            case LANGUAGES.DE:
                return flagIcons.flags_circ_DE;
            case LANGUAGES.CZ:
                return flagIcons.flags_circ_CZ;
            default:
                return null;
        }
    };

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    padding: '6px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                <img
                    src={theme === themes.light ? icons.icon_globe_light : icons.icon_globe_dark}
                    alt="Language"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '8px',
                        backgroundColor: 'var(--background-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        minWidth: '160px'
                    }}
                >
                    {Object.entries(LANGUAGE_NAMES).map(([lang, name]) => (
                        <div
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 16px',
                                cursor: 'pointer',
                                backgroundColor: currentLanguage === lang ? 'var(--hover-color)' : 'transparent',
                                color: 'var(--text-color)',
                                gap: '8px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentLanguage === lang ? 'var(--hover-color)' : 'transparent'}
                        >
                            <img
                                src={getFlagIcon(lang)}
                                alt={name}
                                style={{
                                    width: '20px',
                                    height: '20px'
                                }}
                            />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;
