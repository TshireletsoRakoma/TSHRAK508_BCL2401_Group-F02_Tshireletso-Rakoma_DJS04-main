// Import necessary data from './data.js'
import { books } from '../data.js';
import { updateBookList, filterBooks } from './pagination.js';

// Function to handle form submission for theme settings
export const handleThemeFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);
    const colorDark = theme === 'night' ? '255, 255, 255' : '10, 10, 20';
    const colorLight = theme === 'night' ? '10, 10, 20' : '255, 255, 255';
    const root = document.documentElement;
    // Update theme and color variables
    root.style.setProperty('--color-dark', colorDark);
    root.style.setProperty('--color-light', colorLight);
    // Save theme to local storage
    localStorage.setItem('theme', theme);
    // Close settings overlay
    document.querySelector('[data-settings-overlay]').open = false;
};

// Function to handle form submission for search
export const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    // Filter books based on search criteria and update book list
    updateBookList(filterBooks(filters));
};

// Function to filter books based on search criteria
export const filterBooks = (filters) => {
    const result = [];
    for (const book of books) {
        let genreMatch = filters.genre === 'any';
        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true; }
        }
        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book);
        }
    }
    return result;
};

// Function to update the book list based on filtered results
export const updateBookList = (result) => {
    page = 1;
    matches = result;
    const listItemsContainer = document.querySelector('[data-list-items]');
    listItemsContainer.innerHTML = '';
    // Show message if no books match the filter
    const hasBooks = result.length > 0;
    document.querySelector('[data-list-message]').classList.toggle('list__message_show', !hasBooks);
    // Create new preview elements for filtered books
    const newItemsFragment = document.createDocumentFragment();
    result.slice(0, BOOKS_PER_PAGE).forEach(book => {
        const previewElement = document.createElement('book-preview');
        previewElement.dataset.id = book.id;
        previewElement.dataset.author = book.author;
        previewElement.dataset.image = book.image;
        previewElement.dataset.title = book.title;
        newItemsFragment.appendChild(previewElement);
    });
    // Append new preview elements to the list items container
    listItemsContainer.appendChild(newItemsFragment);
    // Update remaining book count for "Show more" button
    updateShowMoreButton();
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close search overlay
    document.querySelector('[data-search-overlay]').open = false;
};
