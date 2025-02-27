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
                style={{...styles.htmlH2style, textAlign: 'center'}}
                htmlFor="name"
            >
                Do you have a question? Can we help you?
            </div>  

            <div
                style={{...styles.htmlH2style, color: colors.amber, textAlign: 'center'}}
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
                <div style={{
                    display: 'flex',
                    flexDirection: isMobileScreen ? 'column' : isSmallScreen ? 'row' : 'row',
                    alignItems: isMobileScreen ? 'center' : 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    gap: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                }}>
                    <label
                        style={{
                            ...styles.htmlPstyle,
                            width: isMobileScreen ? 100 : isSmallScreen ? 120 : 140,
                            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'right' : 'right',
                            paddingRight: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                        }}
                        htmlFor="name"
                    >
                        Your name*
                    </label>    
                    <input
                        id="name"
                        type="text" 
                        name="name"
                        className="contact-input"
                        style={{
                            ...styles.htmlPstyle,
                            textAlign: 'left',
                            borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
                            width: isMobileScreen ? 300 : isSmallScreen ? 300 : 400,
                            padding: isMobileScreen ? '3px 6px' : isSmallScreen ? '4px 8px' : '5px 10px',
                            border: 'none',
                            backgroundColor: 'var(--background-color-2)'
                        }}
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobileScreen ? 'column' : isSmallScreen ? 'row' : 'row',
                    alignItems: isMobileScreen ? 'center' : 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                    gap: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                }}>
                    <label 
                        style={{
                            ...styles.htmlPstyle,
                            width: isMobileScreen ? 100 : isSmallScreen ? 120 : 140,
                            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'right' : 'right',
                            paddingRight: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                        }}
                        htmlFor="email"
                    >
                        Email address*
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        className="contact-input"
                        style={{
                            ...styles.htmlPstyle,
                            textAlign: 'left',
                            borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
                            width: isMobileScreen ? 300 : isSmallScreen ? 300 : 400,
                            padding: isMobileScreen ? '3px 6px' : isSmallScreen ? '4px 8px' : '5px 10px',
                            border: 'none',
                            backgroundColor: 'var(--background-color-2)'
                        }}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobileScreen ? 'column' : isSmallScreen ? 'row' : 'row',
                    alignItems: isMobileScreen ? 'center' : 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                    gap: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                }}>
                    <label 
                        style={{
                            ...styles.htmlPstyle,
                            width: isMobileScreen ? 100 : isSmallScreen ? 120 : 140,
                            minWidth: 120,
                            textAlign: isMobileScreen ? 'center' : isSmallScreen ? 'right' : 'right',
                            paddingRight: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                        }}
                        htmlFor="message"
                    >
                        Your message*
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="contact-textarea"
                        style={{
                            ...styles.htmlPstyle,
                            textAlign: 'left',
                            borderRadius: isMobileScreen ? 4 : isSmallScreen ? 6 : 8,
                            width: isMobileScreen ? 300 : isSmallScreen ? 300 : 400,
                            padding: isMobileScreen ? '3px 6px' : isSmallScreen ? '4px 8px' : '5px 10px',
                            minHeight: '100px',
                            resize: 'vertical',
                            border: 'none',
                            backgroundColor: 'var(--background-color-2)'
                        }}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                    marginBottom: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                    gap: isMobileScreen ? 10 : isSmallScreen ? 12 : 14,
                }}>
                    <label 
                        style={{
                            ...styles.htmlFTstyle,
                            width: '100%',
                            textAlign: 'center',
                            paddingRight: isMobileScreen ? 0 : isSmallScreen ? 12 : 14,
                        }}
                        htmlFor="message"
                    >
                        * By submitting this message, you agree to the processing of your data. Thank you!
                    </label>
                    <button 
                        style={styles.normalButtonStyles}
                        type="submit"
                        disabled={state.submitting}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
