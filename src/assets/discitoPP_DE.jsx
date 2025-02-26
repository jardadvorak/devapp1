import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useWindowSize } from '../utilities/UseWindowSize';
import { componentStyles } from '../config/styles/styles';
import { screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

const DiscitoPP_de = () => {

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
            <h1 style={styles.htmlH1style}>Discito Datenschutzerklärung</h1>

            <p style={styles.htmlPstyle}>
                Willkommen zur Discito Datenschutzerklärung. Ihre Privatsphäre ist uns wichtig und wir verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Richtlinie beschreibt, wie wir Ihre Daten erfassen, verwenden und schützen.
            </p>

            <h2 style={styles.htmlH2style}>Informationen, die wir sammeln</h2>
            <p style={styles.htmlPstyle}>
                <strong>Persönliche Informationen:</strong> Wenn Sie sich für ein Konto registrieren oder unsere Dienste nutzen, erfassen wir Informationen wie Ihren Benutzernamen und Ihre E-Mail-Adresse.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Nutzungsdaten:</strong> Wir sammeln Daten darüber, wie Sie unsere Dienste nutzen, einschließlich Ihrer IP-Adresse, des Browsertyps und der besuchten Seiten.
            </p>

            <h2 style={styles.htmlH2style}>Wie wir Ihre Informationen verwenden</h2>
            <p style={styles.htmlPstyle}>
                <strong>Bereitstellung von Diensten:</strong> Wir verwenden Ihre Informationen, um unsere Dienste bereitzustellen und zu verbessern, auf Ihre Anfragen zu reagieren und Transaktionen zu verarbeiten.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Personalisierung:</strong> Wir nutzen Daten, um Ihre Erfahrung zu personalisieren, zum Beispiel durch Inhaltsempfehlungen und maßgeschneiderte Kommunikation.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Kommunikation:</strong> Wir können Ihnen Werbenachrichten, Updates und andere Informationen zu unseren Diensten senden. Sie können diese Kommunikation jederzeit abbestellen.
            </p>

            <h2 style={styles.htmlH2style}>Informationsaustausch und Offenlegung</h2>
            <p style={styles.htmlPstyle}>
                <strong>Externe Dienstleister:</strong> Wir können Ihre Informationen mit vertrauenswürdigen externen Dienstleistern teilen, die uns bei der Bereitstellung unserer Dienste unterstützen. Diese Anbieter sind an Vertraulichkeitsvereinbarungen gebunden.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Gesetzliche Anforderungen:</strong> Wir können Ihre Informationen offenlegen, wenn dies gesetzlich vorgeschrieben ist oder als Reaktion auf rechtliche Verfahren wie gerichtliche Anordnungen oder Vorladungen.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Geschäftsübertragungen:</strong> Im Falle einer Fusion, Übernahme oder eines Verkaufs von Vermögenswerten können Ihre Informationen an den neuen Eigentümer übertragen werden.
            </p>

            <h2 style={styles.htmlH2style}>Datensicherheit</h2>
            <p style={styles.htmlPstyle}>
                <strong>Schutzmaßnahmen:</strong> Wir implementieren verschiedene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen, einschließlich Verschlüsselung und sicherer Server.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Eingeschränkter Zugriff:</strong> Der Zugriff auf Ihre persönlichen Informationen ist auf Mitarbeiter und Auftragnehmer beschränkt, die diese zur Erfüllung ihrer Aufgaben benötigen.
            </p>

            <h2 style={styles.htmlH2style}>Ihre Rechte</h2>
            <p style={styles.htmlPstyle}>
                <strong>Zugriff und Korrektur:</strong> Sie haben das Recht, auf Ihre persönlichen Informationen zuzugreifen und diese zu aktualisieren. Dies können Sie über Ihre Kontoeinstellungen oder durch Kontaktaufnahme mit uns tun.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Löschung:</strong> Sie können die Löschung Ihrer persönlichen Informationen beantragen. Wir kommen solchen Anträgen nach, es sei denn, wir sind gesetzlich verpflichtet, die Daten aufzubewahren.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Abmeldung:</strong> Sie können sich von unseren Werbenachrichten abmelden, indem Sie den Abmeldelink in den E-Mails folgen oder uns direkt kontaktieren.
            </p>

            <h2 style={styles.htmlH2style}>Änderungen dieser Richtlinie</h2>
            <p style={styles.htmlPstyle}>
                Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf unserer Website veröffentlichen und das Datum der "Letzten Aktualisierung" ändern. Ihre weitere Nutzung unserer Dienste nach solchen Änderungen stellt Ihre Zustimmung zur neuen Richtlinie dar.
            </p>

            <h2 style={styles.htmlH2style}>Kontaktieren Sie uns</h2>
            <p style={styles.htmlPstyle}>
                Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter info@discito.cz.
            </p>

            <h2 style={styles.htmlH2style}>Geltendes Recht</h2>
            <p style={styles.htmlPstyle}>
                Diese Datenschutzerklärung unterliegt den Gesetzen der Tschechischen Republik. Alle möglichen Streitigkeiten aus dieser Richtlinie werden vor den Gerichten dieser Gerichtsbarkeit beigelegt.
            </p>
        </div>
    );
};

export default DiscitoPP_de;
