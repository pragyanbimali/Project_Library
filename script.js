
// Defined the constructor function for the books instances.
function Book (title, author, pages, haveRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const buttonNewBook = document.querySelector(".add-book");
const cardContainer = document.querySelector(".main-card-container");
const dialog = document.querySelector(".dialog");
const bookDetailForm = document.querySelector(".bookDetailForm");
const closeBtn = document.querySelector(".close-dialog-btn");

// We first create an empty array to store the books we create 
const bookList = [];


// When we click the "Add New Book" button.....
buttonNewBook.addEventListener("click", function() {
    bookDetailForm.reset(); 
    dialog.showModal();
    closeBtn.addEventListener("click", () => dialog.close())
})

bookDetailForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const bookTitle = e.target.elements.bookTitle.value;
    const authorName = e.target.elements.bookAuthor.value;
    const totalPages = e.target.elements.bookPages.value;
    let haveReadValue = 0;
    if (e.target.elements.bookhaveRead.checked) {
        haveReadValue = 1;
    } else {
        haveReadValue = 0;
    }

    const bookInstance = new Book (bookTitle, authorName, totalPages, haveReadValue);

    bookList.push(bookInstance);

    console.log(bookList);

    dialog.close();
})







