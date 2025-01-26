// src/components/ThemeSwitch.jsx
// Component for theme switching buttons

import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';
import { componentStyles } from '../config/styles/styles';
import { icons } from '../img/icons';
import { themes } from '../config/styles/themes';

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem('appTheme');
            if (savedTheme && (savedTheme === themes.light || savedTheme === themes.dark)) {
                setTheme(savedTheme);
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
        }
    }, [setTheme]);

    const handleThemeChange = () => {
        const newTheme = theme === themes.light ? themes.dark : themes.light;
        setTheme(newTheme);
        try {
            localStorage.setItem('appTheme', newTheme);
        } catch (error) {
            console.error('Error saving theme to localStorage:', error);
        }
    };

    return (
        <div style={{ color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', gap: '16px', display: 'flex', cursor: 'pointer'}}>
            <div
                onClick={handleThemeChange}
                style={styles.iconDivSizeStyle}
            >
                <img 
                    src={theme === themes.light ? icons.icon_dark_mode : icons.icon_light_mode}
                    height='100%' 
                    width='100%' 
                    style={{ color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
                    alt={theme === themes.light ? "Switch to dark mode" : "Switch to light mode"}
                />
            </div>
        </div>
    );
};

export default ThemeSwitch;

// ====
// import React, { useState, useEffect } from 'react';
// import { LANGUAGES } from '../config/constants';
// import { useTheme } from '../contexts/ThemeContext';
// import Button from './Button';

// import {useWindowSize} from '../utilities/UseWindowSize'

// import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
// import { screenWidthSettings } from '../config/styles/page_width';

// import { componentStyles } from '../config/styles/styles';

// import { flagIcons } from '../img/flags';
// import { icons } from '../img/icons';
// import { themes } from '../config/styles/themes';

// const ThemeSwitch = () => {
    // Get theme context
    // const { theme, setTheme } = useTheme();

    // Handle responsiveness
    // const windowSize = useWindowSize();
    // const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    // const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    // const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    
    //Load styles
    // const styles = componentStyles(isMobileScreen, isSmallScreen);

    // State to manage dialog visibility and selected language
    // const [showDialog, setShowDialog] = useState(false);
    // const [selectedLanguage, setSelectedLanguage] = useState(null);

    // On component mount, check for a saved theme in localStorage
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('appTheme');
    //     if (savedTheme) {
    //         setTheme(savedTheme); // Initialize with saved theme
    //     }
    // }, [setTheme]);

    // Handle theme button click
    // const handleThemeClick = (theme) => {
        // setSelectedTheme(theme); // Set selected theme
        // setShowDialog(true); // Show confirmation dialog
        // setCurrentTheme(selectedTheme); // Set the new theme
        // window.location.reload(); // Reload the page to apply the theme change
    // };

    // Confirm the theme change
    // const confirmThemeChange = () => {
    //     if (selectedTheme) {
    //         setCurrentTheme(selectedTheme); // Set the new theme
    //         localStorage.setItem('appTheme', selectedTheme); // Save to localStorage
    //         window.location.reload(); // Reload the page to apply the theme change
    //     }
    //     setShowDialog(false); // Close the dialog
    // };

    // Cancel the theme change
//     const cancelThemeChange = () => {
//         setSelectedTheme(null); // Reset selected theme
//         setShowDialog(false); // Close the dialog
//     };

//     return (
//         <div style={{ color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', gap: '16px', display: 'flex', cursor: 'pointer'}}>
//             {/* Theme icons */}
//             <div
//                 onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
//                 style={styles.iconDivSizeStyle}
//             >

//             {theme === themes.light ? 
//                 (
//                 <img 
//                     src={icons.icon_dark_mode} 
//                     height='100%' 
//                     width='100%' 
//                     style={{ color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
//                 />
//                 ) : (
//                 <img 
//                     src={icons.icon_light_mode} 
//                     height='100%' 
//                     width='100%' 
//                     style={{ color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
//                 />
//                 )
//             }
//             </div>

//             {/* Confirmation dialog */}
//             {/* {showDialog && (
//                 <div className="dialog-overlay">
//                     <div className="dialog-box">
//                         <p>{getText('DIALOGS', 'LANGUAGE_CHANGE_CONFIRMATION')}</p>
//                         <button onClick={confirmLanguageChange}>{getText('BUTTONS', 'OK')}</button>
//                         <button onClick={cancelLanguageChange}>{getText('BUTTONS', 'CANCEL')}</button>
//                     </div>
//                 </div>
//             )} */}
//         </div>
//     );
// };

// export default ThemeSwitch;
