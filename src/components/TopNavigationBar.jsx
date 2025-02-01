import { colors } from '../config/styles/colors'
import { componentStyles } from '../config/styles/styles'
import { logoImages } from '../img/logos'
import { icons } from '../img/icons'

import React from 'react';

import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import { LANGUAGES } from '../config/constants';

import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from '../components/LanguageSwitch';

function TopNavigationBar({ children }) {
      // Get language context
      const { currentLanguage, setCurrentLanguage, getText } = useLanguage();
  return (
    <>
      <nav style={{ color: 'black', backgroundColor: 'black', alignContent: 'center', width: '100%', minWidth: '320px', padding: '0px'}}>
        <div style={{display: 'flex', color: 'black', alignContent: 'center', backgroundColor: 'black', alignItems: 'center', width: 'min(1440px, 100%)', margin: '0 auto'}}>
          
          {/* Buttons left */}
          <div style={{display: 'flex', color: 'black', backgroundColor: 'transparent', alignItems: 'center', margin: '16px', padding: '0px'}}>
            
            {/* <div style={{color: 'green', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex'}}>
              <img src={logoImages.logo_small_color} height='36px' width='36px' alignItems='center' margin='0px' padding='0px' />
            </div> */}

            {/* <div style={{color: 'green', backgroundColor: 'green', margin: '0px', padding: '0px', display: 'flex'}}>
              <img src={logoImages.label_dark} height='30%' width='30%' alignItems='center' margin='0px' padding='0px' />
            </div> */}

            <div style={{color: 'black', backgroundColor: 'transparent', margin: '0px', padding: '0px', display: 'flex',height: '42px'}}>
              <img src={logoImages.logo_label_yellow_inverted} alignItems='center' margin='0px' padding='0px' />
            </div>

          </div>

          {/* Buttons center */}
          <div style={{color: 'black', backgroundColor: 'white', margin: '16px', alignItems: 'center',  justifyContent: "center", flex: 1}}>
            <div className="font-bold">
              {/* <div style={{alignItems: 'center',  justifyContent: "center", textAlign: "center", flex: 1}}>
                {getText('HEADINGS', 'WELCOME')}
              </div> */}
            </div>
          </div>
          
          {/* Buttons right */}

          <div style={{color: 'green', backgroundColor: 'yellow', margin: '16px', padding: '0px', display: 'flex', gap: '16px'}}>
 
             <div style={{backgroundColor: 'black', width: '100%'}}>
                <LanguageSwitch />
            </div>
            <div style={{color: 'green', backgroundColor: 'white', margin: '0px', padding: '0px', display: 'flex'}}
              onClick={() => {}} // You can pass your signOut handler as a prop
              // className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <img src={icons.icon_logout} height='36px' width='36px' alignItems='center' />
              {/* Sign Out */}
            </div>
 
            <div style={{color: 'green', backgroundColor: 'green', margin: '0px', padding: '0px', display: 'flex'}}
              onClick={() => {}} // You can pass your signOut handler as a prop
              // className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <img src={icons.icon_logout_2} height='36px' width='36px' alignItems='center' />
              {/* Sign Out */}
            </div>         
 
          </div>
        </div>
      </nav>
      {/* <div className="pt-12 min-h-screen"> */}
      <div>
        {children}
      </div>
    </>
  );
}

export default TopNavigationBar;

// import React, { useEffect, useState } from 'react';
// import { useAuthenticator } from '@aws-amplify/ui-react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { useWindowSize } from '../utilities/UseWindowSize';

// function TopNavigationBar() {
//     const { user, signOut } = useAuthenticator((context) => [context.user]);
//     const location = useLocation();
//     const navigate = useNavigate();
  
//     function logoutHandler() {
//       signOut();
//       navigate('/login');
//     }
    
//     const windowSize = useWindowSize();
//     const isSmallScreen = windowSize.width <= 768;
    
    // Import styles
    // const importStyles = styles

    // Define styles
    // const components = {
    //     navbarStyles: {
    //         width: '100%',
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         padding: '1rem',
    //         margin: '0rem',
    //         backgroundColor: '#eeeeee',
    //         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    //     },
    //     navbarLeftButtonContainerStyles: {
    //         display: 'flex',
    //         alignItems: 'center'
    //     },
    //     navbarRightButtonContainerStyles: {
    //         display: 'flex',
    //         alignItems: 'center'
    //     },
    //     navbarFlexStyle: {
    //         display: 'flex',
    //         gap: '1rem'
    //     },
    //     navbarUserNameText: {
    //         marginRight: '1rem',
    //         fontSize: isSmallScreen ? '0.875rem' : '1rem'
    //     }
    // };

    // Logout function
    // const logOut = () => {
    //     if (signOut) {
    //         signOut();
    //         navigate('/login');
    //     }
    // };

    // return (
    //     <>
    //       <nav className="fixed top-0 left-0 w-full h-12 bg-white border-b border-gray-200 shadow-sm z-50">
    //         <div className="h-full px-4 flex items-center justify-between">
    //           {/* Add your navigation content here */}
    //           <div className="flex items-center gap-4">
    //             {/* Logo or brand */}
    //             <div className="font-bold">Your Logo</div>
    //           </div>
    
    //           {/* Navigation links can be conditionally rendered based on auth state */}
    //           <div className="flex items-center gap-4">
    //             {user && (
    //               <button
    //                 onClick={signOut}
    //                 className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
    //               >
    //                 Sign Out
    //               </button>
    //             )}
    //           </div>
    //         </div>
    //       </nav>
    
    //       {/* Content area with top padding to account for fixed navbar */}
    //       <main className="pt-12">
    //         <Outlet />
    //       </main>
    //     </>
    //   );
    // };
    
    // export default TopNavigationBar;

    // <>
    //  <div style={components.navbarStyles}>
    //             <div style={components.navbarLeftButtonContainerStyles}>
    //                 <div style={components.navbarFlexStyle}>
    //                     {/* Add your left-side buttons here */}
        //             </div>
        //         </div>

        //         <div style={components.navbarRightButtonContainerStyles}>
        //             <div style={components.navbarUserNameText}>
        //                 {/* Add user credentials here */}
        //             </div>
        //             <div style={components.navbarFlexStyle}>
        //                 <button onClick={logOut}>Logout</button>
        //             </div>
        //         </div>
        //     </div>

        //     {release.currentRelease && (
        //         <div className="snackbar" style={{
        //             background: '#FFF8E1',
        //             padding: '0.5rem',
        //             textAlign: 'center'
        //         }}>
        //             {release.currentReleaseDescription}
        //         </div>
        //     )}

        //     <Outlet />
        // </>
