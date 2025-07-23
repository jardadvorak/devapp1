// src/pages/Dashboard.jsx
// Internal dashboard page for authenticated users

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import LanguageSwitch from '../components/LanguageSwitch';

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';

const Dashboard = () => {
    // State for storing user profile data
    const [userProfiles, setUserProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hooks for authentication and navigation
    const { signOut, user, authStatus } = useAuthenticator((context) => [
        context.user,
        context.authStatus
    ]);
    
    const navigate = useNavigate();
    const location = useLocation();

    // Get language context and functions
    const { setCurrentLanguage, getText } = useLanguage();
    
    // Initialize Amplify client for data operations
    const client = generateClient({
        authMode: 'userPool',
    });

    // Effect to set language based on navigation state
    useEffect(() => {
        const language = location.state?.language;
        if (language) {
            setCurrentLanguage(language);
        }
    }, [location, setCurrentLanguage]);

    // Redirect to login if not authenticated
    // useEffect(() => {
    //     if (authStatus === 'unauthenticated') {
    //         navigate(ROUTES.LOGIN);
    //     }
    // }, [authStatus, navigate]);

    // Effect to fetch user profile data on component mount
    useEffect(() => {
        fetchUserProfile();
    }, []);

    // Function to fetch user profile data from Amplify
    async function fetchUserProfile() {
        try {
            setLoading(true);
            setError(null);
            
            console.log('Fetching user profiles...');
            const { data: profiles, errors } = await client.models.UserProfile.list();
            
            if (errors && errors.length > 0) {
                console.error('GraphQL errors:', errors);
                throw new Error(`GraphQL errors: ${errors.map(e => e.message).join(', ')}`);
            }
            
            console.log('User profiles fetched successfully:', profiles?.length || 0);
            setUserProfiles(profiles || []);
        } catch (error) {
            console.error('Error fetching user profiles:', error);
            
            // More detailed error logging
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.error('Detailed error info:', {
                message: errorMessage,
                graphQLErrors: error?.errors,
                networkError: error?.networkError,
                authStatus,
                user: user?.username
            });
            
            setError(getText('ERRORS', 'FETCH_PROFILES') || `Failed to fetch profiles: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    }

    // Handler for sign out - signs out and redirects to landing page
    const handleSignOut = async () => {
        try {
            await signOut();
            navigate(ROUTES.INDEX);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
            </div>
        );
    }
 
     return (
        <div style={{backgroundColor: 'red'}}>
            <main>
                <div style={{...virtualFullWidth, backgroundColor: 'white'}}>
                    <div style={{...availableWidth, backgroundColor: 'orange', color: 'red'}}>        
                        <div className="absolute top-4 right-4" color='red'>
                            <LanguageSwitch />
                        </div>

                        <h1 className="text-3xl mb-8" color='green' >{getText('HEADINGS', 'DASHBOARD')}</h1>
                        <h2 className="text-3xl mb-8" color='green' >{getText('HEADINGS', 'DASHBOARD')}</h2>
            
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                <strong>Error:</strong> {error}
                                <button 
                                    onClick={fetchUserProfile}
                                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {userProfiles
                    //    .filter((profile) => profile.isActive) // Only active user(s)
                       .map((profile) => (
                              <div key={profile.id || profile.email}>
                               <h3 className="text-xl">ID: {profile.id}</h3>
                               <p>Email: {profile.email}</p>
                               <p>Password: {profile.password}</p>
                              </div>
                            ))}

                        {/* Sign Out Button */}
                        <Button onClick={handleSignOut}>
                            {getText('BUTTONS', 'SIGNOUT')}
                        </Button>
                 </div>
            </div>
        </main>
    </div>

    );
};

export default Dashboard;
