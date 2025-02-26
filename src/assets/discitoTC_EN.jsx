import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useWindowSize } from '../utilities/UseWindowSize';
import { componentStyles } from '../config/styles/styles';
import { screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

const DiscitoTC_en = () => {

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
            <h1 style={styles.htmlH1style}> Discito Terms and Conditions </h1>

            <p style={styles.htmlPstyle}>
                Welcome to Discito. By using our services you agree to comply with the following terms and conditions. Please read them carefully before using our services.
            </p>

            <h2 style={styles.htmlH2style}>Account and User Responsibilities</h2>
            <p style={styles.htmlPstyle}>
                <strong>Account Creation:</strong> You must provide accurate and complete information when creating an account with Discito, especially your email address.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Account Security:</strong> It is your responsibility to keep your account information secure and confidential. Do not share your password with others.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Compliance with Laws:</strong> You agree to use our services in compliance with all applicable laws and regulations.
            </p>

            <h2 style={styles.htmlH2style}>Services Provided by Discito</h2>
            <p style={styles.htmlPstyle}>
                <strong>Service Availability:</strong> We strive to provide our services without interruptions. However, we do not guarantee that the services will be available at all times or without errors.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Service Modifications:</strong> Discito reserves the right to modify or discontinue any service at any time without prior notice.
            </p>

            <h2 style={styles.htmlH2style}>User Content and Conduct</h2>
            <p style={styles.htmlPstyle}>
                <strong>Content Ownership:</strong> You retain ownership of any content you create or upload to our services. By uploading content, you grant Discito a license to use, display, and distribute your content as necessary to provide our services.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Prohibited Activities:</strong> You agree not to use our services for any unlawful or harmful activities, including but not limited to:
            </p>
            <ul style={styles.htmlULstyle}>
                <li style={styles.htmlLIstyle}>Violating any local, state, national, or international law.</li>
                <li style={styles.htmlLIstyle}>Infringing on the rights of others.</li>
                <li style={styles.htmlLIstyle}>Distributing viruses or any other harmful technology.</li>
                <li style={styles.htmlLIstyle}>Engaging in fraudulent activities.</li>
            </ul>

            <h2 style={styles.htmlH2style}>Termination of Services</h2>
            <p style={styles.htmlPstyle}>
                <strong>Termination by User:</strong> You may terminate your account at any time by contacting our support team.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Termination by Discito:</strong> We reserve the right to suspend or terminate your account if you violate these terms and conditions or engage in activities that harm our services or other users.
            </p>

            <h2 style={styles.htmlH2style}>Privacy and Data Protection</h2>
            <p style={styles.htmlPstyle}>
                <strong>Privacy Policy:</strong> Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Data Security:</strong> We implement measures to protect your data but cannot guarantee absolute security.
            </p>

            <h2 style={styles.htmlH2style}>Limitation of Liability</h2>
            <p style={styles.htmlPstyle}>
                <strong>Disclaimer of Warranties:</strong> Discito provides services "as is" and without any warranties, express or implied.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Limitation of Liability:</strong> To the extent permitted by law, Discito shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
            </p>

            <h2 style={styles.htmlH2style}>Changes to Terms and Conditions</h2>
            <p style={styles.htmlPstyle}>
                <strong>Amendments:</strong> We may update these terms from time to time. We will notify you of any significant changes through our services or via email. Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>

            <h2 style={styles.htmlH2style}>Governing Law</h2>
            <p style={styles.htmlPstyle}>
                These terms and conditions are governed by the laws of the Czech Republic. Any disputes arising from these terms shall be resolved in the courts of that jurisdiction.
            </p>

            <h2 style={styles.htmlH2style}>Contact Information</h2>
            <p style={styles.htmlPstyle}>
                If you have any questions or concerns about these terms and conditions, please contact us using the contact form.
            </p>
        </div>
    );
};

export default DiscitoTC_en;
