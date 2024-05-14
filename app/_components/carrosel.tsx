import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface CarroselProps {
  images: string[];
}

const Carrosel: React.FC<CarroselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            width={300}
            height={200}
          />{" "}
        </div>
      ))}
    </Slider>
  );
};
export default Carrosel;
