import React from "react";
import { Carousel } from "react-bootstrap";

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div className="w-100">
      <Carousel className="bg-transparent mx-auto">
        <Carousel.Item interval={2000}>
          <img
            className="height d-block mx-auto rounded border border-success w-100 h-100"
            src="https://i.ibb.co/QNC9ys3/pexels-axel-681795-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block mx-auto rounded border border-success w-100 h-100"
            src="https://i.ibb.co/TtH0PXx/pexels-cottonbro-5911709.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block mx-auto rounded border border-success w-100 h-100"
            src="https://i.ibb.co/1QDXCtf/pexels-jodie-louise-805303.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
