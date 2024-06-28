import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banners = () => {
  const bannerImages = [
    {
      name: "Banner1",
      img: "./Banner1.jpg",
    },
    {
      name: "Banner2",
      img: "./Banner2.jpg",
    },
    {
      name: "Banner3",
      img: "./Banner3.jpg",
    },
  ];

  return (
    <>
      {bannerImages && bannerImages.length > 0 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
        >
          {bannerImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-full h-[400px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Banners;
