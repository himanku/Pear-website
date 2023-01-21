import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f8fcfd" }}>
      <div
        style={{
          height: "200px",
          width: "80%",
          backgroundColor: "#f8fcfd",
          margin: "auto",
          marginTop: "30px",
          color: "#6c757d",
          fontSize: "13px",
        }}
      >
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings &gt; General
          &gt; Software Update. Tap Download and Install.
        </p>
        <br />
        <p> Available for qualifying applicants in the United States.</p>
        <br />
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <br />
        <p>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
      </div>
      <hr style={{ width: "80%", margin: "auto" }} />
      <div className="footer-container">
        <div className="footer-col">
          <h3>Shop and Learn</h3>
          <p><a href="#">Store</a></p>
          <p><a href="#">Mac</a></p>
          <p><a href="#">iPad</a></p>
          <p><a href="#">iPhone</a></p>
          <p><a href="#">Watch</a></p>
          <p><a href="#">AirPods</a></p>
          <p><a href="#">TV&Home</a></p>
          <p><a href="#">Air Tag</a></p>
          <p><a href="#">Accessories</a></p>
          <p><a href="#">Gift Cards</a></p>
       
        </div>
        <div className="footer-col">
          <h3>Services</h3>
          <p><a href="#">Apple Music</a></p>
          <p><a href="#">Apple TV+</a></p>
          <p><a href="#">Apple Fitness+</a></p>
          <p><a href="#">Apple News+</a></p>
          <p><a href="#">Apple Arcade</a></p>
          <p><a href="#">iCloud</a></p>
          <p><a href="#">Apple One</a></p>
          <p><a href="#">Apple Card</a></p>
          <p><a href="#">Apple Books</a></p>
          <p><a href="#">Apple Podcast</a></p>
        </div>
        <div className="footer-col">
          <h3>Apple Store</h3>
          <p><a href="#">Find a Store</a></p>
          <p><a href="#">Genius Bar</a></p>
          <p><a href="#">Today at Apple</a></p>
          <p><a href="#">Apple Camp</a></p>
          <p><a href="#">Financing</a></p>
          <p><a href="#">Store App</a></p>
          <p><a href="#">Refurbished</a></p>
          <p><a href="#">Clearance</a></p>
          <p><a href="#">Order Status</a></p>
          <p><a href="#">Shopping Help</a></p>
        
        </div>
        <div className="footer-col">
          <h3>For Business</h3>
          <p><a href="#">Apple Business</a></p>
          <p><a href="#">Shop for Business</a></p>
          <br />
         <h3>For Education</h3>
         <p><a href="#">Apple Education</a></p>
         <p><a href="#">Shop for K-12</a></p>
         <p><a href="#">Shop For College</a></p>
        <br />
        <br />
        </div>
        <div className="footer-col">
          <h3>Apple Values</h3>
          <p><a href="#">Accessibility</a></p>
          <p><a href="#">Education</a></p>
          <p><a href="#">environment</a></p>
          <p><a href="#">Privacy</a></p>
          <br />
          <h3>About Apple</h3>
          <p><a href="#">Newsroom</a></p>
          <p><a href="#">Apple Leadership</a></p>
          <p><a href="#">Investors</a></p>
          <p><a href="#">Contact Apple</a></p>
        </div>
        
      </div>
      <br />
      <br />
      <p className="footer-blue-line">Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE</p>
      <br />
      <hr style={{ width: "80%", margin: "auto" }} />
      <p></p>
      <div style={{width: "80%",margin: "auto", display:'flex',justifyContent:"space-between",paddingBottom:'50px',fontSize:"13px"}}>
        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
        <p>United States</p>
      </div>
    </div>
  );
};

export default Footer;
