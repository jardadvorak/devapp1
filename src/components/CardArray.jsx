import React, { useState } from 'react';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { availableWidth, screenWidthSettings, virtualFullWidth } from '../config/styles/page_width';

function CardArray({ cards }) {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && 
                         windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobileScreen ? 10 : isSmallScreen ? 12 : 12 }}>
            {cards.map((card) => {
                const isHovered = hoveredCardId === card.id;
                const cardStyles = componentStyles(isMobileScreen, isSmallScreen, isHovered, false);

                // Calculate number of cards per row
                const cardsPerRow = isMobileScreen ? 2 : isSmallScreen ? 3 : 4;
                // Calculate gap space total per row (gaps between cards)
                const gapSpace = (cardsPerRow - 1) * (isMobileScreen ? 12 : isSmallScreen ? 14 : 16);
                // Calculate card width as percentage to fill row evenly
                const cardWidth = `calc((100% - ${gapSpace}px) / ${cardsPerRow})`;

                return (
                    <div
                        key={card.id}
                        onMouseEnter={() => setHoveredCardId(card.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                        style={{
                            ...cardStyles.normalCardStyles,
                            width : cardWidth,
                            // minWidth: isMobileScreen ? 240 : isSmallScreen ? 260 : 280,
                            // maxWidth: isMobileScreen ? 320 : isSmallScreen ? 340 : 360,
                            padding: isMobileScreen ? 8 : isSmallScreen ? 10 : 12,
                            cursor: 'pointer'
                        }}
                    >
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CardArray;
