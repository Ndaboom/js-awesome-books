/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable space-in-parens */
/* eslint-disable no-trailing-spaces */

let books = [];
const booksContainer = document.getElementById('books-list');
const crudForm = document.querySelector('#crud-form');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');

function renderBooks() {
  let booksList = '';
  books.forEach((item) => {
    booksList += `
      <div class="book" id="book${item.id}">
        <h2>${item.title}</h2>
        <em>- ${item.author}</em><button onclick="removeBook(${item.id})">Remove</button>
      </div>
    `;
  });
  booksContainer.innerHTML = booksList;
}

// Render books if they exist
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
  renderBooks();
}

function addBook(id, title, author) {
  books.push({ id, title, author });
  localStorage.setItem('books', JSON.stringify(books));
  renderBooks();
}

crudForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputTitle.value && inputAuthor.value) {
    const currentBookId = books.length;
    addBook(currentBookId, inputTitle.value, inputAuthor.value);
    inputTitle.value = '';
    inputAuthor.value = '';
  } 
});

function removeBook(id) {
  const selectedBook = document.getElementById('book' + id);
  books = books.map((item) => {
    if (item.id === id) {
      books.splice( item.id, 1);
      selectedBook.remove();
      localStorage.setItem('books', JSON.stringify(books));
    }
  });
}