let cart = [];
let total = 0;

function addToCart(title, price) {
    cart.push({ title, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total.toFixed(2);

    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.title} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleCart();
});

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('¡Gracias por tu compra!');
    cart = [];
    total = 0;
    updateCartUI();
    toggleCart();
}
