import React,{useEffect,useState} from 'react'
import { getCartCount } from "../utils/cart";



const Navbar = () => {


// declare states
const [user,setUser]=useState("null")

// load user from local storage
useEffect(()=>{
    const loggedUser=JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
},[])

// logout function
const logout=()=>{
    localStorage.removeItem("user");
    setUser("null");
}
  return (
            <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content --> */}
                <nav class="navbar navbar-expand-md ">
                    <header>

                     <p class="navbar-brand text-danger">PlayQuest Arena
                        <img src="images/gameconsole.png" alt="" width={50}  />
                    </p>
                    </header>

                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav ">
                            <a href="/home" class="nav-link text-white">Home</a>
                            <a href="/addproduct" class="nav-link text-white" >Add Product</a>
                            <a href="/cart" class="nav-link text-white">Cart 🛒</a>
                            <div className='cartcount'>
                                Cart ({getCartCount()})
                            </div>

                            <div className='logout-btn'>

                                {user ?(
                                    <>
                                        <span className='nav-link text-white'>
                                            Welcome {user.username} 👤
                                        </span>
                                        <button onClick={logout} className="btn btn-danger" >
                                            Logout
                                        </button>
                                        </>
                                        ):(
                                        <>
                                         <a href="/signup" class="nav-link text-white">SignUp</a>
                                        <a href="/signin" class="nav-link text-white" >SignIn</a>
                                        </>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </section>

  )
}

export default Navbar
