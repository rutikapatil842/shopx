let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    updateCartUI();
}

// Function to update the cart count and items
function updateCartUI() {
    // Update cart count in header
    document.getElementById("cart-count").textContent = cart.length;

    // Update cart items in the modal
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

// Function to view the cart
function viewCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

// Function to close the cart modal
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Function to simulate checkout (you can add real payment gateway integration here)
function checkout() {
    alert("Proceeding to checkout...");
    cart = []; // Clear cart
    updateCartUI(); // Reset cart UI
    closeCart();
}
