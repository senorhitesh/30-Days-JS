export class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  toggleStatus() {
    this.isAvailable = !this.isAvailable;}
}

