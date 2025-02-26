import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useWindowSize } from '../utilities/UseWindowSize';
import { componentStyles } from '../config/styles/styles';
import { screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

const DiscitoPP_en = () => {

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Get language context
    const { currentLanguage, getText } = useLanguage();
    const { theme } = useTheme();
        
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;
    
    // Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);
    
    //Handle page width
    const virtualFullWidthLocal = {
        ...virtualFullWidth,
        backgroundColor: `var(--footer-bg)`
    }

    return (
        <div>
            <h1 style={styles.htmlH1style}> Discito Privacy Policy </h1>

            <p style={styles.htmlPstyle}>
                Welcome to the Discito Privacy Policy. Your privacy is important to us and we are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2 style={styles.htmlH2style}>Information We Collect</h2>
            <p style={styles.htmlPstyle}>
                <strong>Personal Information:</strong> When you register for an account or use our services, we collect information such as your username and email address.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Usage Data:</strong> We collect data on how you use our services, including your IP address, browser type, and pages visited.
            </p>

            <h2 style={styles.htmlH2style}>How We Use Your Information</h2>
            <p style={styles.htmlPstyle}>
                <strong>Service Provision:</strong> We use your information to provide and improve our services, respond to your inquiries, and process transactions.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Personalization:</strong> We use data to personalize your experience, such as recommending content and tailoring communication.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Communication:</strong> We may send you promotional messages, updates, and other information related to our services. You can opt-out of these communications at any time.
            </p>

            <h2 style={styles.htmlH2style}>Information Sharing and Disclosure</h2>
            <p style={styles.htmlPstyle}>
                <strong>Third-Party Service Providers:</strong> We may share your information with trusted third-party providers who assist us in delivering our services. These providers are bound by confidentiality agreements.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to legal processes such as a court order or subpoena.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
            </p>

            <h2 style={styles.htmlH2style}>Data Security</h2>
            <p style={styles.htmlPstyle}>
                <strong>Protection Measures:</strong> We implement various security measures to protect your personal information, including encryption and secure servers.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Limited Access:</strong> Access to your personal information is restricted to employees and contractors who need it to perform their job duties.
            </p>

            <h2 style={styles.htmlH2style}>Your Rights</h2>
            <p style={styles.htmlPstyle}>
                <strong>Access and Correction:</strong> You have the right to access and update your personal information. You can do this through your account settings or by contacting us.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Deletion:</strong> You can request the deletion of your personal information. We will comply with such requests unless we are required to retain the data for legal reasons.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe instructions in the emails or contacting us directly.
            </p>

            <h2 style={styles.htmlH2style}>Changes to This Policy</h2>
            <p style={styles.htmlPstyle}>
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new policy.
            </p>

            <h2 style={styles.htmlH2style}>Contact Us</h2>
            <p style={styles.htmlPstyle}>
                If you have any questions or concerns about this privacy policy, please contact us at info@discito.cz.
            </p>

            <h2 style={styles.htmlH2style}>Governing Law</h2>
            <p style={styles.htmlPstyle}>
                This privacy policy is governed by the laws of the Czech Republic. Any potential disputes arising from this policy shall be resolved in the courts of that jurisdiction.
            </p>
        </div>
    );
};

export default DiscitoPP_en;
