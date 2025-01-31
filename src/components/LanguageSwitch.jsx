// src/components/LanguageSwitch.jsx
// Component for language switching buttons

import React, { useState, useEffect } from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
// import Button from './Button';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { componentStyles } from '../config/styles/styles';

import { flagIcons } from '../img/flags';

const LanguageSwitch = () => {
    // Get language context
    const { currentLanguage, setCurrentLanguage, getText } = useLanguage();

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    
    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    // State to manage dialog visibility and selected language
    const [showDialog, setShowDialog] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // On component mount, check for a saved language in localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('appLanguage');
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage); // Initialize with saved language
        }
    }, [setCurrentLanguage]);

    // Handle language button click
    const handleLanguageClick = (language) => {
        setSelectedLanguage(language); // Set selected language
        setShowDialog(true); // Show confirmation dialog
        // setCurrentLanguage(selectedLanguage); // Set the new language
        // window.location.reload(); // Reload the page to apply the language change
    };

    // Confirm the language change
    const confirmLanguageChange = () => {
        if (selectedLanguage) {
            setCurrentLanguage(selectedLanguage); // Set the new language
            localStorage.setItem('appLanguage', selectedLanguage); // Save to localStorage
            window.location.reload(); // Reload the page to apply the language change
        }
        setShowDialog(false); // Close the dialog
    };

    // Cancel the language change
    const cancelLanguageChange = () => {
        setSelectedLanguage(null); // Reset selected language
        setShowDialog(false); // Close the dialog
    };

    return (
        <div style={{ color: 'green', backgroundColor: 'white', margin: '0px', padding: '0px', gap: '16px', display: 'flex', cursor: 'pointer'}}>
            {/* Language buttons */}
            <div
                onClick={() => handleLanguageClick(LANGUAGES.EN)}
                style={styles.iconDivSizeStyle}
                // className={`w-12 ${currentLanguage === LANGUAGES.EN ? 'bg-blue-700' : ''}`}
            >
                   
                <img 
                    src={flagIcons.flags_circ_EN} 
                    height='100%' 
                    width='100%' 
                    style={{ color: 'green', backgroundColor: 'white', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
                />
                   {/* {getText('BUTTONS', 'LANGUAGE_EN')} */}
            </div>
            <div
                onClick={() => handleLanguageClick(LANGUAGES.DE)}
                style={styles.iconDivSizeStyle}
                // className={`w-12 ${currentLanguage === LANGUAGES.DE ? 'bg-blue-700' : ''}`}
            >
                <img 
                    src={flagIcons.flags_circ_DE} 
                    height='100%' 
                    width='100%' 
                    // style={{ color: 'green', backgroundColor: 'white', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
                />
                   {/* {getText('BUTTONS', 'LANGUAGE_DE')} */}
            </div>
            <div
                onClick={() => handleLanguageClick(LANGUAGES.CZ)}
                style={styles.iconDivSizeStyle}
                // className={`w-12 ${currentLanguage === LANGUAGES.CZ ? 'bg-blue-700' : ''}`}
            >
                <img src={flagIcons.flags_circ_CZ} 
                    height='100%' 
                    width='100%' 
                    // style={{ color: 'green', backgroundColor: 'white', margin: '0px', padding: '0px', display: 'flex', cursor: 'pointer'}}
                />
                   {/* {getText('BUTTONS', 'LANGUAGE_CZ')} */}
            </div>

            {/* Confirmation dialog */}
            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <p>{getText('DIALOGS', 'LANGUAGE_CHANGE_CONFIRMATION')}</p>
                        <button onClick={confirmLanguageChange}>{getText('BUTTONS', 'OK')}</button>
                        <button onClick={cancelLanguageChange}>{getText('BUTTONS', 'CANCEL')}</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;

// // src/components/LanguageSwitch.jsx
// // Component for language switching buttons
// import React from 'react';
// import { LANGUAGES } from '../config/constants';
// import { useLanguage } from '../contexts/LanguageContext';
// import Button from './Button';

// const LanguageSwitch = () => {
//     // Get language context
//     const { currentLanguage, setCurrentLanguage, getText } = useLanguage();

//     return (
//         <div className="flex gap-2">
//             <Button 
//                 onClick={() => setCurrentLanguage(LANGUAGES.EN)}
//                 className={`w-12 ${currentLanguage === LANGUAGES.EN ? 'bg-blue-700' : ''}`}
//             >
//                 {getText('BUTTONS', 'LANGUAGE_EN')}
//             </Button>
//             <Button 
//                 onClick={() => setCurrentLanguage(LANGUAGES.DE)}
//                 className={`w-12 ${currentLanguage === LANGUAGES.DE ? 'bg-blue-700' : ''}`}
//             >
//                 {getText('BUTTONS', 'LANGUAGE_DE')}
//             </Button>
//         </div>
//     );
// };

// export default LanguageSwitch;
