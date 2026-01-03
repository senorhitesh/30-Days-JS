import { addToCart, removeFromCart, calculateTotal } from './logic.js';

// 1. The Global State (Single Source of Truth)
let cart = []; 

// 2. The Available Products (Simulating a Database)
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Keyboard', price: 50 },
];

// 3. Select DOM Elements
const cartContainer = document.querySelector("#cart-items");
const totalSpan = document.querySelector("#total-price");

// 4. The Render Function (Syncs State -> UI)
function render() {
    // Clear current list
    cartContainer.innerHTML = '';
    
    // Draw the list based on the 'cart' array
    cart.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.name} x ${item.qty} ($${item.price * item.qty})`;
        
        // Add a remove button for each item
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
            cart = removeFromCart(cart, item.id);
            render(); // Re-render after change
        };

        p.appendChild(removeBtn);
        cartContainer.appendChild(p);
    });

    // Update Total
    const total = calculateTotal(cart);
    totalSpan.textContent = `Total: $${total}`;
}

// 5. Setup Event Listeners
// (We attach checks to the specific IDs you made in HTML)
document.querySelector("#Laptop").addEventListener("click", () => {
    cart = addToCart(cart, products[0]); // Add Laptop
    render();
});

document.querySelector("#Mouse").addEventListener("click", () => {
    cart = addToCart(cart, products[1]); // Add Mouse
    render();
});

document.querySelector("#keyboard").addEventListener("click", () => {
    cart = addToCart(cart, products[2]); // Add Keyboard
    render();
});