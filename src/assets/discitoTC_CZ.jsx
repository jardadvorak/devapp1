import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useWindowSize } from '../utilities/UseWindowSize';
import { componentStyles } from '../config/styles/styles';
import { screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

const DiscitoTC_cz = () => {

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
            <h1 style={styles.htmlH1style}> Podmínky použití Discito </h1>

            <p style={styles.htmlPstyle}>
                Vítejte ve službách Discito. Používáním našich služeb souhlasíte s dodržováním následujících podmínek použití. Před použitím našich služeb si je prosím pečlivě přečtěte.
            </p>

            <h2 style={styles.htmlH2style}>Účet a odpovědnosti uživatele</h2>
            <p style={styles.htmlPstyle}>
                <strong>Vytvoření účtu:</strong> Při vytváření účtu na Discito je potřeba uvést přesné a úplné informace zejména emailovou adresu.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Bezpečnost účtu:</strong> Je vaší odpovědností uchovávat informace o svém účtu v bezpečí a důvěrnosti. Nezveřejňujte své heslo ostatním.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Dodržování zákonů:</strong> Souhlasíte s používáním našich služeb v souladu se všemi platnými zákony a předpisy.
            </p>

            <h2 style={styles.htmlH2style}>Služby poskytované Discito</h2>
            <p style={styles.htmlPstyle}>
                <strong>Dostupnost služeb:</strong> Snažíme se poskytovat naše služby bez přerušení. Nemůžeme však zaručit že služby budou vždy dostupné nebo bez chyb.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Úpravy služeb:</strong> Discito si vyhrazuje právo kdykoli bez předchozího upozornění upravit nebo ukončit jakoukoli službu.
            </p>

            <h2 style={styles.htmlH2style}>Obsah uživatele a chování</h2>
            <p style={styles.htmlPstyle}>
                <strong>Vlastnictví obsahu:</strong> Vlastníte veškerý obsah který vytvoříte nebo nahrajete do našich služeb. Nahráním obsahu udělujete Discito licenci k použití, zobrazení a distribuci vašeho obsahu jak je nutné k poskytování našich služeb.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Zakázané činnosti:</strong> Souhlasíte s tím že nebudete používat naše služby k žádným nezákonným nebo škodlivým činnostem včetně ale nejen:
            </p>
            <ul style={styles.htmlULstyle}>
                <li style={styles.htmlLIstyle}>Porušování jakéhokoli místního, státního, národního nebo mezinárodního zákona.</li>
                <li style={styles.htmlLIstyle}>Porušování práv ostatních.</li>
                <li style={styles.htmlLIstyle}>Distribuce virů nebo jiné škodlivé technologie.</li>
                <li style={styles.htmlLIstyle}>Zapojení do podvodných aktivit.</li>
            </ul>

            <h2 style={styles.htmlH2style}>Ukončení služeb</h2>
            <p style={styles.htmlPstyle}>
                <strong>Ukončení ze strany uživatele:</strong> Svůj účet můžete kdykoli ukončit kontaktováním našeho týmu podpory.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Ukončení ze strany Discito:</strong> Vyhrazujeme si právo pozastavit nebo ukončit váš účet pokud porušíte tyto podmínky použití nebo se zapojíte do činností které škodí našim službám nebo ostatním uživatelům.
            </p>

            <h2 style={styles.htmlH2style}>Ochrana soukromí a ochrana údajů</h2>
            <p style={styles.htmlPstyle}>
                <strong>Zásady ochrany osobních údajů:</strong> Vaše soukromí je pro nás důležité. Pro informace o tom jak shromažďujeme, používáme a chráníme vaše osobní údaje prosím nahlédněte do našich Zásad ochrany osobních údajů.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Bezpečnost dat:</strong> Implementujeme opatření na ochranu vašich dat nemůžeme však zaručit absolutní bezpečnost.
            </p>

            <h2 style={styles.htmlH2style}>Omezení odpovědnosti</h2>
            <p style={styles.htmlPstyle}>
                <strong>Vyloučení záruk:</strong> Discito poskytuje služby "tak jak jsou" a bez jakýchkoli záruk výslovných nebo implicitních.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Omezení odpovědnosti:</strong> V maximálním rozsahu povoleném zákonem Discito nenese odpovědnost za jakékoli nepřímé, náhodné, zvláštní nebo následné škody vyplývající z nebo v souvislosti s vaším používáním našich služeb.
            </p>

            <h2 style={styles.htmlH2style}>Změny podmínek použití</h2>
            <p style={styles.htmlPstyle}>
                <strong>Úpravy:</strong> Tyto podmínky můžeme čas od času aktualizovat. O jakýchkoli významných změnách vás budeme informovat prostřednictvím našich služeb nebo e-mailem. Vaše pokračující používání našich služeb po takových změnách znamená váš souhlas s novými podmínkami.
            </p>

            <h2 style={styles.htmlH2style}>Rozhodné právo</h2>
            <p style={styles.htmlPstyle}>
                Tyto podmínky použití se řídí zákony České republiky. Jakékoli spory vyplývající z těchto podmínek budou řešeny soudy této jurisdikce.
            </p>

            <h2 style={styles.htmlH2style}>Kontaktujte nás</h2>
            <p style={styles.htmlPstyle}>
                Pokud máte jakékoli dotazy nebo obavy ohledně těchto podmínek použití, kontaktujte nás prostřednictvím kontaktního formuláře.
            </p>
        </div>
    );
};

export default DiscitoTC_cz;
