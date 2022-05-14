function createLibrary(libName, bookShelf) {
  var publicLibrary = {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return publicLibrary;
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book)
  } else {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if(library.shelves[genre][i].title === book) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${book} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
