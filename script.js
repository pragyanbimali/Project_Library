
// Defined the constructor function for the books instances.
function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const buttonNewBook = document.querySelector(".add-book");
const cardContainer = document.querySelector(".main-card-container");

// We first create an empty array to store the books we create 
const bookList = [];

// When we click the "Add New Book" button.....
buttonNewBook.addEventListener("click", function() {
    // First we create the form element(s) to prompt the user for input
    const bookDetailForm = document.createElement("form");  // Creating the main form element
    bookDetailForm.setAttribute("class", "book-form"); // Giving it a class for CSS purposes of course

    const titleLabel = document.createElement("label"); // Then create a label element
    titleLabel.setAttribute("for", "title");            //  for the title input 
    titleLabel.textContent("Title: ");

    const titleInput = document.createElement("input"); // Then create the actual input box which we link to the label element
    titleInput.setAttribute("type", "text");            // Type of input is text
    titleInput.setAttribute("id", "title");             // We give it an ID
    titleInput.setAttribute("name", "bookTitle");       //  and a name that we can use in the backend later on

    // Similarly we then create the other elements of the form

    // For the Author 
    const authorLabel = document.createElement("label"); 
    titleLabel.setAttribute("for", "author");            
    titleLabel.textContent("Author: ");

    const authorInput = document.createElement("input"); 
    titleInput.setAttribute("type", "text");            
    titleInput.setAttribute("id", "author");             
    titleInput.setAttribute("name", "bookAuthor");  
    
    // For the Pages
    const pagestLabel = document.createElement("label"); 
    titleLabel.setAttribute("for", "pages");            
    titleLabel.textContent("Pages: ");

    const pagesInput = document.createElement("input"); 
    titleInput.setAttribute("type", "number");            
    titleInput.setAttribute("id", "pages");             
    titleInput.setAttribute("name", "bookPages"); 

    // For the haveRead, we create a Checkbox input type
    const haveReadLabel = document.createElement("label"); 
    titleLabel.setAttribute("for", "haveRead");            
    titleLabel.textContent("Have Read? ");

    const haveReadInput = document.createElement("input"); 
    titleInput.setAttribute("type", "checkbox");            
    titleInput.setAttribute("id", "haveRead");             
    titleInput.setAttribute("name", "bookhaveRead");
})  

