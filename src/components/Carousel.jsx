import React, { useState, useRef } from 'react';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';
import { icons } from '../img/icons';

function Carousel({ cards, onCardClick }) {
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
                            width: isMobileScreen ? 32 : isSmallScreen ? 36 : 40,
                            height: isMobileScreen ? 32 : isSmallScreen ? 36 : 40,
                            top: `calc(50% - ${isMobileScreen ? 16 : isSmallScreen ? 18 : 20}px)`,
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            ...componentStyles(isMobileScreen, isSmallScreen, hoveredButton === 'left', false).iconButtonStyle,
                            backgroundColor: 'var(--background-color-2)'
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
                            top: `calc(50% - ${isMobileScreen ? 16 : isSmallScreen ? 18 : 20}px)`,
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
                    gap: isMobileScreen ? 10 : isSmallScreen ? 12 : 12 ,
                    padding: isMobileScreen ? '6px 0' : isSmallScreen ? '10px 0' : '10px 0' ,
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE/Edge
                    // '&::-webkit-scrollbar': { // Chrome/Safari
                    '&::WebkitSrollbar': { // Chrome/Safari
                    display: 'none'
                    }
                }}
            >
                {cards.map((card) => {
                    const isDisabled = card.Enabled === false;
                    const isHovered = hoveredCardId === card.id && !isDisabled;
                    const cardStyles = componentStyles(isMobileScreen, isSmallScreen, isHovered, isDisabled);

                    // Calculate number of cards per row
                    const cardsPerRow = isMobileScreen ? 2 : isSmallScreen ? 3 : 4;
                    // Calculate gap space total per row (gaps between cards)
                    const gapSpace = (cardsPerRow - 1) * (isMobileScreen ? 12 : isSmallScreen ? 14 : 16);
                    // Next card
                    const nextCard = cards.length <= cardsPerRow ? 0 : (isMobileScreen ? 24 : isSmallScreen ? 32 : 32)
                    // Calculate card width as percentage to fill row evenly
                    const cardWidth = `calc((100% - ${nextCard}px - ${gapSpace}px) / ${cardsPerRow})`;
                
                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => !isDisabled && setHoveredCardId(card.id)}
                            onMouseLeave={() => !isDisabled && setHoveredCardId(null)}
                            onClick={() => !isDisabled && onCardClick && onCardClick(card)}
                            style={{
                                ...cardStyles.normalCardStyles,
                                width: cardWidth,
                                padding: isMobileScreen ? '10px' : isSmallScreen ? '12px' : '12px',
                                flexShrink: 0,
                                cursor: isDisabled ? 'not-allowed' : 'pointer',
                                color: isDisabled ? 'var(--button-text-disabled)' : 'var(--text-color-normal)'
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
