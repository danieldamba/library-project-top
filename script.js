const myLibrary = [];

class Book {
  constructor(title, author, pages, read, year, note) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.year = year;
    this.note = note;
    this.bookId = crypto.randomUUID();
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function randomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

const randomTitles = [
  'Chronicles of the Time Variance Authority',
  'Lost Prophecies of the Variant King',
  'Bureau Files from the Sacred Timeline',
  'Agents on the Temporal Trail',
  'A Guide to Pruning and Paradoxes',
  'The Broken Timeline Manual',
  'Notes from the TVA Observation Deck',
  "The Variant's Hidden Archive",
  'Rules of Time and Mischief',
  'The Last Case of Agent Ravonna',
];

const randomAuthors = [
  'V. M. He Who Remains',
  'Sylvie Laufeyson',
  'Mobius M. M.',
  'Ravonna Renslayer',
  'Owen D. Leary',
  'OB Ouroboros',
  'Hunter B-15',
  'Loki of Asgard',
  'Timekeeper Casefile',
  'Archivist of the Nexus',
];

function createBook(arrData) {
  if (!arrData) {
    for (let i = 0; i < 10; i += 1) {
      const randomTitle = randomTitles[i];
      const randomAuthor = randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
      const randomPages = Math.floor(Math.random() * 1000) + 1;
      const randomRead = Math.random() < 0.5;
      const randomYear = Math.floor(Math.random() * 4000);
      const randomNotes = Math.floor(Math.random() * 11);

      const newBook = new Book(randomTitle, randomAuthor, randomPages, randomRead, randomYear, randomNotes);
      addBookToLibrary(newBook);
    }
  } else {
    const [title, author, pages, year] = arrData;
    const randomRead = Math.random() < 0.5;
    const randomNotes = Math.floor(Math.random() * 11);

    const newBook = new Book(title, author, Number(pages), randomRead, Number(year), randomNotes);
    addBookToLibrary(newBook);
  }
}

const bookContainer = document.querySelector('.book-parts');

function renderBooks() {
  bookContainer.innerHTML = '';

  myLibrary.forEach((book) => {
    const cardBook = document.createElement('div');
    const picBook = document.createElement('div');
    const titleBook = document.createElement('div');
    const writerBook = document.createElement('div');
    const pageBook = document.createElement('div');
    const yearBook = document.createElement('div');
    const noteBook = document.createElement('div');
    const delButton = document.createElement('button');

    cardBook.className = 'book-card';
    picBook.className = 'book-pic';
    titleBook.className = 'book-title';
    writerBook.className = 'book-writer';
    pageBook.className = 'book-page';
    yearBook.className = 'book-year';
    noteBook.className = 'book-note';
    delButton.className = 'del-button';

    picBook.style.backgroundColor = randomRGBColor();
    titleBook.textContent = book.title;
    writerBook.textContent = `by ${book.author}`;
    pageBook.textContent = `${book.pages} pages`;
    yearBook.textContent = `published in ${book.year}`;
    noteBook.textContent = `noted ${book.note} / 10`;
    delButton.textContent = 'DELETE';
    delButton.dataset.bookId = book.bookId;

    delButton.addEventListener('click', () => deleteBook(book.bookId));

    cardBook.append(picBook, titleBook, writerBook, pageBook, yearBook, noteBook, delButton);
    bookContainer.appendChild(cardBook);
  });
}

function deleteBook(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book.bookId === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    renderBooks();
  }
}

createBook();
renderBooks();

const dialogBook = document.querySelector('dialog');
const bookForm = document.querySelector('form');
const userBookTitle = document.querySelector('#bookTitle');
const userBookAuthor = document.querySelector('#bookAuthor');
const userBookPages = document.querySelector('#bookPages');
const userBookRelease = document.querySelector('#bookRelease');
const cancelAddBtn = document.querySelector('#cancel-addBtn');
const addFirstBtn = document.querySelector('.addBookButton');

addFirstBtn.addEventListener(`click`, (event) => {
  dialogBook.showModal();
})

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = userBookTitle.value.trim();
  const author = userBookAuthor.value.trim();
  const pages = Number(userBookPages.value);
  const year = Number(userBookRelease.value);

  if (!title || !author || !pages || !year) return;

  createBook([title, author, pages, year]);
  renderBooks();
  bookForm.reset();
  dialogBook.close();
});

cancelAddBtn.addEventListener('click', (event) => {
  event.preventDefault();
  bookForm.reset();
  dialogBook.close();
});