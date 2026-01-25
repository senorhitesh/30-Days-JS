const products = [
    { id: 1, name: "Espresso", price: 2.50, emoji: "☕" },
    { id: 2, name: "Cappuccino", price: 3.50, emoji: "🥛" },
    { id: 3, name: "Latte", price: 4.00, emoji: "🧉" },
    { id: 4, name: "Mocha", price: 4.50, emoji: "🍫" },
    { id: 5, name: "Croissant", price: 2.00, emoji: "🥐" },
    { id: 6, name: "Muffin", price: 2.50, emoji: "🧁" },
];

let cart = []; // The state of our bill
console.log(cart)

let displayedProducts = document.querySelector("#product-grid");
let cartContainer = document.querySelector("#cart-items");
let emptymsg = document.querySelector(".empty-msg")
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
                <p>$${item.price} x ${item.qty}</p>
            </div>
            <div class="total">
                $${(item.price * item.qty).toFixed(2)}
            </div>
        `;
        cartContainer.appendChild(itemEl);
    });

    if (cart.length === 0) {
        emptymsg.textContent = `Your Brain has no Caffine ! Start Buying It`
    }
}           