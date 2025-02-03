import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoImages } from '../img/logos';
import { icons } from '../img/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';
import { ROUTES, AUTH_MODES } from '../config/constants';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';
import LanguageSwitch from '../components/LanguageSwitch';
import ThemeSwitch from '../components/ThemeSwitch';

function TopNavigationBar({ children }) {
    const navigate = useNavigate();
    const { getText, currentLanguage } = useLanguage();
    const { theme } = useTheme();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    
    // Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    // Handler for login button
    const handleLogin = () => {
        navigate(ROUTES.LOGIN, { 
            state: { 
                mode: AUTH_MODES.SIGN_IN,
                language: currentLanguage 
            }
        });
    };

    // Handler for signup button
    const handleSignup = () => {
        navigate(ROUTES.LOGIN, { 
            state: { 
                mode: AUTH_MODES.SIGN_UP,
                language: currentLanguage 
            }
        });
    };
    
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
                        <div style={styles.iconDivSizeStyle}>
                            <LanguageSwitch />
                        </div>
                        <div style={styles.iconDivSizeStyle}>
                            <ThemeSwitch />
                        </div>
                        <button onClick={handleLogin} style={styles.testButtonStyles}>
                            {getText('BUTTONS', 'LOGIN')}
                        </button>
                        <button onClick={handleSignup} style={styles.testButtonStyles}>
                            {getText('BUTTONS', 'SIGNUP')}
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
