export class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    findBook(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
}