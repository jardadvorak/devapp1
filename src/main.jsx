// src/main.jsx
// Entry point of the application
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/styles/fonts.css';
import './index.css';
import '@aws-amplify/ui-react/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


