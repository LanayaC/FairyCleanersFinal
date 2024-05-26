import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json"; // Ensure the path to your JSON file is correct
import BannerCards from './BannerCards'; // Adjust the import path if necessary

function BannerServiceSample() {
  const filterData = List.filter((data) => data.category === "Services" || data.category === "Promotion");
  const promotionData = filterData.filter((data) => data.category === "Promotion");
  const serviceData = filterData.filter((data) => data.category === "Services");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">A Glimpse at our Magical Services!</h1>
        <p>Look here to see what our Fairy Cleaners can do for you!</p>
      </div>
      <div>
        <Slider {...settings}>
          {promotionData.map((item) => (
            <BannerCards item={item} key={item.id} />
          ))}
          {serviceData.map((item) => (
            <BannerCards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerServiceSample;
