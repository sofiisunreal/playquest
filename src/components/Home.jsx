import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const imagepath = "https://sophiehiggs.alwaysdata.net/static/images/";

  // fetch products
  const getProducts = async () => {
    try {
      const res = await axios.get("https://sophiehiggs.alwaysdata.net/api/getproducts");
      setProducts(res.data.slice(0, 3)); //
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>

      {/* 🦸 HERO SECTION */}
      <div style={{
        background: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
        marginTop:"30px",
        backgroundImage:'url("/images/homeimg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h1>Level Up Your Gaming 🎮</h1>
        <p>Shop the latest consoles at unbeatable prices</p>

        <Link to="/">
          <button className="btn btn-danger mt-3">
            Shop Now
          </button>
        </Link>
      </div>

      {/* 🔥 BEST SELLING */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">🔥 Best Sellers</h2>

        <div className="row">
          {products.map(product => (
            <div className="col-md-4" key={product.id}>
              <div className="card shadow h-100">

                <img
                  src={imagepath + product.product_photo}
                  alt=""
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5>{product.product_name}</h5>
                  <p>Ksh {product.product_cost}</p>

                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/")}
                  >
                    View More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📖 ABOUT US */}
      <div className="container mt-5 text-center">
        <h2>About Us</h2>
        <p className="mt-3">
          We are a passionate gaming store dedicated to bringing you the latest
          consoles and accessories. Whether you're a casual player or a hardcore
          gamer, we provide high-quality products at affordable prices.
        </p>
      </div>

      {/* 🎯 CALL TO ACTION */}
      <div style={{
        background: "#f8f9fa",
        padding: "50px",
        marginTop: "40px",
        textAlign: "center"
      }}>
        <h3>Ready to start gaming? 🚀</h3>
        <button
          className="btn btn-success mt-3"
          onClick={() => navigate("/")}
        >
          Browse Products
        </button>
      </div>

      {/* 👣 FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;
