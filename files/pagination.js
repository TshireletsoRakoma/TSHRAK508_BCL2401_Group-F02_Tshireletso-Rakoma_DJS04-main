// Import necessary data from './data.js'
import { books, BOOKS_PER_PAGE } from '../data.js';
import { createPreviewElement } from './render.js';

// Define variables for pagination
let page = 1;
let matches = books;

// Function to update the remaining book count for "Show more" button
export const updateShowMoreButton = () => {
    const remainingCount = Math.max(matches.length - (page * BOOKS_PER_PAGE), 0);
    const showMoreButton = document.querySelector('[data-list-button]');
    // Update button text with remaining book count
    showMoreButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remainingCount})</span>
    `;
    // Disable button if no remaining books
    showMoreButton.disabled = remainingCount < 1;
};

// Function to handle click event on "Show more" button for pagination
export const handleShowMoreButtonClick = () => {
    const fragment = document.createDocumentFragment();
    matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE).forEach(book => {
        const previewElement = document.createElement('book-preview');
        previewElement.dataset.id = book.id;
        previewElement.dataset.author = book.author;
        previewElement.dataset.image = book.image;
        previewElement.dataset.title = book.title;
        fragment.appendChild(previewElement);
    });
    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
    // Update remaining book count for "Show more" button
    updateShowMoreButton();
    // Store page state in local storage
    localStorage.setItem('page', page);
};

// Function to handle click event on book previews
export const handleBookPreviewClick = (event) => {
    const previewId = event.target.closest('.preview')?.dataset.preview;
    const activeBook = books.find(book => book.id === previewId);
    if (activeBook) {
        document.querySelector('[data-list-active]').open = true;
        const { image, title, author, published, description } = activeBook;
        const listBlur = document.querySelector('[data-list-blur]');
        const listImage = document.querySelector('[data-list-image]');
        const listTitle = document.querySelector('[data-list-title]');
        const listSubtitle = document.querySelector('[data-list-subtitle]');
        const listDescription = document.querySelector('[data-list-description]');
        listBlur.src = image;
        listImage.src = image;
        listTitle.innerText = title;
        listSubtitle.innerText = `${authors[author]} (${new Date(published).getFullYear()})`;
        listDescription.innerText = description;
    }
};
