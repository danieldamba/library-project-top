
const myLibrary = [];

function Book(title, author, pages, read, year, note) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.year = year;
  this.note = note;
  this.bookId = crypto.randomUUID();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
};

function randomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let randomTitles = [
  "Chronicles of the Time Variance Authority",
  "Lost Prophecies of the Variant King",
  "Bureau Files from the Sacred Timeline",
  "Agents on the Temporal Trail",
  "A Guide to Pruning and Paradoxes",
  "The Broken Timeline Manual",
  "Notes from the TVA Observation Deck",
  "The Variant's Hidden Archive",
  "Rules of Time and Mischief",
  "The Last Case of Agent Ravonna"
];

let randomAuthors = [
  "V. M. He Who Remains",
  "Sylvie Laufeyson",
  "Mobius M. M.",
  "Ravonna Renslayer",
  "Owen D. Leary",
  "OB Ouroboros",
  "Hunter B-15",
  "Loki of Asgard",
  "Timekeeper Casefile",
  "Archivist of the Nexus"
];

for (let i = 0; i < 10; i++) {
  let randomTitle = randomTitles[i];
  let randomAuthor = randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
  let randomPages = Math.floor(Math.random() * 1000) + 1;
  let randomRead = Math.random() < 0.5;
  let randomYear = Math.floor(Math.random() * 4000);
  let randomNotes = Math.floor(Math.random() * 11);

  const newBook = new Book(randomTitle, randomAuthor, randomPages, randomRead, randomYear, randomNotes);
  addBookToLibrary(newBook);
}


const bookContainer = document.querySelector(`.book-parts`);

for (let i = 0; i < myLibrary.length; i++) {
  let currentBook = myLibrary[i];

  const cardBook = document.createElement(`div`);
  const picBook = document.createElement(`div`);
  const titleBook = document.createElement(`div`);
  const writerBook = document.createElement(`div`);
  const pageBook = document.createElement(`div`);
  const yearBook = document.createElement(`div`);
  const noteBook = document.createElement(`div`);
  const delButton = document.createElement(`button`)

  cardBook.className = `book-card`;
  picBook.className = `book-pic`;
  titleBook.className = `book-title`
  writerBook.className = `book-writer`;
  pageBook.className = `book-page`;
  yearBook.className = `book-year`;
  noteBook.className = `book-note`;
  delButton.className = `del-button`;

  picBook.style.backgroundColor = randomRGBColor();
  titleBook.textContent = `${currentBook.title}`;
  writerBook.textContent = `by ${currentBook.author}`;
  pageBook.textContent = `${currentBook.pages} pages`;
  yearBook.textContent = `published in ${currentBook.year}`;
  noteBook.textContent = `noted ${currentBook.note} / 10`;
  delButton.textContent = `DELETE`;

  cardBook.append(picBook, titleBook, writerBook, pageBook, yearBook,
    noteBook, delButton)

  bookContainer.appendChild(cardBook);
}
