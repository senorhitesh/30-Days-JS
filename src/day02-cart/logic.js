// logic.js

// 1. Add Item (Immutable Way)
export function addToCart(cart, product) {
    // Check if item already exists
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        // If it exists, we map through and increase quantity ONLY for that item
        return cart.map(item => 
            item.id === product.id 
                ? { ...item, qty: item.qty + 1 } // Create new object with updated qty
                : item // Return other items as is
        );
    } else {
        // If it's new, add it to the array with qty: 1
        return [...cart, { ...product, qty: 1 }];
    }
}

// 2. Remove Item (Immutable Way)
export function removeFromCart(cart, productId) {
    return cart.filter(item => item.id !== productId);
}

// 3. Calculate Total
export function calculateTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}