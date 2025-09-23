// Fetch products from Fake Store API and display as cards
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const grid = document.querySelector('.product-grid');
    grid.innerHTML = ''; // Clear existing cards
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description.substring(0, 80)}...</p>
        <div class="product-price">$${product.price}</div>
        <div class="product-actions">
          <button>Details</button>
          <button>Add to Cart</button>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });



// Map button text to API category
const categoryMap = {
  "all": null,
  "men's clothing": "men's clothing",
  "women's clothing": "women's clothing",
  "jewelery": "jewelery",
  "electronics": "electronics"
};

document.querySelectorAll('.product-filters button').forEach(button => {
  button.addEventListener('click', () => {
    const btnText = button.textContent.trim().toLowerCase();
    const category = categoryMap[btnText];

    if (!category) {
      // Fetch all products
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(renderProducts);
    } else {
      // Fetch by category
      fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
        .then(res => res.json())
        .then(renderProducts);
    }
  });
});

function renderProducts(products) {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = '';
  products.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description.substring(0, 80)}...</p>
      <div class="product-price">$${product.price}</div>
      <div class="product-actions">
        <button>Details</button>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Add event listeners to all Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => addToCart(products[idx]));
  });
}

// Initial load: show all products
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(renderProducts);
  


  // ----- LOGIN & REGISTER MODALS -----
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const cartModal = document.getElementById('cartModal');

document.querySelector('.btn:nth-child(1)').addEventListener('click', () => loginModal.style.display = 'block');
document.querySelector('.btn:nth-child(2)').addEventListener('click', () => registerModal.style.display = 'block');
document.querySelector('.btn:nth-child(3)').addEventListener('click', showCart);

document.getElementById('closeLogin').onclick = () => loginModal.style.display = 'none';
document.getElementById('closeRegister').onclick = () => registerModal.style.display = 'none';
document.getElementById('closeCart').onclick = () => cartModal.style.display = 'none';

document.getElementById('showRegister').onclick = () => {
  loginModal.style.display = 'none';
  registerModal.style.display = 'block';
};

// ----- CART SYSTEM -----
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  const found = cart.find(item => item.id === product.id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBtn();
}

function updateCartBtn() {
  const cartBtn = document.querySelector('.btn:nth-child(3)');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBtn.textContent = `Cart (${totalQty})`;
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  cartItems.innerHTML = '';
  let total = 0;
  let totalQty = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    totalQty += item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-qty">
          <button onclick="changeQty(${idx}, -1)">&#8722;</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx}, 1)">&#43;</button>
        </div>
        <div class="cart-item-price">1 × $${item.price}</div>
      </div>
    `;
    cartItems.appendChild(row);
  });

  cartSummary.innerHTML = `
    <div>Products (${totalQty}) <span style="float:right;">$${total.toFixed(2)}</span></div>
    <div>Shipping <span style="float:right;">$30</span></div>
    <div style="font-weight: bold;">Total amount <span style="float:right;">$${(total + 30).toFixed(2)}</span></div>
  `;
}

window.changeQty = function(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartBtn();
};

function showCart() {
  renderCart();
  document.getElementById('cartModal').style.display = 'block';
}

// Update cart button on page load
updateCartBtn();

// In renderProducts or addCartButtonListeners
btn.addEventListener('click', () => addToCart(product));
