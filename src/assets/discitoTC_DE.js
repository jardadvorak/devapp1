import React from 'react'
//import './App.css'; // Assuming you might want to import some CSS for general styles

// Colors, styles etc.
import { colors } from 'components/styles/colors';
import { paragraphStyles } from 'components/styles/paragraph_styles';
import { componentStyles } from 'components/styles/component_styles';
import { fontStyles } from 'components/styles/fonts/fonts';

import { useWindowSize } from 'components/_common/responsiveness/useWindowSize';

const DiscitoTC_de = () => {

    //Responsiveness
    const windowSize = useWindowSize();
    const isSmallScreen = windowSize.width <= 768;

    //Styles
    const styles = componentStyles(isSmallScreen);
    const paragraphs = paragraphStyles(isSmallScreen);
    //const fonts = fontStyles(isSmallScreen);

    return (
        <div>
            <h1 style={styles.htmlH1style}>Discito Allgemeine Geschäftsbedingungen</h1>

            <p style={styles.htmlPstyle}>
                Willkommen bei Discito. Mit der Nutzung unserer Dienste erklären Sie sich mit den folgenden Geschäftsbedingungen einverstanden. Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Dienste nutzen.
            </p>

            <h2 style={styles.htmlH2style}>Konto und Benutzerverantwortlichkeiten</h2>
            <p style={styles.htmlPstyle}>
                <strong>Kontoerstellung:</strong> Sie müssen bei der Erstellung eines Kontos bei Discito genaue und vollständige Informationen angeben, insbesondere Ihre E-Mail-Adresse.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Kontosicherheit:</strong> Es liegt in Ihrer Verantwortung, Ihre Kontoinformationen sicher und vertraulich zu halten. Teilen Sie Ihr Passwort nicht mit anderen.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Einhaltung von Gesetzen:</strong> Sie verpflichten sich, unsere Dienste in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu nutzen.
            </p>

            <h2 style={styles.htmlH2style}>Von Discito bereitgestellte Dienste</h2>
            <p style={styles.htmlPstyle}>
                <strong>Verfügbarkeit der Dienste:</strong> Wir bemühen uns, unsere Dienste ohne Unterbrechungen bereitzustellen. Wir können jedoch nicht garantieren, dass die Dienste jederzeit oder fehlerfrei verfügbar sind.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Änderungen der Dienste:</strong> Discito behält sich das Recht vor, jegliche Dienste jederzeit ohne vorherige Ankündigung zu ändern oder einzustellen.
            </p>

            <h2 style={styles.htmlH2style}>Benutzerinhalte und Verhalten</h2>
            <p style={styles.htmlPstyle}>
                <strong>Eigentumsrechte an Inhalten:</strong> Sie behalten das Eigentum an allen Inhalten, die Sie erstellen oder in unsere Dienste hochladen. Durch das Hochladen von Inhalten gewähren Sie Discito eine Lizenz zur Nutzung, Anzeige und Verteilung Ihrer Inhalte, soweit dies zur Bereitstellung unserer Dienste erforderlich ist.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Verbotene Aktivitäten:</strong> Sie verpflichten sich, unsere Dienste nicht für rechtswidrige oder schädliche Aktivitäten zu nutzen, einschließlich, aber nicht beschränkt auf:
            </p>
            <ul style={styles.htmlULstyle}>
                <li style={styles.htmlLIstyle}>Verletzung lokaler, staatlicher, nationaler oder internationaler Gesetze.</li>
                <li style={styles.htmlLIstyle}>Verletzung der Rechte anderer.</li>
                <li style={styles.htmlLIstyle}>Verbreitung von Viren oder anderen schädlichen Technologien.</li>
                <li style={styles.htmlLIstyle}>Beteiligung an betrügerischen Aktivitäten.</li>
            </ul>

            <h2 style={styles.htmlH2style}>Beendigung der Dienste</h2>
            <p style={styles.htmlPstyle}>
                <strong>Kündigung durch den Benutzer:</strong> Sie können Ihr Konto jederzeit durch Kontaktaufnahme mit unserem Support-Team kündigen.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Kündigung durch Discito:</strong> Wir behalten uns das Recht vor, Ihr Konto zu sperren oder zu kündigen, wenn Sie gegen diese Geschäftsbedingungen verstoßen oder Aktivitäten ausüben, die unseren Diensten oder anderen Benutzern schaden.
            </p>

            <h2 style={styles.htmlH2style}>Datenschutz und Datensicherheit</h2>
            <p style={styles.htmlPstyle}>
                <strong>Datenschutzerklärung:</strong> Ihre Privatsphäre ist uns wichtig. Bitte lesen Sie unsere Datenschutzerklärung für Informationen darüber, wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Datensicherheit:</strong> Wir implementieren Maßnahmen zum Schutz Ihrer Daten, können aber keine absolute Sicherheit garantieren.
            </p>

            <h2 style={styles.htmlH2style}>Haftungsbeschränkung</h2>
            <p style={styles.htmlPstyle}>
                <strong>Gewährleistungsausschluss:</strong> Discito stellt die Dienste "wie besehen" und ohne jegliche ausdrückliche oder stillschweigende Gewährleistung zur Verfügung.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Haftungsbeschränkung:</strong> Soweit gesetzlich zulässig, haftet Discito nicht für indirekte, zufällige, besondere oder Folgeschäden, die sich aus oder im Zusammenhang mit Ihrer Nutzung unserer Dienste ergeben.
            </p>

            <h2 style={styles.htmlH2style}>Änderungen der Geschäftsbedingungen</h2>
            <p style={styles.htmlPstyle}>
                <strong>Änderungen:</strong> Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen über unsere Dienste oder per E-Mail informieren. Ihre weitere Nutzung unserer Dienste nach solchen Änderungen stellt Ihre Zustimmung zu den neuen Bedingungen dar.
            </p>

            <h2 style={styles.htmlH2style}>Geltendes Recht</h2>
            <p style={styles.htmlPstyle}>
                Diese Geschäftsbedingungen unterliegen den Gesetzen der Tschechischen Republik. Alle Streitigkeiten aus diesen Bedingungen werden vor den Gerichten dieser Gerichtsbarkeit beigelegt.
            </p>

            <h2 style={styles.htmlH2style}>Kontaktinformationen</h2>
            <p style={styles.htmlPstyle}>
                Wenn Sie Fragen oder Bedenken zu diesen Geschäftsbedingungen haben, kontaktieren Sie uns bitte über das Kontaktformular.
            </p>
        </div>
    );
};

export default DiscitoTC_de;
