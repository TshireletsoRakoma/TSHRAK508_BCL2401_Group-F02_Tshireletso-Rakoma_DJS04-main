// Import necessary functions from other modules
import { handleThemeFormSubmit, handleSearchFormSubmit } from './search.js';
import { handleShowMoreButtonClick, handleBookPreviewClick } from './pagination.js';

// Function to initialize all event listeners
export const initializeEventListeners = () => {
    // Event listener for search cancel button
    document.querySelector('[data-search-cancel]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = false;
    });

    // Event listener for settings cancel button
    document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
        document.querySelector('[data-settings-overlay]').open = false;
    });

    // Event listener for header search button
    document.querySelector('[data-header-search]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    });

    // Event listener for header settings button
    document.querySelector('[data-header-settings]').addEventListener('click', () => {
        document.querySelector('[data-settings-overlay]').open = true;
    });

    // Event listener for list close button
    document.querySelector('[data-list-close]').addEventListener('click', () => {
        document.querySelector('[data-list-active]').open = false;
    });

    // Event listener for theme form submission
    document.querySelector('[data-settings-form]').addEventListener('submit', handleThemeFormSubmit);

    // Event listener for search form submission
    document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);

    // Event listener for show more button
    document.querySelector('[data-list-button]').addEventListener('click', handleShowMoreButtonClick);

    // Event listener for book preview clicks
    document.querySelector('[data-list-items]').addEventListener('click', handleBookPreviewClick);
};
