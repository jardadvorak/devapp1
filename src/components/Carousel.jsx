import React, { useState, useRef } from 'react';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';
import { icons } from '../img/icons';

function Carousel({ cards }) {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [showControls, setShowControls] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(null);
    const containerRef = useRef(null);
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && 
                         windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = 320; // card width + gap
            const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            containerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => {
                setShowControls(false);
                setHoveredButton(null);
            }}
        >
            {/* Navigation Buttons */}
            {showControls && (
                <>
                    <button
                        onClick={() => scroll('left')}
                        onMouseEnter={() => setHoveredButton('left')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            ...componentStyles(isMobileScreen, isSmallScreen, hoveredButton === 'left', false).iconButtonStyle,
                            backgroundColor: 'var(--background-color-2)',
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        <img 
                            src={icons.chevronLeft} 
                            alt="Previous"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        onMouseEnter={() => setHoveredButton('right')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            ...componentStyles(isMobileScreen, isSmallScreen, hoveredButton === 'right', false).iconButtonStyle,
                            backgroundColor: 'var(--background-color-2)',
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        <img 
                            src={icons.chevronRight} 
                            alt="Next"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                </>
            )}
            
            {/* Cards Container */}
            <div 
                ref={containerRef}
                style={{ 
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '20px',
                    padding: '10px 0',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE/Edge
                    '&::-webkit-scrollbar': { // Chrome/Safari
                        display: 'none'
                    }
                }}
            >
                {cards.map((card) => {
                    const isHovered = hoveredCardId === card.id;
                    const cardStyles = componentStyles(isMobileScreen, isSmallScreen, isHovered, false);

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCardId(card.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                            style={{
                                ...cardStyles.normalCardStyles,
                                width: '300px',
                                flexShrink: 0,
                                padding: '20px',
                                cursor: 'pointer'
                            }}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;
