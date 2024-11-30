// TopBarClipboardContext.jsx

// Import necessary hooks and functions from React
// createContext is used to create a new context
// useContext is a hook to consume context
// useState is for managing state
import React, { createContext, useContext, useState } from 'react';

// Create a new context for managing top bar clipboard state
// Note: It's common practice to provide a default value here, though none is provided
const TopBarClipboardContext = createContext();

// Custom hook to easily access this context from any component
// This saves consumers from having to import useContext and the context object separately
export function useTopBarClipboardContext() {
    // Return the current context value
    // If used outside of a Provider, this will return undefined
    return useContext(TopBarCLipboardContext);
}

// Provider component that will wrap parts of the app that need access to this context
// Takes children as a prop - these are the components that will have access to the context
export function TopBarClipboardProvider({ children }) {
    // State for managing left-side buttons in the top bar
    // Default value is an empty array
    const [leftButtons, setLeftButtons] = useState([]);

    // State for managing right-side buttons in the top bar
    // Default value is an empty array
    const [rightButtons, setRightButtons] = useState([]);

    // State for managing text credentials (purpose not clear from the code)
    // Default value is an empty array
    const [textCredentials, setTextCredentials] = useState([]);

    // State for managing clipboard content
    // Default value is an empty object
    const [clipboard, setClipboard] = useState({});

    // Render the context provider with all the state values and their setters
    return (
        <TopBarClipboardContext.Provider value={
            {
                // Provide all state values and their setter functions
                // This makes them available to any component that uses the context
                leftButtons, setLeftButtons,
                rightButtons, setRightButtons,
                textCredentials, setTextCredentials,
                clipboard, setClipboard
            }
        }>
            {/* Render any children components */}
            {children}

        </TopBarClipboardContext.Provider>
    );
}