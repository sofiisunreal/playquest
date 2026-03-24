import React from 'react'

const Navbar = () => {
  return (
            <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content --> */}
                <nav class="navbar navbar-expand-md ">
                    <a href="" class="navbar-brand text-danger">PlayQuest Arena
                        <img src="images/gameconsole.png" alt="" width={50}  />
                    </a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav ">
                            <a href="/" class="nav-link text-white">Home</a>
                            <a href="/addproduct" class="nav-link text-white" >Add Product</a>
                            <a href="/signup" class="nav-link text-white">Sign Up</a>
                            <a href="/signin" class="nav-link text-white">Sign In</a>

                        </div>
                    </div>
                </nav>
            </div>
        </section>

  )
}

export default Navbar