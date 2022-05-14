function shelfBook(bookName, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(bookName);
  } else {
    return shelf;
  }
}

function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var thisShelf = [];
  for (var i = 0; i < shelf.length; i++) {
    thisShelf.push(shelf[i].title)
  }
  return thisShelf.join(", ");
}

function searchShelf(shelf, bookName) {
  var onShelf = false;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      onShelf = true;
    } else {
      onShelf = false;
    }
  } return onShelf;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
