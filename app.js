//Book Class: represent a book
class Book {
    constructor(tittle, author, isbn) {
        this.tittle = tittle;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [ 
            {
                title: 'Book One',
                author: 'Johne Doe',
                isbn: '44545'
            },
            {
                title: 'Book Two',
                author: 'Angela',
                isbn: '2365546'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
        }
    
        static addBookToList(book) {
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class"btn btn-danger btn-sm delete">X</a></td>
            `;

        list.appendChild(row);
        }
}

//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
        //prevent actual submit
        e.preventDefault();

        //get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // init book
        const book = new Book(title, author, isbn);

        // add book to UI
        UI.addBookToList(book);
    });

//Event: Remove a book