// Import pages
import Index from '../pages/Index';
import VisionMission from '../pages/VisionMission';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import TermsConditions from '../pages/TCpage';
import PrivacyPolicy from '../pages/PPpage';

export const routes = [
    // public routes
    { path: '/', component: Index, public: true },
    { path: '/login', component: Login, public: true },
    { path: '/visionmission', component: VisionMission, public: true },
    { path: '/termsconditions', component: TermsConditions, public: true },
    { path: '/privacypolicy', component: PrivacyPolicy, public: true },
    { path: '/dashboard', component: Dashboard, public: false },
];
