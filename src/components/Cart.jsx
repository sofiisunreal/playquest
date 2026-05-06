import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQuantity, getCartTotal } from "../utils/cart";

const Cart = () => {

  const [cart, setCart] = useState([]);

  const refresh = () => {
    setCart(getCart());
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="container mt-4">

      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 😔</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="card p-3 mb-3">

              <h4>{item.name}</h4>

              <p>Ksh {item.price}</p>

              <div>

                <button onClick={() => {
                  updateQuantity(item.id, item.quantity - 1);
                  refresh();
                }}>-</button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => {
                  updateQuantity(item.id, item.quantity + 1);
                  refresh();
                }}>+</button>

              </div>

              <button
                className="btn btn-danger mt-2"
                onClick={() => {
                  removeFromCart(item.id);
                  refresh();
                }}
              >
                Remove
              </button>

            </div>
          ))}

          <h3>Total: Ksh {getCartTotal()}</h3>
        </>
      )}

    </div>
  );
};

export default Cart;
