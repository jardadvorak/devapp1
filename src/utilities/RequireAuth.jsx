// RequireAuth.jsx

// Import necessary routing hooks from react-router-dom
// Navigate is used for programmatic navigation
// useLocation helps us know where we currently are in the app
import { useLocation, Navigate } from 'react-router-dom'

// Import the authentication hook from AWS Amplify's UI library
// This hook provides information about the current authentication state
import { useAuthenticator } from '@aws-amplify/ui-react'

// Define a component called RequireAuth that takes children as a prop
// This is a Higher Order Component (HOC) used to protect routes
export function RequireAuth({ children }) {

    // Get the current location object from react-router
    // This includes information like pathname, search params, etc.
    const location = useLocation()

    // Use AWS Amplify's authentication hook to get the current route state
    // The callback function specifies we want to watch the route value
    // Note: This is a slightly unusual way to destructure from useAuthenticator
    // More common would be: const { route } = useAuthenticator()
    const { route } = useAuthenticator((context) => [context.route])

    // Check if the user is not authenticated
    // route can be 'authenticated', 'signing-in', 'sign-up', etc.
    if (route !== 'authenticated') {
        // If not authenticated, redirect to the home page ('/')
        // Include the current location in state so we can redirect back after login
        // 'replace' means this navigation replaces the current entry in history
        return <Navigate to='/' state={{ from: location }} replace />
    }

    // If authenticated, render the protected content (children)
    return children
}