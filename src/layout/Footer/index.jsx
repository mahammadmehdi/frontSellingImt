import React from "react";
import "./index.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="top">
          <div className="aboutUS">
            <h3>ABOUT US</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</span></div>
          <div className="quickLinks">
            <h3>QUICK LINKS</h3>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </div>
          <div className="followUs">
            <h3>FOLLOW US</h3>
           <div className="icon"> <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i></div>
          </div>
          <div className="featuredProduct">
            <h3>FEATURED PRODUCT</h3>
            <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"  />
            <div className="name">Leather Brown Shoe</div>
            <h6 className="price">$60.00</h6>
            <button className="btn">ADD TO CART</button>
          </div>
        </div>
        <div className="bottom">
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
