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
    slidesToShow: 2, 
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear', 
    rtl: true, 
  };

  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to Safaricom Online Sales App</h1>
        <Link to="/dashboard" className="button very-small-button" style={{ fontSize: '15px', padding: '4px 6px' }}>
          Shop Now
        </Link>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {/* Your slide items */}
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/07/11/12/42/smartphone-2493419_1280.jpg" alt="Slide 1" />
            <img src="https://i2.wp.com/androidkenya.com/wp-content/uploads/2019/12/Nokia_7_2_Safaricom_Open_Day_2019.jpg?fit=1280%2C720&ssl=1" alt="Slide 2" />
          </div>
          <div>
            <img src="https://assets.shop.masoko.com/vaimo/carousel/images/x/i/xiaomi_mobile_web_banner.png" alt="Slide 3" />
            <img src="https://www.dignited.com/wp-content/uploads/2023/04/4G-Router-in-Kenya.jpg" alt="Slide 4" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRiD_c-TbAut0tcwnuUkNLw7TtL8OmOGLzA&usqp=CAU" alt="Slide 5" />
            <img src="https://www.fkaysmartphone.com/web/image/product.template/9975/image_1920?unique=5ac1d06" alt="Slide 6" />
          </div>
          <div>
            <img src="https://internet.safaricom.co.ke/static/media/4g_intro.378f55a0.png" alt="Slide 7" />
            <img src="https://techtrendske.co.ke/wp-content/uploads/2022/07/Safaricom-Home-Internet.jpeg" alt="Slide 8" />
          </div>
          <div>
            <img src="https://www.techarena.co.ke/wp-content/uploads/2023/02/Tecno-Phantom-X2-review-1024x768.jpg" alt="Slide 9" />
            <img src="https://pbs.twimg.com/media/Ed6lRrgWsAA_dAy.jpg" alt="Slide 10" />
          </div>
          <div>
            <img src="https://pctechmag.com/wp-content/uploads/2017/11/Safaricom-Kenya-LARGE.jpg" alt="Slide 11" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
