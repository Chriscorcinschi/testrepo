
let books = [];

const getInputValue = (id) => document.getElementById(id).value.trim(); //trim()remove empty spaces (spaces, tabs, wrapping)

function addBook() {
    const book = {
        name: getInputValue('bookName'),
        authorName: getInputValue('authorName'),
        bookDescription: getInputValue('bookDescription'),
        pagesNumber: getInputValue('pagesNumber')
        }

        //object.value takes all the property values of the book. .every(v => v) checks if all values are true -no empty fields 
    if (Object.values(book).every(v => v) && !isNaN(book.pagesNumber)) {
        books.push(book);
        renderBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
    }

function renderBooks() {
    const booksDiv = books.map((book, index) => 
        `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function editbook(index) { //allows users to edit the details of a book
    const book = books[index]; //Fetches the book from the 'books' array using the given 'index'.
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    books.splice(index, 1); // Remove old entry
    renderBooks(); // Refresh list
  }

   function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

 function deletebook(index) {
    books.splice(index, 1);
    renderBooks();
 }