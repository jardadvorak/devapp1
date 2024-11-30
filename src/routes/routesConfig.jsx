// Import pages
import Index from '../pages/Index';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export const routes = [
    // public routes
    { path: '/', component: Index, public: true },
    { path:'/login', component: Login, public: true },
    { path: '/dashboard', component: Dashboard, public: false },

];