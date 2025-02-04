import React, {useState} from 'react';
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
import { NEW_STYLE_STACK_SYNTHESIS_CONTEXT } from 'aws-cdk-lib/cx-api';

function TopNavigationBar({ children }) {
    const navigate = useNavigate();
    const { getText, currentLanguage } = useLanguage();
    const { theme } = useTheme();
    const [hoveredElement, setHoveredElement] = useState(null);

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    
    // Load styles for buttons using the common hover state
    const loginStyles = componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'login', false);
    const signupStyles = componentStyles(isMobileScreen, isSmallScreen, hoveredElement === 'signup', false);
    const styles = componentStyles(isMobileScreen, isSmallScreen, false, false); // for other components

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
            <nav style={styles.navbarNavStyles}>
                <div style={styles.navbarDivStyles}>
                    
                    {/* Logo section */}
                    <div style={styles.navbarFlexStyles}>
                        <div style={{
                            height: isMobileScreen ? 32 : isSmallScreen ? 36 : 40,
                            cursor: 'pointer'
                        }}>
                            <img 
                                src={theme === themes.light ? logoImages.logo_label_yellow : logoImages.logo_label_yellow_inverted} 
                                style={{height: '100%', objectFit: 'contain'}}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    {/* Center section */}
                    <div style={{...styles.navbarFlexStyles, flex: 1}}>
                    </div>

                    {/* Controls section */}
                    <div style={styles.navbarFlexStyles}>
                        <div style={styles.iconDivSizeStyle}>
                            <LanguageSwitch />
                        </div>
                        <div style={styles.iconDivSizeStyle}>
                            <ThemeSwitch />
                        </div>
                        <button 
                            onClick={handleLogin} 
                            onMouseEnter={() => setHoveredElement('login')}
                            onMouseLeave={() => setHoveredElement(null)}
                            style={loginStyles.normalButtonStyles}
                        >
                            {getText('BUTTONS', 'LOGIN')}
                        </button>
                        <button 
                            onClick={handleSignup}
                            onMouseEnter={() => setHoveredElement('signup')}
                            onMouseLeave={() => setHoveredElement(null)}
                            style={signupStyles.normalButtonStyles}
                        >
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
