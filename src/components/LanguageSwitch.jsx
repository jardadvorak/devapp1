// src/components/LanguageSwitch.jsx
// Component for language switching buttons

import React, { useState, useEffect } from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';

import unitedKingdomFlag from '../img/flags/circle/110-united_kingdom.png';

import { flagIcons } from '../img/flags';

const LanguageSwitch = () => {
    // Get language context
    const { currentLanguage, setCurrentLanguage, getText } = useLanguage();

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
        <div>
            {/* Language buttons */}
            <Button
                onClick={() => handleLanguageClick(LANGUAGES.EN)}
                className={`w-12 ${currentLanguage === LANGUAGES.EN ? 'bg-blue-700' : ''}`}
            >
                   
                   {/* <img src={flagIcons.flags_circ_EN}/> */}
                   <img src={unitedKingdomFlag} height='24px' width='24px'/>
                   <img src='../img/flags/circle/110-united_kingdom.png'/>
                   {getText('BUTTONS', 'LANGUAGE_EN')}
            </Button>
            <Button
                onClick={() => handleLanguageClick(LANGUAGES.DE)}
                className={`w-12 ${currentLanguage === LANGUAGES.DE ? 'bg-blue-700' : ''}`}
            >
                   <img src='../img/flags/circle/208-germany.png'/>
                   {getText('BUTTONS', 'LANGUAGE_DE')}
            </Button>
            <Button
                onClick={() => handleLanguageClick(LANGUAGES.CZ)}
                className={`w-12 ${currentLanguage === LANGUAGES.CZ ? 'bg-blue-700' : ''}`}
            >
                   <img src='../img/flags/circle/202-czech_republic.png'/>
                   {getText('BUTTONS', 'LANGUAGE_CZ')}
            </Button>

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
