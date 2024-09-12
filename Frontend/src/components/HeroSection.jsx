import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="https://png.pngtree.com/background/20231101/original/pngtree-3d-rendered-interface-for-a-homemade-food-app-picture-image_5830862.jpg" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                {/* <img src="/threelines.svg" alt="three" /> */}
              </div>
              {/* <img src="/logo1.svg" alt="logo" className="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-mobile-meal-delivery-3d-illustration-of-a-hamburger-atop-a-smartphone-image_3868358.jpg" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
