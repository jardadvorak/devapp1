export const virtualFullWidth = {
    maxWidth: '100vw',
    minWidth: '320px',  // prevent too narrow on mobile
    // backgroundColor: 'var(--background-color-1, rgba(255,255,255,1))',
    backgroundColor: 'var(--background-color-1)',
    overflow: 'hidden'  // prevent horizontal scrolling
};

export const availableWidth = {
    maxWidth: '1440px',  // responsive width
    minWidth: '320px',
    marginInline: 'auto',  // modern CSS for horizontal centering
    padding: '16px',  // prevent content touching edges
    // backgroundColor: 'var(--background-color-1)'
};

// export const availableHeight = {
    // minHeight: '320px',
    // height: `calc(100vh - ${isMobileScreen ? 56 : isSmallScreen ? 64 : 72}px`,
    // backgroundColor: 'var(--background-color-1)'
// };

export const screenWidthSettings = {
    mobileScreenMaxWidth: 500,  // responsive width
    smallScreenMaxWidth: 800,  // responsive width
};
