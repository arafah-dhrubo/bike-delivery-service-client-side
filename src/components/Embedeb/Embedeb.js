import React from "react";

const Embedeb = () => {
  return (
    <div className="text-center w-75 mx-auto">
      <h1 className=" text-success my-5 border-top border-5 border-success rounded border-bottom py-3">
        How Motorcycles Work - The Basics
      </h1>
      <iframe
        className="text-center w-100"
        src="https://www.youtube.com/embed/mdOJ717PKRc"
        height="350px"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Embedeb;
