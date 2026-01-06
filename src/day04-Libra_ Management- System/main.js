import { Library } from "./library.js"; // Make sure filename matches exactly (case sensitive!)
import { Book } from "./book.js";

// 1. INSTANTIATE THE CLASS (Build the object)
const myLibrary = new Library(); 

// 2. Select Elements
const titleInput  = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput   = document.querySelector("#isbn");
const addBtn      = document.querySelector("#add-btn");
const list        = document.querySelector("#book-list");


function render(){
    list.innerHTML = ``;
    myLibrary.books.forEach(book => {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.textContent = `${book.title} by ${book.author}`;
        if (!book.isAvailable) {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.color = "red";
        }

        const toggle = document.createElement("button")
        toggle.textContent = book.isAvailable ? "Borrow" : "Return";
        toggle.style.marginLeft = "10px";
        toggle.onclick = () =>{
            book.isAvailable();
            render();
        }

        const removeBtn = document.createElement("button")
        removeBtn.textContent = `Remove`
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () =>{
            myLibrary.removeBook(book.isbn);
            render();
        }
        li.appendChild(textSpan);
        li.appendChild(toggle)
        li.appendChild(removeBtn)
        list.appendChild(li);

    }) 
}

addBtn.addEventListener("click",function(){
    if(titleInput.value === ``) return alert("Enter Title");
    if(authorInput.value === ``) return alert("Enter Author");
    if(isbnInput.value === ``) return alert("Enter ISBN");

    const newBook = new Book(titleInput.value, authorInput.value, isbnInput.value);

    myLibrary.addBook(newBook);
    render();
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
})

render();