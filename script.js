
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookId = crypto.randomUUID();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
};

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

  const newBook = new Book(randomTitle, randomAuthor, randomPages, randomRead);
  addBookToLibrary(newBook);
}


