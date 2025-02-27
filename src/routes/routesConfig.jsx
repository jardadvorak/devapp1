// Import pages
import Index from '../pages/Index';
import VisionMission from '../pages/VisionMission';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import TermsConditions from '../pages/TCpage';
import PrivacyPolicy from '../pages/PPpage';
import Content from '../pages/Content';
import Pricing from '../pages/Pricing';
import ContactUs from '../pages/ContactUs';
import Help from '../pages/Help';
import FAQ from '../pages/FAQ';

export const routes = [
    // public routes
    { path: '/', component: Index, public: true },
    { path: '/login', component: Login, public: true },

    { path: '/visionmission', component: VisionMission, public: true },
    { path: '/content', component: Content, public: true },
    { path: '/pricing', component: Pricing, public: true },

    { path: '/contactus', component: ContactUs, public: true },
    { path: '/help', component: Help, public: true },
    { path: '/FAQ', component: FAQ, public: true },
    { path: '/termsconditions', component: TermsConditions, public: true },
    { path: '/privacypolicy', component: PrivacyPolicy, public: true },

    { path: '/dashboard', component: Dashboard, public: false },
];
