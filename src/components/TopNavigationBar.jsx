import React, { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../utilities/UseWindowSize';

export function TopNavigationBar() {
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    
    const navigate = useNavigate();
    const windowSize = useWindowSize();
    const isSmallScreen = windowSize.width <= 768;
    
    // State for storing release information
    const [release, setRelease] = useState({
        currentRelease: '',
        currentReleaseDescription: ''
    });

    // Define styles
    const components = {
        navbarStyles: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        navbarLeftButtonContainerStyles: {
            display: 'flex',
            alignItems: 'center'
        },
        navbarRightButtonContainerStyles: {
            display: 'flex',
            alignItems: 'center'
        },
        navbarFlexStyle: {
            display: 'flex',
            gap: '1rem'
        },
        navbarUserNameText: {
            marginRight: '1rem',
            fontSize: isSmallScreen ? '0.875rem' : '1rem'
        }
    };

    // Logout function
    const logOut = () => {
        if (signOut) {
            signOut();
            navigate('/login');
        }
    };

    return (
        <>
            <div style={components.navbarStyles}>
                <div style={components.navbarLeftButtonContainerStyles}>
                    <div style={components.navbarFlexStyle}>
                        {/* Add your left-side buttons here */}
                    </div>
                </div>

                <div style={components.navbarRightButtonContainerStyles}>
                    <div style={components.navbarUserNameText}>
                        {/* Add user credentials here */}
                    </div>
                    {/* <div style={components.navbarFlexStyle}>
                        <button onClick={logOut}>Logout</button>
                    </div> */}
                </div>
            </div>

            {release.currentRelease && (
                <div className="snackbar" style={{
                    background: '#FFF8E1',
                    padding: '0.5rem',
                    textAlign: 'center'
                }}>
                    {release.currentReleaseDescription}
                </div>
            )}

            <Outlet />
        </>
    );
}