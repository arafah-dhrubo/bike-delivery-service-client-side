import React from "react";
import Reviews from "../../Reviews/Reviews";
import Embedeb from "../Embedeb/Embedeb";
import Slider from "../Header/Slider/Slider";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Packages></Packages>
      <Reviews></Reviews>
      <Embedeb></Embedeb>
    </div>
  );
};

export default Home;
