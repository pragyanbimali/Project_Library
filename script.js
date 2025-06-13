
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
const clearLibrary = document.querySelector(".clear-library");

// We first create an empty array to store the books we create 
const bookList = [];

function renderBooks() {
    cardContainer.textContent = "";
    bookList.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");
        bookCard.setAttribute("data-id", book.id)
        
        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "title-div");
        titleDiv.textContent = `Title: ${book.title}`;

        const authorDiv = document.createElement("div");
        authorDiv.setAttribute("class", "author-div");
        authorDiv.textContent = `Author: ${book.author}`;

        const pagesDiv = document.createElement("div");
        pagesDiv.setAttribute("class", "pages-div");
        pagesDiv.textContent = `Pages: ${book.pages}`;

        const haveReadDiv = document.createElement("div");
        haveReadDiv.setAttribute("class", "haveRead-div");
        haveReadDiv.textContent = "Status: "
        if (book.haveRead) {
            haveReadDiv.textContent += "Have Read";
        } else {
            haveReadDiv.textContent += "Have NOT Read";
        }
        
        const removeBookBtn = document.createElement("button");
        removeBookBtn.setAttribute("class", "remove-book-btn");
        removeBookBtn.textContent = "Remove Book";

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.setAttribute("class", "toggle-read-btn");
        toggleReadBtn.textContent = "Toggle Read Status";

        bookCard.appendChild(titleDiv);
        bookCard.appendChild(authorDiv);
        bookCard.appendChild(pagesDiv);
        bookCard.appendChild(haveReadDiv);
        bookCard.appendChild(removeBookBtn);
        bookCard.appendChild(toggleReadBtn);

        cardContainer.appendChild(bookCard);

        removeBookBtn.addEventListener("click", function() {
            cardContainer.removeChild(bookCard);
            bookList.splice(bookList[book], 1);
        })

        toggleReadBtn.addEventListener("click", function() {
            toggleReadStatus(book.id);
            renderBooks();
        })
    })
}


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
    renderBooks();

    console.log(bookList);

    dialog.close();
})

// Function to toggle read status
function toggleReadStatus(bookId) {
    const book = bookList.find(b => b.id === bookId);
    if (book) {
        book.haveRead = !book.haveRead;
    }
}

clearLibrary.addEventListener("click", function() {
    function removeAllChildrenWhileLoop(parentElement) {
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }

    if (bookList.length === 0) {
        alert("Library is empty!")
    }

    removeAllChildrenWhileLoop(cardContainer);

    bookList.splice(0, (bookList.length));
}); 