import React from 'react'

const Carousel = () => {
  return (
    <div class="carousel slide" id="myCarousel" data-bs-ride="carousel">
        {/* <!-- division containing images  --> */}
        <div class="carousel-inner">

            <div class="carousel-item">
                {/* <!-- div with image 1 --> */}
                <img src="images/carousel1.jpg" alt="slide 1" width={1200} height={400}/>
            </div>

            {/* <!-- div with image 2  --> */}
            <div class="carousel-item">
                <img src="images/carousel2.jpg" alt="Slide 2" width={1200} height={400}/>
            </div>

            {/* <!-- div with image 3  --> */}
            <div class="carousel-item">
                <img src="images/carousel3.jpg" alt="Slide 3"width={1200} height={400}/>
            </div>

            {/* <!-- div with image 4 --> */}
            <div class="carousel-item active">
                <img src="images/carousel4.jpg" alt="Slide 4" width={1200} height={400}/>
            </div>

            {/* <!-- previous control  --> */}
            <a href="#myCarousel" class="carousel-control-prev " data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark"></span>
            </a>

            {/* <!-- next control  --> */}
            <a href="#myCarousel" class="carousel-control-next" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark"></span>
            </a>
        </div>
    </div>

  )
}

export default Carousel