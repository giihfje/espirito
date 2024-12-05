let cart = [];

function addToCart(productName, productPrice, sizeId) {
    const size = document.getElementById(sizeId).value;
    cart.push({ name: productName, price: productPrice, size: size });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceEl = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('p');
            cartItems.appendChild(itemEl);
            total += item.price;
        });
    }

    cartCount.textContent = cart.length;
    totalPriceEl.textContent = total.toFixed(2);
}