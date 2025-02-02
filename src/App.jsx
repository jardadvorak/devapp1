// src/App.jsx
// Main application component with routing configuration

import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";

import { ROUTES } from './config/constants';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from "./utilities/ErrorBoundary";
import { RequireAuth } from "./utilities/RequireAuth";
import { TopBarClipboardProvider } from "./utilities/TopBarClipboardcontext";
import TopNavigationBar from "./components/TopNavigationBar";
import { routes } from "./routes/routesConfig";

import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

// Import pages
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

// Configure Amplify with your AWS settings
Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

// PrivateRoute component to protect authenticated routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

// Reads 'routes/routesConfig' and declares routes
// Application Routes component
function ApplicationRoutes() {
  return (
    <Routes>
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
    </Routes>
  );
}

const App = () => {
  const [currentLang, setCurrentLang] = useState('cz');
  
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className="disable-text-selection">
      <BrowserRouter>
        <ThemeProvider>
          <TopBarClipboardProvider>
            <Authenticator.Provider>
              <ErrorBoundary>
                <LanguageProvider>
                  <TopNavigationBar />
                  <ApplicationRoutes />
                </LanguageProvider>
              </ErrorBoundary>
            </Authenticator.Provider>
          </TopBarClipboardProvider>
        </ThemeProvider>
      </BrowserRouter>
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
