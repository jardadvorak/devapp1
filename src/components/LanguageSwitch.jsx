import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';
import { icons } from '../img/icons';
import { flagIcons } from '../img/flags';
import { componentStyles } from '../config/styles/styles';

import {useWindowSize} from '../utilities/UseWindowSize'
import { screenWidthSettings } from '../config/styles/page_width';

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

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

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

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

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
                style={styles.iconButtonStyle}
            >
                <img
                    src={theme === themes.light ? icons.icon_globe_light : icons.icon_globe_dark}
                    alt="Language"
                    style={{width: '100%', height: '100%'}}
                />
            </button>

            {isOpen && (
                <div
                    style={{
                        ...styles.languageSwitchBoxstyle,

                    }}
                >
                    {Object.entries(LANGUAGE_NAMES).map(([lang, name]) => (
                        <div
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            style={styles.languageSwitchListStyle}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentLanguage === lang ? 'var(--hover-color)' : 'transparent'}
                        >
                            <img
                                src={getFlagIcon(lang)}
                                alt={name}
                                style={{
                                    width: isMobileScreen ? 20 : isSmallScreen ? 22 : 24,
                                    height: isMobileScreen ? 20 : isSmallScreen ? 22 : 24
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
