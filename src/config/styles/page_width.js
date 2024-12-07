export const virtualFullWidth = {
    maxWidth: '100vw',
    minWidth: '320px',  // prevent too narrow on mobile
    backgroundColor: 'var(--background-color, rgba(255,255,255,1))',
    overflow: 'hidden'  // prevent horizontal scrolling
};

export const availableWidth = {
    maxWidth: 'min(1280px, 90vw)',  // responsive width
    minWidth: '320px',
    marginInline: 'auto',  // modern CSS for horizontal centering
    padding: '0 1rem'  // prevent content touching edges
};