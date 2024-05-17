# Book Preview Application

## Overview

This application provides a list of books that can be filtered by title, author, and genre. Users can also set a theme (day/night) which persists across sessions. The application supports pagination to load more books as needed.

## Features

- **Book List**: Displays a list of books with previews.
- **Filtering**: Filter books by title, author, and genre.
- **Pagination**: Load more books with a "Show more" button.
- **Theme Setting**: Toggle between day and night themes.
- **State Persistence**: Filters, theme settings, and pagination state are saved and persist across page refreshes.
- **Dynamic Book Preview**: Click on a book to see detailed information in a modal.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/book-preview-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd book-preview-app
    ```
3. Open `index.html` in your browser to view the application.

## Usage

### Filtering Books

1. Click on the search icon to open the search overlay.
2. Enter the title, select the genre, and/or select the author to filter the books.
3. Click the "Search" button to apply the filters.
4. The list of books will update based on the applied filters.

### Pagination

- Click the "Show more" button at the bottom of the list to load more books.

### Theme Setting

1. Click on the settings icon to open the settings overlay.
2. Select either "Day" or "Night" theme.
3. Click the "Save" button to apply the theme.
4. The selected theme will persist across sessions.

### Book Preview

- Click on a book preview to open a modal with detailed information about the book, including the title, author, publication year, and description.

## Code Structure

- **data.js**: Contains the data for books, authors, genres, and the constant for books per page.
- **main.js**: Contains the main JavaScript code for the application, including components, event handlers, and functions for rendering and updating the UI.

