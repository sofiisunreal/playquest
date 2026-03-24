import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Test from './components/Test';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
        <h1>
        <marquee behavior="" direction="right">🪄Welcome to PlayQuest Arena🪄</marquee>
        </h1>
        <p style={{fontSize:"14px", fontStyle:"italic"}}> ~Where every console unlocks epic adventures! </p>
      </header>
      {/* nav links go here */}
      <nav>
        <Link to="/Signup" className='btn-custom mt-4'>Signup</Link>
        <Link to="/Signin" className='btn-custom'>Signin</Link>
        <Link to="/Addproduct" className='btn-custom'>Add Product</Link>
        <Link to="/" className='btn-custom'>Get product</Link>
      </nav>
      {/* routing */}
      <Routes>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/Makepayment' element={<Mpesapayment/>}/>
      </Routes>

      <footer className='footer bg-dark p-3 mt-15'>
        <b className='text-white '>Developed by Sophie &copy; 2026. All rights reserved.</b>


      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
