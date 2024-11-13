// src/components/LanguageSwitch.jsx
// Component for language switching buttons
import React, { useState } from 'react';
import { LANGUAGES } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';

const LanguageSwitch = () => {
    // Get language context
    const { currentLanguage, setCurrentLanguage, getText } = useLanguage();

    // State to manage dialog visibility and selected language
    const [showDialog, setShowDialog] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // Handle language button click
    const handleLanguageClick = (language) => {
        setSelectedLanguage(language); // Set selected language
        setShowDialog(true); // Show confirmation dialog
    };

    // Confirm the language change
    const confirmLanguageChange = () => {
        if (selectedLanguage) {
            setCurrentLanguage(selectedLanguage); // Set the new language
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
                {getText('BUTTONS', 'LANGUAGE_EN')}
            </Button>
            <Button
                onClick={() => handleLanguageClick(LANGUAGES.DE)}
                className={`w-12 ${currentLanguage === LANGUAGES.DE ? 'bg-blue-700' : ''}`}
            >
                {getText('BUTTONS', 'LANGUAGE_DE')}
            </Button>

            {/* Confirmation dialog */}
            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <p>Are you sure you want to change the language?</p>
                        <button onClick={confirmLanguageChange}>OK</button>
                        <button onClick={cancelLanguageChange}>Cancel</button>
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
