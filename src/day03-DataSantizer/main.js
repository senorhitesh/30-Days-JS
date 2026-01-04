// FIX 3: Added .js extension
import { capitalizeName, toKebabCase, maskCreditCard } from './logic.js';

// Select Inputs
const nameInput = document.querySelector("#name");
const titleInput = document.querySelector("#Title");
const serialInput = document.querySelector("#SeriNum");

// Select Outputs
const bookName = document.querySelector(".B-name");
const bookTitle = document.querySelector(".B-title"); 
const bookSerial = document.querySelector(".BS-num");

// EVENT 1: Name (Immediate Update)
nameInput.addEventListener("input", function(e) {
    const cleanValue = capitalizeName(e.target.value);
    bookName.textContent = cleanValue; // Update DOM immediately
});

// EVENT 2: Title (Immediate Update)
titleInput.addEventListener("input", function(e) {
    const cleanValue = toKebabCase(e.target.value);
    bookTitle.textContent = cleanValue;
});

// EVENT 3: Serial Number (Immediate Update)
serialInput.addEventListener("input", function(e) {
    const cleanValue = maskCreditCard(e.target.value);
    bookSerial.textContent = cleanValue;
});


