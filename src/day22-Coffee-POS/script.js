const products = [
    { id: 1, name: "Espresso", price: 2.50, emoji: "☕" },
    { id: 2, name: "Cappuccino", price: 3.50, emoji: "🥛" },
    { id: 3, name: "Latte", price: 4.00, emoji: "🧉" },
    { id: 4, name: "Mocha", price: 4.50, emoji: "🍫" },
    { id: 5, name: "Croissant", price: 2.00, emoji: "🥐" },
    { id: 6, name: "Muffin", price: 2.50, emoji: "🧁" },
];

let cart = []; // The state of our bill

let displayedProducts = document.querySelector("#product-grid");
let cartContainer = document.querySelector("#cart-items");
let emptymsg = document.querySelector(".empty-msg");

function renderProducts() {
    products.forEach((obj) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const emoji = document.createElement("div");
        emoji.style.fontSize = "40px";
        emoji.innerText = obj.emoji;

        const name = document.createElement("h3");
        name.innerText = obj.name;

        const price = document.createElement("p");
        price.classList.add("price");
        price.innerText = `$${obj.price.toFixed(2)}`;

        productCard.appendChild(emoji);
        productCard.appendChild(name);
        productCard.appendChild(price);

        productCard.addEventListener("click", () => {
            addToCart(obj.id);
        });

        displayedProducts.appendChild(productCard);
    });
}
renderProducts();

function addToCart(id) {
    const product = products.find(p => p.id === id);

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        cart = cart.map(item =>
            item.id === id
                ? { ...item, qty: item.qty + 1 }
                : item
        );
    } else {
        cart = [...cart, { ...product, qty: 1 }];
    }

    console.log("Current Cart State:", cart); // Check your console!
    updateCartUI();
}

function updateCartUI() {
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("cart-item");

        itemEl.innerHTML = `
            <div class="info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.qty}</p>
            </div>
            
            <div class="qty-controls">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            
            <div class="price">
                $${(item.price * item.qty).toFixed(2)}
            </div>
        `;
  
        cartContainer.appendChild(itemEl);
        calculateTotal()
    });
}

function changeQty(id, change) {
    let product = cart.find((i) => i.id === id);

    if (product) {
        product.qty += change
    }
    if (product.qty <= 0) {
        alert("Are You Sure to Remove Coffee");
        cart = cart.filter(id => id.id === id)
    }
    updateCartUI()
}
function calculateTotal() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  document.querySelector("#subtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.querySelector("#tax").innerText = `$${tax.toFixed(2)}`;
  document.querySelector("#total").innerText = `$${total.toFixed(2)}`;
}
calculateTotal()
const { jsPDF } = window.jspdf;

function generatePDF() {
    const doc = new jsPDF();
    
    let yPos = 20; // The "Cursor" Y position (starts at top)
    const margin = 10;
    
    doc.setFontSize(22);
    doc.text("Coffee Shop Receipt", margin, yPos);
    yPos += 10; // Move down
    
    doc.setFontSize(12);
    doc.text("Date: " + new Date().toLocaleDateString(), margin, yPos);
    yPos += 10;
    
    doc.line(margin, yPos, 200, yPos); // Horizontal Line
    yPos += 10;

    doc.setFontSize(14);
    
    cart.forEach((item) => {
        const itemLine = `${item.name} (x${item.qty})`;
        const priceLine = `$${(item.price * item.qty).toFixed(2)}`;
        
        doc.text(itemLine, margin, yPos);
        doc.text(priceLine, 160, yPos);
        
        yPos += 10; // Move cursor down for next item
    });

    yPos += 5;
    doc.line(margin, yPos, 200, yPos); 
    yPos += 10;
    
    const totalText = document.querySelector("#total").innerText;
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(`GRAND TOTAL: ${totalText}`, margin, yPos);
    
    doc.save("Order_Receipt.pdf");
}

const payBtn = document.querySelector(".pay-btn")
payBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    generatePDF();
    setTimeout(() => {
        cart = [];
        updateCartUI();
        alert("Receipt Downloaded!");
    }, 1000); 
});