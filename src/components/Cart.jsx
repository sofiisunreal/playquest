import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  getCart,
  removeFromCart,
  updateQuantity,
  getCartTotal
} from "../utils/cart";

const Cart = () => {

  // cart state
  const [cart, setCart] = useState([]);

  // mpesa states
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // refresh cart
  const refresh = () => {
    setCart(getCart());
  };

  // load cart once
  useEffect(() => {
    refresh();
  }, []);

  // payment function
  const handlePayment = async (e) => {

    e.preventDefault();

    setLoading("Processing Payment...");
    setSuccess("");
    setError("");

    // create form data
    const formdata = new FormData();

    formdata.append("phone", phone);
    formdata.append("amount", getCartTotal());

    try {

      const response = await axios.post(
        "https://higgs.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(response.data.message);
      setLoading("");

      // optional: clear cart after success
      // localStorage.removeItem("cart");

    } catch (err) {

      setError("Payment failed. Try again.");
      setLoading("");

    }
  };

  return (
    <div className="container mt-4">

      <h1 className="mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (

        <div className="alert alert-warning">
          Your cart is empty 😔
        </div>

      ) : (

        <>
          {/* CART ITEMS */}

          {cart.map(item => (

            <div
              key={item.id}
              className="card shadow-sm p-3 mb-3"
            >

              <h4>{item.name}</h4>

              <p className="text-success">
                Ksh {item.price}
              </p>

              <div className="d-flex align-items-center gap-2">

                {/* decrease quantity */}

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    );
                    refresh();
                  }}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                {/* increase quantity */}

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    );
                    refresh();
                  }}
                >
                  +
                </button>

              </div>

              {/* remove */}

              <button
                className="btn btn-danger mt-3"
                onClick={() => {
                  removeFromCart(item.id);
                  refresh();
                }}
              >
                Remove
              </button>

            </div>

          ))}

          {/* TOTAL */}

          <div className="card p-4 shadow mt-4">

            <h3 className="text-primary">
              Total: Ksh {getCartTotal()}
            </h3>

          </div>

          {/* MPESA PAYMENT */}

          <div className="card p-4 shadow mt-4">

            <h2 className="text-success mb-3">
              Lipa na Mpesa
            </h2>

            {/* messages */}

            <h5 className="text-warning">
              {loading}
            </h5>

            <h5 className="text-success">
              {success}
            </h5>

            <h5 className="text-danger">
              {error}
            </h5>

            {/* form */}

            <form onSubmit={handlePayment}>

              <input
                type="number"
                className="form-control"
                placeholder="Enter phone e.g. 254712345678"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                required
              />

              <button
                type="submit"
                className="btn btn-success mt-3 w-100"
              >
                Pay Ksh {getCartTotal()}
              </button>

            </form>

          </div>

        </>

      )}

    </div>
  );
};

export default Cart;