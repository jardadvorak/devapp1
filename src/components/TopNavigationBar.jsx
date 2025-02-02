import React from 'react';
import { logoImages } from '../img/logos';
import { icons } from '../img/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';
import LanguageSwitch from '../components/LanguageSwitch';
import ThemeSwitch from '../components/ThemeSwitch';

function TopNavigationBar({ children }) {
    const { getText } = useLanguage();
    const { theme } = useTheme();
    
    return (
        <>
            <nav style={{ 
                color: 'var(--text-color)',
                backgroundColor: 'var(--navbar-bg)',
                width: '100%',
                minWidth: '320px',
                padding: '0px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'min(1440px, 100%)',
                    margin: '0 auto'
                }}>
                    {/* Logo section */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '16px',
                        padding: '0px'
                    }}>
                        <div style={{
                            height: '42px'
                        }}>
                            <img 
                                src={theme === themes.light ? logoImages.logo_label_yellow : logoImages.logo_label_yellow_inverted} 
                                style={{
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    {/* Center section */}
                    <div style={{
                        flex: 1
                    }} />

                    {/* Controls section */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        margin: '16px',
                        padding: '0px'
                    }}>
                        <LanguageSwitch />
                        <ThemeSwitch />
                        <button 
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
                            onClick={() => {}}
                        >
                            <img 
                                src={icons.icon_logout} 
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                alt="Logout" 
                            />
                        </button>
                    </div>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
}

export default TopNavigationBar;
