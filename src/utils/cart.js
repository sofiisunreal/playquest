export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {
  let cart = getCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.product_name,
      price: product.product_cost,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateQuantity = (id, qty) => {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id) {
      return { ...item, quantity: qty };
    }
    return item;
  }).filter(item => item.quantity > 0);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartTotal = () => {
  const cart = getCart();

  return cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
};

export const getCartCount = () => {
  const cart = getCart();

  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
