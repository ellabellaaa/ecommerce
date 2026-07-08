// Load all products from the API
async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    const products = await res.json();
    return products;
  } catch (err) {
    console.error('Failed to load products:', err);
  }
}

// Get a single product by id
async function getProduct(id) {
  try {
    const res = await fetch(`/api/products/${id}`);
    const product = await res.json();
    return product;
  } catch (err) {
    console.error('Failed to load product:', err);
  }
}

// Add product to cart
async function addToCart(productId, token) {
  try {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ product_id: productId, quantity: 1 })
    });
    const data = await res.json();
    return { ok: res.ok, data };
  } catch (err) {
    console.error('Failed to add to cart:', err);
  }
}