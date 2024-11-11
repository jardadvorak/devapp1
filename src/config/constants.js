// src/config/constants.js
// This file contains all application-wide constants to avoid hardcoding
// This file now includes language-specific text and supported languages

// Supported languages configuration
export const LANGUAGES = {
    EN: 'en',
    DE: 'de'
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
        BUTTONS: {
            LOGIN: 'Log In',
            SIGNUP: 'Sign Up',
            BACK: 'Back',
            SIGNOUT: 'Sign Out',
            LANGUAGE_EN: 'EN',
            LANGUAGE_DE: 'DE'
        },
        HEADINGS: {
            WELCOME: 'Welcome to Our Application',
            DASHBOARD: 'My Dashboard',
            LOGIN: 'Authentication'
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
        BUTTONS: {
            LOGIN: 'Anmelden',
            SIGNUP: 'Registrieren',
            BACK: 'Zurück',
            SIGNOUT: 'Abmelden',
            LANGUAGE_EN: 'EN',
            LANGUAGE_DE: 'DE'
        },
        HEADINGS: {
            WELCOME: 'Willkommen in unserer Anwendung',
            DASHBOARD: 'Mein Dashboard',
            LOGIN: 'Authentifizierung'
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
    }
};
