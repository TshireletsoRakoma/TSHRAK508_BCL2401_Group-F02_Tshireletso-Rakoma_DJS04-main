// Import necessary data from './data.js'
import { books, authors, genres, BOOKS_PER_PAGE } from '../data.js';

// Define BookPreview web component
class BookPreview extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const { author, id, image, title } = this.dataset;

        this.innerHTML = `
            <style>
                /* Add your CSS styles for the preview here */
                .preview {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    cursor: pointer;
                }
                .preview__image {
                    width: 100px;
                    height: 150px;
                    object-fit: cover;
                    margin-right: 20px;
                }
                .preview__info {
                    flex: 1;
                }
                .preview__title {
                    margin: 0;
                    font-size: 18px;
                }
                .preview__author {
                    margin: 5px 0;
                    font-size: 14px;
                    color: #666;
                }
            </style>
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${authors[author]}</div>
                </div>
            </button>
        `;
    }
}

// Define custom element for BookPreview
customElements.define('book-preview', BookPreview);

// Function to render initial book list
export const renderInitialBookList = () => {
    const startingFragment = document.createDocumentFragment();
    // Loop through initial matches and create preview elements
    matches.slice(0, BOOKS_PER_PAGE).forEach(book => {
        const previewElement = document.createElement('book-preview');
        previewElement.dataset.id = book.id;
        previewElement.dataset.author = book.author;
        previewElement.dataset.image = book.image;
        previewElement.dataset.title = book.title;
        startingFragment.appendChild(previewElement);
    });
    // Append the starting fragment to the list items container
    document.querySelector('[data-list-items]').appendChild(startingFragment);
};

// Function to render filter options for genres and authors
export const renderFilterOptions = () => {
    renderOptions('[data-search-genres]', genres);
    renderOptions('[data-search-authors]', authors);
};

// Function to render options for select elements
const renderOptions = (selector, options) => {
    const fragment = document.createDocumentFragment();
    // Create a default "All" option
    const defaultOption = createOptionElement('any', 'All');
    fragment.appendChild(defaultOption);
    // Create options for each genre or author
    Object.entries(options).forEach(([id, name]) => {
        fragment.appendChild(createOptionElement(id, name));
    });
    // Append options to the select element
    document.querySelector(selector).appendChild(fragment);
};

// Function to create an option element
const createOptionElement = (value, text) => {
    const element = document.createElement('option');
    element.value = value;
    element.innerText = text;
    return element;
};
