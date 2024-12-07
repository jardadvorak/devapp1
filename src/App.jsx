// src/App.jsx
// Main application component with routing configuration

import { useState, useEffect } from "react";
import { Button, Heading, Flex, View, Grid, Divider} from "@aws-amplify/ui-react";

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from '@aws-amplify/ui-react';

import { Amplify } from "aws-amplify";

import { ROUTES } from './config/constants';
import { LanguageProvider } from './contexts/LanguageContext';

// Import utilities
import ErrorBoundary from "./utilities/ErrorBoundary";
// import { useDebugClipboard } from "./utilities/NavigationTools";
// import { useScrollToTop } from "./utilities/NavigationTools";
import { RequireAuth } from "./utilities/RequireAuth";
import { TopBarClipboardProvider } from "./utilities/TopBarClipboardcontext";
import { useWindowSize } from "./utilities/UseWindowSize";

// Import components
import TopNavigationBar from "./components/TopNavigationBar";

// Import routes
import { routes } from "./routes/routesConfig";

// Import pages
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

// Configure Amplify with your AWS settings
Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
})

// PrivateRoute component to protect authenticated routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  
  // Redirect to login if not authenticated
  return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

// Reads 'routes/routesConfig' and declares routes
function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <TopNavigationBar>
      <Routes>
        {/* <Route path='/' element={<TopNavigationBar />}> */}
          {routes.map(({ path, component: Component, public: isPublic }) => (
            <Route
              key={path}
              path={path}
              element={
                isPublic ? (
                  <Component />
                ) : (
                  <RequireAuth>
                    <Component />
                  </RequireAuth>
                )
              }
            />
          ))}
        {/* </Route> */}
      </Routes>
      </TopNavigationBar>
    </BrowserRouter>
  );
}

const App = () => {
  
  // Basic language utilities...
  // Add functionality to read the language of the browser and take it over for the public page...
  // In the private page, we would take the user's preferred language...
  const [currentLang, setCurrentLang] = useState('cz');
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className="disable-text-selection">
            {/* <BrowserRouter> */}
            <TopBarClipboardProvider>
            <Authenticator.Provider>
            <ErrorBoundary>
            <LanguageProvider>


              {/* <Routes> */}
                {/* Public routes */}
                {/* <Route path={ROUTES.INDEX} element={<Index />} />
                <Route path={ROUTES.LOGIN} element={<Login />} /> */}
                  
                {/* Protected routes */}
                {/* <Route 
                  path={ROUTES.DASHBOARD} 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
              </Routes> */}

                <ApplicationRoutes />

       </LanguageProvider>
       </ErrorBoundary>
       </Authenticator.Provider>
       </TopBarClipboardProvider>
       {/* </BrowserRouter> */}
       </div>
  );
};

export default App;

// ========================================================================================================
// return (
//   <div className="disable-text-selection">
//     <BrowserRouter>
//       <ErrorBoundary>

//         <LanguageProvider>
//           <Authenticator.Provider>
//             <Routes>
//               {/* Public routes */}
//               <Route path={ROUTES.INDEX} element={<Index />} />
//               <Route path={ROUTES.LOGIN} element={<Login />} />
                
//               {/* Protected routes */}
//               <Route 
//                 path={ROUTES.DASHBOARD} 
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 } 
//               />
//             </Routes>
//           </Authenticator.Provider>
//         </LanguageProvider>
//       </ErrorBoundary>
//     </BrowserRouter>
//   </div>
// );
// };


// ========================================================================================================
// export default function App() {
//   const [userprofiles, setUserProfiles] = useState([]);
//   const { signOut } = useAuthenticator((context) => [context.user]);

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   async function fetchUserProfile() {
//     const { data: profiles } = await client.models.UserProfile.list();
//     setUserProfiles(profiles);
//   }

//   return (
//     <Flex
//       className="App"
//       justifyContent="center"
//       alignItems="center"
//       direction="column"
//       width="70%"
//       margin="0 auto"
//     >
//       <Heading level={1}>My Profile</Heading>

//       <Divider />

//       <Grid
//         margin="3rem 0"
//         autoFlow="column"
//         justifyContent="center"
//         gap="2rem"
//         alignContent="center"
//       >
//         {userprofiles.map((userprofile) => (
//           <Flex
//             key={userprofile.id || userprofile.email}
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             gap="2rem"
//             border="1px solid #ccc"
//             padding="2rem"
//             borderRadius="5%"
//             className="box"
//           >
//             <View>
//               <Heading level="3">{userprofile.email}</Heading>
//             </View>
//           </Flex>
//         ))}
//       </Grid>
//       <Button onClick={signOut}>Sign Out</Button>
//     </Flex>
//   );
// }