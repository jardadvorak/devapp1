// Following AWS language id conventions...
//
// en: English
// cz: Czech
// de: German

const texts_help = {

    'en': {
        // What to do if...?
        help_title: 'What to do if...?',
        help_issues: {
            '1': {
                title: 'I have a problem with logging into the application',
                body: 'We have designed the login experience to be as simple as possible while being secure.~If you are facing problems with login, please make sure that you enter the username and password correctly.Both username and password are case sensitive, and it is important to pay attention for example to your keyboard(EN) or kezboard(CZ), typing O(capital o) or 0(zero) and so on.~When copying the username and/ or password, please also mind potential spaces at the end of the word.~After more than 3 unsuccessful attempts, the system temporarily locks you out.But you can try it again in 15 minutes.'
            },
            '2': {
                title: 'I forgot my login credentials (username and/or password)',
                body: 'You need to contact your teacher who gave you your login credentials (username and password). This person is the only one who knows your identity in the system and who can either give you your original set of credentials or generate/assign a new one. In order to be able to reset the password, we need to know your username – so please share it with us or with the teacher.'
            },
            '3': {
                title: 'I have come across an error or a bug',
                body: 'Our application is in a research phase so these things may happen from time to time - despite all our effort to prevent this.  Please let us know and tell us what went wrong, ideally with some description (telling us what you were doing) and some pictures (screenshots) with the error, including the error message. You can contact us via email info@discito.cz'
            },
            '4': {
                title: 'I have a suggestion for improvement',
                body: 'All your ideas and feedback are always welcome. We are building the application for you and your benefit. Please share your ideas and your thoughts with us and we will do our best to implement them. You can contact us by simply sending us an email to info@discito.cz'
            },
        },
    },
    'cz': {
        // What to do if...?
        what_to_do_if_title: 'Co dělat když...?',
        what_to_do_if_issues: {
            '1': {
                title: 'Mám problém s přihlášením do aplikace',
                body: 'Přihlašování jsme navrhli tak, aby bylo co nejjednodušší a zároveň bezpečné.~Pokud se potýkáte s problémy s přihlášením, ujistěte se, že zadáváte uživatelské jméno a heslo správně.U uživatelského jména i hesla se rozlišují velká a malá písmena a je důležité věnovat pozornost například klávesnici(anglická nebo česká, záměna z a y) nebo také psaní O(velké o) nebo 0(nula) a tak podobně.~Při kopírování uživatelského jména a/ nebo hesla dbejte také na případné mezery na konci slova.~Po více než 3 neúspěšných pokusech vás systém dočasně zablokuje.Ale můžete to zkusit znovu za 15 minut.'
            },
            '2': {
                title: 'Zapomněl(a) jsem své přihlašovací údaje (uživatelské jméno anebo heslo)',
                body: 'Musíte kontaktovat svého učitele, který vám dal vaše přihlašovací údaje (uživatelské jméno a heslo). Tato osoba je jediná, kdo zná vaši identitu v systému a může vám poskytnout vaši původní sadu přihlašovacích údajů nebo vygenerovat/poskytnout nové údaje. Abychom byli schopni vám resetovat heslo, potřebujeme znát vaše uživatelské jméno – prosím, nasdílejte ho z námi nebo s učitelem.'
            },
            '3': {
                title: 'Narazil(a) jsem na problém nebo na chybu',
                body: 'Naše aplikace je ve fázi výzkumu, takže k těmto věcem může čas od času dojít – navzdory veškeré naší snaze tomu zabránit. Dejte nám prosím vědět a řekněte nám, co se pokazilo, ideálně s popisem (řekněte nám, co jste dělali) a několika obrázky (snímky obrazovky) s chybou, včetně chybové zprávy. Kontaktovat nás můžete také prostřednictvím našeho emailu info@discito.cz'
            },
            '4': {
                title: 'Mám nápad na vylepšení',
                body: 'Všechny vaše nápady a zpětná vazba jsou vždy vítány. Aplikaci vytváříme pro vás a váš prospěch. Podělte se s námi o své nápady a myšlenky a my uděláme maximum pro jejich realizaci. Můžete nám jednoduše poslat email na info@discito.cz'
            },
        },
    },
    'de': {
        // What to do if...?
        what_to_do_if_title: 'Was tun, wenn...?',
        what_to_do_if_issues: {
            '1': {
                title: 'Ich habe Probleme mit der Anmeldung in der Anwendung',
                body: 'Wir haben die Anmeldung so einfach wie möglich gestaltet und gleichzeitig sicher gehalten.~Wenn Sie Probleme bei der Anmeldung haben, stellen Sie bitte sicher, dass Sie Benutzernamen und Passwort korrekt eingeben. Bei beiden wird zwischen Groß- und Kleinschreibung unterschieden, und es ist wichtig, auf Details wie die Tastatureinstellung (EN oder DE), die Verwechslung von O (Großbuchstabe) und 0 (Null) und ähnliches zu achten.~Achten Sie beim Kopieren des Benutzernamens und/oder Passworts auch auf mögliche Leerzeichen am Ende.~Nach mehr als 3 erfolglosen Versuchen sperrt das System Sie vorübergehend. Sie können es aber nach 15 Minuten erneut versuchen.'
            },
            '2': {
                title: 'Ich habe meine Anmeldedaten vergessen (Benutzername und/oder Passwort)',
                body: 'Sie müssen sich an Ihren Lehrer wenden, der Ihnen Ihre Anmeldedaten (Benutzername und Passwort) gegeben hat. Diese Person ist die einzige, die Ihre Identität im System kennt und Ihnen entweder Ihre ursprünglichen Anmeldedaten mitteilen oder neue generieren/zuweisen kann. Um das Passwort zurücksetzen zu können, benötigen wir Ihren Benutzernamen - teilen Sie diesen bitte uns oder dem Lehrer mit.'
            },
            '3': {
                title: 'Ich bin auf einen Fehler oder Bug gestoßen',
                body: 'Unsere Anwendung befindet sich in einer Forschungsphase, daher können solche Dinge von Zeit zu Zeit auftreten - trotz all unserer Bemühungen, dies zu verhindern. Bitte lassen Sie es uns wissen und teilen Sie uns mit, was schiefgelaufen ist, idealerweise mit einer Beschreibung (sagen Sie uns, was Sie getan haben) und einigen Bildern (Screenshots) des Fehlers, einschließlich der Fehlermeldung. Sie können uns per E-Mail unter info@discito.cz kontaktieren.'
            },
            '4': {
                title: 'Ich habe einen Verbesserungsvorschlag',
                body: 'Alle Ihre Ideen und Rückmeldungen sind jederzeit willkommen. Wir entwickeln die Anwendung für Sie und Ihren Nutzen. Teilen Sie uns Ihre Ideen und Gedanken mit, und wir werden unser Bestes tun, sie umzusetzen. Sie können uns einfach eine E-Mail an info@discito.cz senden.'
            },
        },
    },
};

export default texts_help;
