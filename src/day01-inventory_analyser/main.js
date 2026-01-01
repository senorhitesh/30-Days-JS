import { getReorderList } from './logic.js';

const inventory = [
    { id: 1, name: "Laptop", price: 1000, stock: 5 },
    { id: 2, name: "Mouse", price: 20, stock: 0 },
    { id: 3, name: "Keyboard", price: 50, stock: 12 },
    { id: 4, name: "Monitor", price: 300, stock: 2 },
];

const run = () => {
     
    let reOrderBtn = document.querySelector("#check-btn");
    let appContainer = document.querySelector("#app");
    
    reOrderBtn.addEventListener("click", function(){
    const reorderNames = getReorderList(inventory);
    appContainer.innerHTML=``;
    const ul = document.createElement('ul');

    reorderNames.forEach(productName => {
    const li = document.createElement("li");
    li.textContent = `⚠️ Restock: ${productName}`;
    li.classList.add("low-stock-alert");
    ul.appendChild(li);   
    });
    
    appContainer.appendChild(ul)
    })

};

run();