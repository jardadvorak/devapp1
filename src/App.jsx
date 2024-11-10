// src/App.jsx
// Main application component with routing configuration

import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from '@aws-amplify/ui-react';

import { Amplify } from "aws-amplify";

import { ROUTES } from './config/constants';
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
});

// PrivateRoute component to protect authenticated routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  
  // Redirect to login if not authenticated
  return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

const App = () => {
  return (
      <BrowserRouter>
          <Authenticator.Provider>
              <Routes>
                  {/* Public routes */}
                  <Route path={ROUTES.INDEX} element={<Index />} />
                  <Route path={ROUTES.LOGIN} element={<Login />} />
                  
                  {/* Protected routes */}
                  <Route 
                      path={ROUTES.DASHBOARD} 
                      element={
                          <PrivateRoute>
                              <Dashboard />
                          </PrivateRoute>
                      } 
                  />
              </Routes>
          </Authenticator.Provider>
      </BrowserRouter>
  );
};

export default App;

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