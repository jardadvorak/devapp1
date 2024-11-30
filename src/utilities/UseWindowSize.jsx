// Import necessary hooks from React
import { useState, useEffect } from 'react'

// Define a helper function to safely get window dimensions
// This protects against server-side rendering where window is undefined
const getWindowSize = () => {
   // Check if we're in a browser environment where window exists
   if (typeof window === 'undefined') {
       // Return default dimensions if window is not available
       return {
           width: 0,
           height: 0
       }
   }
   // If window exists, return actual dimensions
   return {
       width: window.innerWidth,
       height: window.innerHeight
   }
}

// Define a custom hook called useWindowSize
// Custom hooks in React must start with 'use'
export const useWindowSize = () => {
   // Initialize state using our helper function
   // This ensures safe initialization even during server-side rendering
   const [windowSize, setWindowSize] = useState(getWindowSize())

   // Set up an effect to handle window resizing
   useEffect(() => {
       // Define the resize handler function
       // This function updates the state with new dimensions whenever the window is resized
       const handleResize = () => {
           // Use the helper function to safely get new dimensions
           setWindowSize(getWindowSize())
       }

       // Only add event listener if window exists
       // This is another safety check for server-side rendering
       if (typeof window !== 'undefined') {
           // Add the event listener to the window
           // This will call handleResize whenever the window size changes
           window.addEventListener('resize', handleResize)

           // Cleanup function that removes the event listener
           // This is important to prevent memory leaks
           // It runs when the component using this hook unmounts
           return () => {
               window.removeEventListener('resize', handleResize)
           }
       }
   }, []) // Empty dependency array means this effect runs once on mount

   // Return the current window size
   // Components using this hook will receive an object with width and height
   return windowSize
}