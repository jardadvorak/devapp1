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
            EMAIL: 'info@discito.cz',
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
            'Sign in': 'Sign in'
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
            EMAIL: 'info@discito.cz',
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
            'Sign in': 'Anmelden'
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
            EMAIL: 'info@discito.cz',
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
            'Sign in': 'Přihlásit se'
        }
    }
};
