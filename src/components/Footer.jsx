import React from 'react'

const Footer = () => {
  return (
    
    <section class="row bg-warning p-3">
        {/* <!-- child 1 --> */}
        <div class="col-md-4 text-center text-white">
            <h2>About Us</h2>
            <p>
                We are one of the best selling online stores nationwide. We are mostly retail but offer wholesale.
                To get the wholesale, please visit our offices or contact us.
            </p>

        </div>

        {/* <!-- child 2 --> */}
        <div class="col-md-4">
            <h2 class="text-center text-white">Contact Us</h2>
            <form action="">
                <input type="email" placeholder="Enter your email" class="form-control"/> <br/> <br/>
                <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea> <br/>
                <input type="submit" value="Send message" class="btn btn-outline-danger"/>
            </form>
        </div>

        {/* <!-- child 3 --> */}
        <div class="col-md-4">
            <h2 class="text-white text-center">Stay connected</h2>
            <a href="https://facebook.com">
                <img src="images/fb.png" alt="Facebook"/>
            </a>
            <a href="https://instagram.com">
                <img src="images/.png" alt=""/>
            </a>
            <a href="https://twitter.com">
                <img src="images/x.png" alt=""/>
            </a>
            <p>In this platforms we have employed people who will be able to attend to you 24/7.Also follow us in
                order not to miss out on deals!! </p>
        </div>
    </section>

  )
}

export default Footer 