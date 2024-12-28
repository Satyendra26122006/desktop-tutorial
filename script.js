let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart').innerText = `Cart (${cartCount})`;
    alert(`${productName} has been added to your cart!`);
}