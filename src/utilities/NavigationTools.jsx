// Import necessary hooks from React
// useEffect runs after render
// useLayoutEffect runs synchronously after all DOM mutations
import { useEffect, useLayoutEffect } from 'react';

// Custom hook for debugging clipboard contents
// Takes clipboard as a parameter to monitor its changes
export const useDebugClipboard = (clipboard) => {
    // Set up an effect that runs whenever clipboard changes
    // This is useful during development for monitoring clipboard state
    useEffect(() => {
        // Log the current state of the clipboard to the console
        console.log('Clipboard:', clipboard);
    }, [clipboard]); // Re-run effect when clipboard changes
};

// Custom hook for scrolling to top of page
// Takes an array of dependencies and isLoading flag as parameters
// dependencies = [] by default (empty array)
export const useScrollToTop = (dependencies = [], isLoading) => {
    // Use useLayoutEffect instead of useEffect to avoid visual jank
    // This runs synchronously after DOM mutations but before browser paint
    useLayoutEffect(() => {
        // Check if content is still loading
        // Only scroll if loading is complete
        if (!isLoading) {
            // Scroll to top of window
            window.scrollTo({
                top: 0,      // Scroll to top (0 pixels from top)
                left: 0,     // Keep horizontal scroll at start
                behavior: 'smooth'  // Enable smooth scrolling animation
            });
        }
    // Spread dependencies array and include isLoading in dependencies
    // Effect will re-run when any dependency or isLoading changes
    }, [...dependencies, isLoading]);
};
