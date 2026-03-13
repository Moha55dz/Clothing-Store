// Cart State Management
let cart = JSON.parse(localStorage.getItem('vestimenta_cart')) || [];

function updateCartBadge() {
    const badges = document.querySelectorAll('#cart-count, .cart-icon');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const isSubPage = window.location.pathname.includes('/pages/');
    const checkoutUrl = isSubPage ? 'checkout.html' : 'pages/checkout.html';

    badges.forEach(badge => {
        if (badge.id === 'cart-count') {
            badge.innerText = totalItems;
        } else {
            badge.innerText = `CART (${totalItems})`;
        }
        badge.style.cursor = 'pointer';
        badge.onclick = () => window.location.href = checkoutUrl;
    });
}

function selectProduct(product) {
    localStorage.setItem('vestimenta_selected_product', JSON.stringify(product));
    const isSubPage = window.location.pathname.includes('/pages/');
    window.location.href = isSubPage ? 'product.html' : 'pages/product.html';
}

function addToCart(product) {
    const quantityToAdd = product.quantity || 1;
    const existingItem = cart.find(item => item.id === product.id && item.size === product.size);
    if (existingItem) {
        existingItem.quantity += quantityToAdd;
    } else {
        cart.push({ ...product, quantity: quantityToAdd });
    }

    localStorage.setItem('vestimenta_cart', JSON.stringify(cart));
    updateCartBadge();

    // Simple feedback
    if (event && event.target && event.target.classList.contains('cta-button')) {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = 'ADDED +';
        btn.style.background = '#2e2e2e';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
        }, 1000);
    }
}

function removeFromCart(id, size) {
    cart = cart.filter(item => !(item.id === id && item.size === size));
    localStorage.setItem('vestimenta_cart', JSON.stringify(cart));
    updateCartBadge();
    if (typeof renderCheckoutItems === 'function') {
        renderCheckoutItems();
    }
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', updateCartBadge);
