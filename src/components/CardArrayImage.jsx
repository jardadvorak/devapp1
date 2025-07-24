import React, { useState } from 'react';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { availableWidth, screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

function CardArrayImage({ cards, onCardClick }) {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && 
                         windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobileScreen ? 10 : isSmallScreen ? 12 : 12 }}>
            {cards.map((card) => {
                const isDisabled = card.Enabled === false;
                const isHovered = hoveredCardId === card.id && !isDisabled;
                const cardStyles = componentStyles(isMobileScreen, isSmallScreen, isHovered, isDisabled);

                // Calculate number of cards per row
                const cardsPerRow = isMobileScreen ? 2 : isSmallScreen ? 3 : 4;
                // Calculate gap space total per row (gaps between cards)
                const gapSpace = (cardsPerRow - 1) * (isMobileScreen ? 12 : isSmallScreen ? 14 : 16);
                // Calculate card width as percentage to fill row evenly
                const cardWidth = `calc((100% - ${gapSpace}px) / ${cardsPerRow})`;

                return (
                    <div
                        key={card.id}
                        onMouseEnter={() => !isDisabled && setHoveredCardId(card.id)}
                        onMouseLeave={() => !isDisabled && setHoveredCardId(null)}
                        onClick={() => !isDisabled && onCardClick && onCardClick(card)}
                        style={{
                            ...cardStyles.normalCardStyles,
                            width : cardWidth,
                            // minWidth: isMobileScreen ? 240 : isSmallScreen ? 260 : 280,
                            // maxWidth: isMobileScreen ? 320 : isSmallScreen ? 340 : 360,
                            padding: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            color: isDisabled ? 'var(--button-text-disabled)' : 'var(--text-color-normal)',
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <div style={{
                            width: '100%', 
                            height: 48, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}>
                            <img 
                                src={card.image} 
                                alt={card.title} 
                                style={{
                                   width: isMobileScreen ? 40 : isSmallScreen ? 48 : 56, 
                                   height: isMobileScreen ? 40 : isSmallScreen ? 48 : 56, 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    filter: isDisabled ? 'grayscale(100%) contrast(0.8)' : 'none'
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CardArrayImage;
