import React, { useState } from 'react';
import { componentStyles } from '../config/styles/styles';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';

function CardArray({ cards }) {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && 
                         windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {cards.map((card) => {
                const isHovered = hoveredCardId === card.id;
                const cardStyles = componentStyles(isMobileScreen, isSmallScreen, isHovered, false);

                return (
                    <div
                        key={card.id}
                        onMouseEnter={() => setHoveredCardId(card.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                        style={{
                            ...cardStyles.normalButtonStyles,
                            width: '300px',
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
    );
}

export default CardArray;
