import React from "react";
import "./index.scss";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsAll">
        <div className="left">
          <img className="image" src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" />
          <div className="personAbout">
            <div className="name">Trusted Merchant</div>
            <div className="time">FOR 50 YEARS</div>
          </div>
        </div>
        <div className="right">
          <div className="company">MERCHANT COMPANY</div>
          <h2 className="head">About Us</h2>
          <div className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </div>
          <button className="btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
