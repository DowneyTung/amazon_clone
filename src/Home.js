import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
 return (
  <div className='home'>
   <div className="home__container">
    <img className="home__image" src="https://m.media-amazon.com/images/I/61BVdKonwIL._SX3000_.jpg" alt="" />

    <div className="home__row">
     <Product
      id="12321341"
      title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
      price={29.99}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
      rating={3}
     />
     <Product
      id="49538094"
      title="Knewwood kMix Stander Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
      price={239.0}
      rating={4}
      image="https://m.media-amazon.com/images/I/71hIoWhVckL._AC_UY436_FMwebp_QL65_.jpg"
     />

    </div>
    <div className="home__row">
     <Product
      id="490385789"
      title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7 Heart Rate and More, Black/Graphite, One Size (S &L Bands Included)"
      price={178.99}
      rating={3}
      image="https://m.media-amazon.com/images/I/61xh+Cewq5L._AC_UY436_FMwebp_QL65_.jpg"
     />
     <Product
      id="23445938"
      title="Amazon Echo (3rd  generation) | Smart speaker with Alexa, Charcoal Fabric"
      price={98.99}
      rating={5}
      image="https://m.media-amazon.com/images/I/61yI7vWa83L._AC_UY436_FMwebp_QL65_.jpg"
     />
     <Product
      id="3254354345"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      price={598.99}
      rating={4}
      image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UY436_FMwebp_QL65_.jpg"
     />

    </div>
    <div className="home__row">
     <Product
      id="4903850"
      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
      price={199.99}
      rating={3}
      image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY436_FMwebp_QL65_.jpg"
     />

    </div>

   </div>

  </div>
 )
}

export default Home
