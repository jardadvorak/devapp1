import React from 'react'
//import './App.css'; // Assuming you might want to import some CSS for general styles

// Colors, styles etc.
import { colors } from 'components/styles/colors';
import { paragraphStyles } from 'components/styles/paragraph_styles';
import { componentStyles } from 'components/styles/component_styles';
import { fontStyles } from 'components/styles/fonts/fonts';

import { useWindowSize } from 'components/_common/responsiveness/useWindowSize';
import DiscitoPP_en from './discitoPP_EN';

const DiscitoPP_cz = () => {

    //Responsiveness
    const windowSize = useWindowSize();
    const isSmallScreen = windowSize.width <= 768;

    //Styles
    const styles = componentStyles(isSmallScreen);
    const paragraphs = paragraphStyles(isSmallScreen);
    //const fonts = fontStyles(isSmallScreen);

    return (
        <div>
            <h1 style={styles.htmlH1style}> Zásady ochrany osobních údajů v Discito </h1>

            <p style={styles.htmlPstyle}>
                Vítejte v Zásadách ochrany osobních údajů v Discito. Vaše soukromí je pro nás důležité a jsme odhodláni chránit vaše osobní údaje. Tyto zásady popisují, jak shromažďujeme, používáme a chráníme vaše data.
            </p>

            <h2 style={styles.htmlH2style}>Informace které shromažďujeme</h2>
            <p style={styles.htmlPstyle}>
                <strong>Osobní informace:</strong> Když se zaregistrujete k účtu nebo používáte naše služby, shromažďujeme informace jako je vaše uživatelské jméno a e-mailová adresa.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Údaje o používání:</strong> Shromažďujeme data o tom, jak používáte naše služby, včetně vaší IP adresy, typu prohlížeče a navštívených stránek.
            </p>

            <h2 style={styles.htmlH2style}>Jak používáme vaše informace</h2>
            <p style={styles.htmlPstyle}>
                <strong>Poskytování služeb:</strong> Vaše informace používáme k poskytování a zlepšování našich služeb, odpovídání na vaše dotazy a zpracování transakcí.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Personalizace:</strong> Data používáme k personalizaci vašich zkušeností, například k doporučování obsahu a přizpůsobování komunikace.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Komunikace:</strong> Můžeme vám zasílat propagační zprávy, aktualizace a další informace související s našimi službami. Z těchto komunikací se můžete kdykoli odhlásit.
            </p>

            <h2 style={styles.htmlH2style}>Sdílení a zveřejňování informací</h2>
            <p style={styles.htmlPstyle}>
                <strong>Poskytovatelé služeb třetích stran:</strong> Vaše informace můžeme sdílet s důvěryhodnými poskytovateli třetích stran, kteří nám pomáhají poskytovat naše služby. Tito poskytovatelé jsou vázáni dohodami o mlčenlivosti.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Právní požadavky:</strong> Vaše informace můžeme zveřejnit, pokud to vyžaduje zákon nebo v reakci na právní procesy, jako je soudní příkaz nebo předvolání.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Podnikové převody:</strong> V případě fúze, akvizice nebo prodeje aktiv mohou být vaše informace převedeny na nového vlastníka.
            </p>

            <h2 style={styles.htmlH2style}>Bezpečnost dat</h2>
            <p style={styles.htmlPstyle}>
                <strong>Ochranná opatření:</strong> Implementujeme různá bezpečnostní opatření k ochraně vašich osobních údajů, včetně šifrování a zabezpečených serverů.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Omezený přístup:</strong> Přístup k vašim osobním údajům je omezen na zaměstnance a dodavatele, kteří je potřebují k plnění svých pracovních povinností.
            </p>

            <h2 style={styles.htmlH2style}>Vaše práva</h2>
            <p style={styles.htmlPstyle}>
                <strong>Přístup a oprava:</strong> Máte právo na přístup a aktualizaci svých osobních údajů. To můžete provést prostřednictvím nastavení svého účtu nebo kontaktováním nás.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Vymazání:</strong> Můžete požádat o vymazání svých osobních údajů. Takovým žádostem vyhovíme, pokud nejsme povinni data uchovávat z právních důvodů.
            </p>
            <p style={styles.htmlPstyle}>
                <strong>Odhlášení:</strong> Z propagačních komunikací se můžete odhlásit podle pokynů k odhlášení uvedených v e-mailech nebo přímým kontaktováním nás.
            </p>

            <h2 style={styles.htmlH2style}>Změny těchto zásad</h2>
            <p style={styles.htmlPstyle}>
                Tyto zásady ochrany soukromí můžeme čas od času aktualizovat. O jakýchkoli významných změnách vás budeme informovat zveřejněním nových zásad na našem webu a aktualizací data „Poslední aktualizace“. Vaše pokračující používání našich služeb po těchto změnách představuje váš souhlas s novými zásadami.
            </p>

            <h2 style={styles.htmlH2style}>Kontaktujte nás</h2>
            <p style={styles.htmlPstyle}>
                Pokud máte jakékoli dotazy nebo obavy ohledně těchto zásad ochrany soukromí, kontaktujte nás na info@discito.cz.
            </p>

            <h2 style={styles.htmlH2style}>Rozhodné právo</h2>
            <p style={styles.htmlPstyle}>
                Tyto zásady ochrany osobních údajů se řídí zákony České republiky. Jakékoli případné spory vyplývající z těchto zásad budou řešeny soudy v této jurisdikci.
            </p>
        </div>
    );
};

export default DiscitoPP_cz;
