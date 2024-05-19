// Function to handle theme setting based on user preference
export const setTheme = () => {
    // Get saved theme from local storage, if available
    const savedTheme = localStorage.getItem('theme');
    // Determine theme based on saved theme or user preference
    const theme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');
    const colorDark = theme === 'night' ? '255, 255, 255' : '10, 10, 20';
    const colorLight = theme === 'night' ? '10, 10, 20' : '255, 255, 255';
    const themeSetting = document.querySelector('[data-settings-theme]');
    const root = document.documentElement;
    // Set theme and color variables
    themeSetting.value = theme;
    root.style.setProperty('--color-dark', colorDark);
    root.style.setProperty('--color-light', colorLight);
};
