// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../contexts/LanguageContext';
import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';

function ContactForm() {

    // Get language context
    const { getText } = useLanguage();
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    
    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);
    
    const availableHeight = `calc(100vh - ${
        // Top navigation
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner
        (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
        // Footer
        (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
    }px)`;
    
    const [state, handleSubmit] = useForm("manqryqr");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>

            <div
                style={styles.htmlH1style}
                htmlFor="name"
            >
                Contact Form
            </div>  

            <div
                style={styles.htmlH2style}
                htmlFor="name"
            >
                Do you have a question? Can we help you?
            </div>  

            <div
                style={{...styles.htmlH2style, color: colors.amber}}
                htmlFor="name"
            >
                Get in touch!
            </div>  

            
            <div 
                style={{
                    ...styles.simpleBarStyle, 
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: isMobileScreen ? 6 : isSmallScreen ? 8 : 10,
                    marginBottom: isMobileScreen ? 16 : isSmallScreen ? 18 : 20,
                    }}
            >
                <label
                    style={styles.htmlPstyle}
                    htmlFor="name"
                >
                    Your name*
                </label>    

                <label 
                    style={styles.htmlPstyle}
                    htmlFor="email"
                >
                    Email address*
                </label>

                <label 
                    style={styles.htmlPstyle}
                    htmlFor="message"
                >
                    Your message*
                </label>

                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
      
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />

                <button 
                    style={styles.normalButtonStyles}
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </button>
            </div>
    </form>
    
);
}

// Contact Form
// Do you have a question? Can we help you?
// Get in touch!
// Name
// Email
// Your message
// Submit message
// * By submitting this message, you agree to the processing of your data.
// Thank you!

export default ContactForm;
