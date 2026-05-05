import React from 'react'

const Footer = () => {
  return (

    <section class="main-footer row bg-dark p-3 mt-8">
        {/* <!-- child 1 --> */}
        <div class="col-md-4 text-center text-white">
            <h3>About Us</h3>
            <p className='text-start'>
             We’re a leading online store offering quality products at great prices.
            Retail & wholesale available.
            </p>

        </div>

        {/* <!-- child 2 --> */}
        <div class="col-md-4 text-white">
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <span>📧</span>
                <div>
                  <p>Email</p>

                  <small>
                    <a href="mailto:support@yourstore.com">support@playquest.com</a>
                    </small>
                </div>



              </div>
              <div className="contact-item">
                <span>📞</span>

                <div>
                  <p>Phone</p>
                  <a href="tel:+254712345678">+254 712 345 678</a>
                </div>
              </div>
              <div className="contact-item">
                <span>📍</span>

                <div>
                  <p>Location</p>
                  <small>Nairobi, Kenya</small>
                </div>
              </div>
            </div>





        </div>
        {/* <!-- child 3 --> */}
        <div class="col-md-4">
            <h3 class="text-white text-center">Stay connected</h3>
            <div className='social-icons'>

                <a href="https://facebook.com">
                    <img src="images/fb.png" alt="Facebook"/>
                </a>
                <a href="https://instagram.com">
                    <img src="images/in.png" alt=""/>
                </a>
                <a href="https://twitter.com">
                    <img src="images/x.png" alt=""/>
                </a> <br/> <br/>
            </div> <br/>
            <p className='text-white text-start'> Follow us for updates and exclusive deals </p>
        </div>
    </section>

  )
}

export default Footer
