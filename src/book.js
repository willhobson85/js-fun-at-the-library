function createTitle(idea) {
     return `The ${idea}`
}

function buildMainCharacter(mainName, mainAge, mainPronouns) {
  return {
    name: mainName,
    age: mainAge,
    pronouns: mainPronouns
  }
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  } else {
    return reviews.push(newReview);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book;
}

function editBook(createTitle) {
  createTitle.pageCount = createTitle.pageCount * .75;
  return createTitle.pageCount;
}

function checkOutBook(library, book, genre) {
  
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
