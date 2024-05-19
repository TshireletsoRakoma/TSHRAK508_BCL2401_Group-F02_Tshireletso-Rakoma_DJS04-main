// Import necessary modules and functions
import { renderInitialBookList, renderFilterOptions } from './render.js';
import { setTheme } from './theme.js';
import { initializeEventListeners } from '../eventHandlers.js';

// Initialize the application
window.addEventListener('load', () => {
    // Set theme based on saved preference
    setTheme();
    // Render initial book list
    renderInitialBookList();
    // Render filter options for genres and authors
    renderFilterOptions();
    // Initialize event listeners
    initializeEventListeners();
});
