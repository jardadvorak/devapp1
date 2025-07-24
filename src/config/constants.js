// src/config/constants.js
// This file contains all application-wide constants to avoid hardcoding
// This file now includes language-specific text and supported languages

// Supported languages configuration
export const LANGUAGES = {
    EN: 'en',
    DE: 'de',
    CZ: 'cz'
};

// Default language setting
export const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Routes for navigation throughout the application
export const ROUTES = {
    INDEX: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard'
};

// Authentication modes for the login page
export const AUTH_MODES = {
    SIGN_IN: 'signin',
    SIGN_UP: 'signup'
};

// UI text constants to maintain consistency and enable easy updates
// UI text constants organized by language
export const UI_TEXT = {
    // English translations
    [LANGUAGES.EN]: {
        BANNER: {
            TITLE: 'Learning',
            SUBTITLE_SHORT: 'anytime, anywhere',
            SUBTITLE_LONG: 'anything, anytime, anywhere'
        },
        FOOTER: {
            CALL_TO_ACTION: 'Ready to learn?',
            HIGHLIGHTED_WORD: 'learn',
            EMAIL: 'Contact us',
            HELP: 'Help',
            FAQS: 'FAQs',
            TERMS: 'Terms of use',
            PRIVACY: 'Privacy policy',
            ALT_FACEBOOK: 'Facebook',
            ALT_INSTAGRAM: 'Instagram',
            ALT_LINKEDIN: 'LinkedIn',
            ALT_PINTEREST: 'Pinterest',
            ALT_YOUTUBE: 'YouTube'
        },
        BUTTONS: {
            LOGIN: 'Log In',
            SIGNUP: 'Sign Up',
            BACK: 'Back',
            SIGNOUT: 'Sign Out',
            OK: 'OK',
            CANCEL: 'Cancel',
            LANGUAGE_EN: 'EN',
            LANGUAGE_DE: 'DE',
            LANGUAGE_CZ: 'CZ'
        },
        HEADINGS: {
            WELCOME: 'Welcome to Our Application',
            DASHBOARD: 'My Dashboard',
            LOGIN: 'Authentication'
        },
        DIALOGS: {
            LANGUAGE_CHANGE_CONFIRMATION: 'Are you sure you want to change the language?'
        },
        AUTH: {
            'Sign In': 'Sign In',
            'Sign Up': 'Sign Up',
            'Email': 'Email',
            'Password': 'Password',
            'Forgot your password?': 'Forgot your password?',
            'Reset Password': 'Reset Password',
            'No account?': 'No account?',
            'Create account': 'Create account',
            'Have an account?': 'Have an account?',
            'Sign in': 'Sign in',
            'Terms Agreement': 'I agree with the',
            'Terms Link': 'Terms and Conditions',
            'Privacy Connector': ' and the',
            'Privacy Link': 'Privacy Policy'
        },
        VISIONMISSION: {
            TITLE: 'Vision & Mission',
            VISION_TITLE: 'Our vision:',
            VISION_STATEMENT: 'Anyone learning anything, anytime, anywhere through experience',
            VISION_DESCRIPTION: 'What you learn and experience is something no one can take from you. We aim at anyone being able to learn anything, anytime, anywhere through experience and broaden one\'s horizons to navigate successfully through today\'s world.',
            MISSION_TITLE: 'Our Mission:',
            MISSION_STATEMENT: 'Allow anyone to create, share, access and consume high-quality learning content without boundaries or limitations',
            MISSION_DESCRIPTION_1: 'Through our learning platform, we are helping anyone in creating experience from memory through practice. This happens thanks to generating large number of variations to enrich context and allow for training from repetitions.',
            MISSION_DESCRIPTION_2: 'Our learning platform shall be open to any learner or content creator and should promote and facilitate co-creation, sharing and utilization of content as a part of life-long training and experience building.'
        }
    },
    // German translations
    [LANGUAGES.DE]: {
        BANNER: {
            TITLE: 'Lernen',
            SUBTITLE_SHORT: 'jederzeit, überall',
            SUBTITLE_LONG: 'alles, jederzeit, überall'
        },
        FOOTER: {
            CALL_TO_ACTION: 'Bereit zum Lernen?',
            HIGHLIGHTED_WORD: 'Lernen',
            EMAIL: 'Kontaktiere uns',
            HELP: 'Hilfe',
            FAQS: 'FAQs',
            TERMS: 'Nutzungsbedingungen',
            PRIVACY: 'Datenschutzrichtlinie',
            ALT_FACEBOOK: 'Facebook',
            ALT_INSTAGRAM: 'Instagram',
            ALT_LINKEDIN: 'LinkedIn',
            ALT_PINTEREST: 'Pinterest',
            ALT_YOUTUBE: 'YouTube'
        },
        BUTTONS: {
            LOGIN: 'Anmelden',
            SIGNUP: 'Registrieren',
            BACK: 'Zurück',
            SIGNOUT: 'Abmelden',
            OK: 'OK',
            CANCEL: 'Stornieren',
            LANGUAGE_EN: 'EN',
            LANGUAGE_DE: 'DE',
            LANGUAGE_CZ: 'CZ'
        },
        HEADINGS: {
            WELCOME: 'Willkommen in unserer Anwendung',
            DASHBOARD: 'Mein Dashboard',
            LOGIN: 'Authentifizierung'
        },
        DIALOGS: {
            LANGUAGE_CHANGE_CONFIRMATION: 'Möchten Sie die Sprache wirklich ändern?'
        },
        AUTH: {
            'Sign In': 'Anmelden',
            'Sign Up': 'Registrieren',
            'Email': 'E-Mail',
            'Password': 'Passwort',
            'Forgot your password?': 'Passwort vergessen?',
            'Reset Password': 'Passwort zurücksetzen',
            'No account?': 'Kein Konto?',
            'Create account': 'Konto erstellen',
            'Have an account?': 'Haben Sie ein Konto?',
            'Sign in': 'Anmelden',
            'Terms Agreement': 'Ich stimme den',
            'Terms Link': 'Nutzungsbedingungen',
            'Privacy Connector': ' und der',
            'Privacy Link': 'Datenschutzrichtlinie'
        },
        VISIONMISSION: {
            TITLE: 'Vision & Mission',
            VISION_TITLE: 'Unsere Vision:',
            VISION_STATEMENT: 'Jeder lernt alles, jederzeit und überall durch Erfahrung',
            VISION_DESCRIPTION: 'Was Sie lernen und erfahren, ist etwas, das Ihnen niemand nehmen kann. Wir möchten, dass jeder in der Lage ist, alles, jederzeit und überall durch Erfahrung zu lernen und seinen Horizont zu erweitern, um sich in der heutigen Welt erfolgreich zurechtzufinden.',
            MISSION_TITLE: 'Unsere Mission:',
            MISSION_STATEMENT: 'Jedem ermöglichen, hochwertige Lerninhalte ohne Grenzen oder Einschränkungen zu erstellen, zu teilen, darauf zuzugreifen und zu nutzen',
            MISSION_DESCRIPTION_1: 'Durch unsere Lernplattform helfen wir jedem dabei, aus dem Gedächtnis durch Übung Erfahrung zu schaffen. Dies geschieht durch die Generierung einer großen Anzahl von Variationen, um den Kontext zu bereichern und Training durch Wiederholungen zu ermöglichen.',
            MISSION_DESCRIPTION_2: 'Unsere Lernplattform soll für jeden Lernenden oder Inhaltsersteller offen sein und die gemeinsame Erstellung, den Austausch und die Nutzung von Inhalten als Teil des lebenslangen Trainings und Erfahrungsaufbaus fördern und erleichtern.'
        }
    },
    // Czech translations
    [LANGUAGES.CZ]: {
        BANNER: {
            TITLE: 'Učení',
            SUBTITLE_SHORT: 'kdykoliv, kdekoliv',
            SUBTITLE_LONG: 'cokoliv, kdykoliv, kdekoliv'
        },
        FOOTER: {
            CALL_TO_ACTION: 'Připraveni se učit?',
            HIGHLIGHTED_WORD: 'učit',
            EMAIL: 'Kontaktujte nás',
            HELP: 'Nápověda',
            FAQS: 'Časté dotazy',
            TERMS: 'Podmínky použití',
            PRIVACY: 'Zásady ochrany osobních údajů',
            ALT_FACEBOOK: 'Facebook',
            ALT_INSTAGRAM: 'Instagram',
            ALT_LINKEDIN: 'LinkedIn',
            ALT_PINTEREST: 'Pinterest',
            ALT_YOUTUBE: 'YouTube'
        },
        BUTTONS: {
            LOGIN: 'Přihlásit se',
            SIGNUP: 'Registrovat se',
            BACK: 'Zpět',
            SIGNOUT: 'Odhlásit',
            OK: 'OK',
            CANCEL: 'Zrušit',
            LANGUAGE_EN: 'EN',
            LANGUAGE_DE: 'DE',
            LANGUAGE_CZ: 'CZ'
        },
        HEADINGS: {
            WELCOME: 'Vítejte v naší aplikaci',
            DASHBOARD: 'Můj přehled',
            LOGIN: 'Ověření'
        },
        DIALOGS: {
            LANGUAGE_CHANGE_CONFIRMATION: 'Opravdu chcete změnit jazyk?'
        },
        AUTH: {
            'Sign In': 'Přihlásit se',
            'Sign Up': 'Registrovat se',
            'Email': 'E-Mail',
            'Password': 'Heslo',
            'Forgot your password?': 'Zapomenuté heslo?',
            'Reset Password': 'Změnit heslo',
            'No account?': 'Nemáte účet?',
            'Create account': 'Vytvořit účet',
            'Have an account?': 'Máte účet?',
            'Sign in': 'Přihlásit se',
            'Terms Agreement': 'Souhlasím s',
            'Terms Link': 'Podmínkami použití',
            'Privacy Connector': ' a',
            'Privacy Link': 'Zásadami ochrany osobních údajů'
        },
        VISIONMISSION: {
            TITLE: 'Vize & Mise',
            VISION_TITLE: 'Naše vize:',
            VISION_STATEMENT: 'Kdokoliv se učí cokoliv, kdykoliv a kdekoliv prostřednictvím zkušeností',
            VISION_DESCRIPTION: 'To, co se naučíte a zažijete, je něco, co vám nikdo nemůže vzít. Naším cílem je, aby se kdokoliv mohl učit cokoliv, kdykoliv a kdekoliv prostřednictvím zkušeností a rozšiřovat své obzory pro úspěšnou orientaci v dnešním světě.',
            MISSION_TITLE: 'Naše mise:',
            MISSION_STATEMENT: 'Umožnit komukoliv vytvářet, sdílet, přistupovat a využívat kvalitní vzdělávací obsah bez hranic či omezení',
            MISSION_DESCRIPTION_1: 'Prostřednictvím naší vzdělávací platformy pomáháme každému vytvářet zkušenosti z paměti pomocí praxe. To se děje díky generování velkého množství variací pro obohacení kontextu a umožnění tréninku pomocí opakování.',
            MISSION_DESCRIPTION_2: 'Naše vzdělávací platforma by měla být otevřená všem studentům i tvůrcům obsahu a měla by podporovat a usnadňovat společnou tvorbu, sdílení a využívání obsahu jako součást celoživotního tréninku a budování zkušeností.'
        }
    }
};
