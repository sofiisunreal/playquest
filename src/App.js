import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
import Home from './components/Home';
import Getproducts from './components/Getproduct';
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
        <h1>
        🪄Welcome to PlayQuest Arena🪄
        </h1>
        <p style={{fontSize:"14px", fontStyle:"italic"}}> ~Where every console unlocks epic adventures! </p>
      </header>
      {/* nav links go here */}
      {/* <nav>
        <Link to="/Signup" className='btn-custom mt-4'>Signup</Link>
        <Link to="/Signin" className='btn-custom'>Signin</Link>
        <Link to="/Addproduct" className='btn-custom'>Add Product</Link>
        <Link to="/" className='btn-custom'>Get product</Link>
        <Link to="/cart" className='btn-custom'>View Cart</Link>
      </nav> */}
      {/* routing */}
      <div className='main-container'>

      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/Makepayment' element={<Mpesapayment/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Chatbot' element={<Chatbot />}/>
      </Routes>
      </div>
 <Chatbot />
      <footer className='bottom-footer bg-dark p-3 '>
        <b className='text-white '>Developed by Sophie &copy; 2026. All rights reserved.</b>
      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
