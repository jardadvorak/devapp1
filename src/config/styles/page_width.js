export const virtualFullWidth = {
    maxWidth: '100vw',
    minWidth: '320px',  // prevent too narrow on mobile
    backgroundColor: 'var(--background-color, rgba(255,255,255,1))',
    overflow: 'hidden'  // prevent horizontal scrolling
};

export const availableWidth = {
    maxWidth: '1440px',  // responsive width
    minWidth: '320px',
    marginInline: 'auto',  // modern CSS for horizontal centering
    padding: '16px'  // prevent content touching edges
};

export const screenWidthSettings = {
    mobileScreenMaxWidth: 500,  // responsive width
    smallScreenMaxWidth: 800,  // responsive width
};