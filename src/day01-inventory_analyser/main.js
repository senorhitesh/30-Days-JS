import { getReorderList } from './logic.js';

const inventory = [
    { id: 1, name: "Laptop", price: 1000, stock: 5 },
    { id: 2, name: "Mouse", price: 20, stock: 0 },
    { id: 3, name: "Keyboard", price: 50, stock: 12 },
    { id: 4, name: "Monitor", price: 300, stock: 2 },
];

const renderRestockList = (productNames, container) => {
    container.innerHTML = ``;
    const ul = document.createElement('ul');

    productNames.forEach(productName => {
        const li = document.createElement("li");
        li.textContent = `⚠️ Restock: ${productName}`;
        li.classList.add("low-stock-alert");
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

const run = () => {
    // 2. Safety: Select elements inside the function to ensure the DOM is ready
    const reOrderBtn = document.querySelector("#check-btn");
    const appContainer = document.querySelector("#app");

    reOrderBtn.addEventListener("click", function() {
        // Get data
        const reorderNames = getReorderList(inventory);
        // Update UI
        renderRestockList(reorderNames, appContainer);
    });
};

run();