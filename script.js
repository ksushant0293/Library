let myLibrary = [];

function bookInfo(bookName, authorName, numberOfPages) {
  this.bookName = bookName;
  this.authorName = authorName;
  this.numberOfPages = numberOfPages;

}

const bookForm = document.querySelector("#bookAddForm");
const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const numberOfPages = document.querySelector("#numberOfPages");
const button = document.querySelector("#btn");

bookForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const book = new bookInfo( bookName.value, authorName.value, numberOfPages.value);
    myLibrary.push(book);
    console.log(myLibrary); 
})


// const theHobbit = new Book(
//   "the Hobbit",
//   "J.R.R. Tolkein",
//   "295 pages",
//   "not read yet"