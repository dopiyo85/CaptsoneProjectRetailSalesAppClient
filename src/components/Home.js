import React from 'react'; 
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/home.css';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home">
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/07/11/12/42/smartphone-2493419_1280.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/05/05/00/37/kermit-2285599_1280.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/4033690/pexels-photo-4033690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" />
          </div>
          <div>
            <img src="https://assets.shop.masoko.com/catalog/product/r/e/redmi-a1-black-1000.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      <div className="content">
        <h1>Welcome to our store</h1>
        <p>Shop the latest products from our collection</p>
        <div className="cta">
          <Link to="/dashboard" className="button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
