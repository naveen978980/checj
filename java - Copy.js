let cartCount = 0;
const cartCounter = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = button.getAttribute('data-price');
    cartCount++;
    cartCounter.innerText = cartCount;
    alert(`Item added to cart! Price: $${price}`);
  });
});
