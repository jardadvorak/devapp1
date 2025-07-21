// src/pages/TestContentExercise.jsx
// Static TestContentExercise page

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PublicBannerLean from '../components/PublicBanner';
import PublicFooterLean from '../components/PublicFooter';
import CardArray from '../components/CardArray';
import Carousel from '../components/Carousel';
import EuropeanCapitalsQuiz from '../pagesstaticcontent/EuropeanCapitalsQuiz';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
//import { styles} from '../config/styles/styles'
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images'

const TestContentExercise = () => {
    // Get language context
    const { getText } = useLanguage();
    
    // Get exercise type from URL parameters
    const { type } = useParams();

    // Exercise mapping - maps exercise types to their components
    const exerciseComponents = {
        'european-capitals': EuropeanCapitalsQuiz,
        // Future exercises can be added here
        // 'math-basics': MathBasicsQuiz,
        // 'history-quiz': HistoryQuiz,
    };

    // Get the appropriate exercise component
    const ExerciseComponent = exerciseComponents[type];

    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;
    const isLargeScreen = windowSize.width >= screenWidthSettings.smallScreenMaxWidth;

    //Load styles
    const styles = componentStyles(isMobileScreen, isSmallScreen);

    const availableHeight = `calc(100vh - ${
        // Top navigation
        (isMobileScreen ? 56 : isSmallScreen ? 64 : 72) +
        // Banner
        (isMobileScreen ? 68 : isSmallScreen ? 88 : 116) +
        // Footer
        (isMobileScreen ? 76 : isSmallScreen ? 82 : 80)
    }px)`;

    // Set-up top bar
    //useNavigationConfig(
    //    route === 'authenticated' ? user.username : '', '', settings.leftButtons, settings.rightButtons);

    return (
        <div style={{minHeight: `calc(100vh - ${isMobileScreen ? 56 : isSmallScreen ? 64 : 72}px)`, display: 'flex', flexDirection: 'column'}}>
        
        {/* <PublicBannerLean /> */}

        <main style={{ flexGrow: 1 }}>
            <div style={{...virtualFullWidth, backgroundColor: `var(--background-color-1)`}}>
                <div style={{...availableWidth, minHeight: availableHeight, backgroundColor: 'transparent', color: `var(--text-color-normal)`}}>        

                    <div style={styles.mainDivStyle}>
                            <div style={styles.simpleBarStyle}>

                            {ExerciseComponent ? (
                                <ExerciseComponent />
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <h2>Exercise not found</h2>
                                    <p>The requested exercise "{type}" is not available.</p>
                                    <Link to="/testcontent" style={{ color: 'var(--text-color-link)' }}>
                                        ← Back to exercises
                                    </Link>
                                </div>
                            )}

                            </div>
                        </div>

                </div>
            </div>
        </main>

        <PublicFooterLean />

        </div>
    );
};

export default TestContentExercise;
