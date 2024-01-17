import React from "react";
import "./index.scss"

function WeOfferServices() {
  return (
    <div className="weOfferServices">
      <div className="weOfferServicesAll">
        <div className="services">OUR SERVICES</div>
        <h2 className="head">We Offer Services</h2>
        <div className="cards">

          <div className="card">
            <div className="icon">
            <i className="fa-solid fa-circle-half-stroke"></i>
            </div>
            <div className="text">
                <div className="name">Business Consulting</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <i className="fa-solid fa-delete-left"></i>
            </div>
            <div className="text">
            <div className="name">Market Analysis</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-clock"></i></div>
            <div className="text">
            <div className="name">Financial Management</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-thumbs-up"></i></div>
            <div className="text">
            <div className="name">User Monitoring</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-briefcase"></i></div>
            <div className="text">
            <div className="name">Seller Consulting</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
            <div className="text">
            <div className="name">Financial Investment</div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeOfferServices;
