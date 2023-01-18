import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        height: "700px",
        width: "100%",
        backgroundColor: "black",
        height: "900px",
      }}
    >
      <nav
        style={{
          color: "#C1C1C1",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "00px",
          width: "100%",
          position: "relative",
          position: "sticky",
          top: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ marginRight: "50px", marginLeft: "20px" }}>
            <img
              src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
              alt="Apple"
              style={{ height: "30px" }}
            />
          </Link>
          <Link to="/store" style={{ marginRight: "50px" }}>
            Store
          </Link>
          <Link to="/mac" style={{ marginRight: "50px" }}>
            Mac
          </Link>
          <Link to="/ipad" style={{ marginRight: "50px" }}>
            iPad
          </Link>
          <Link to="/iphone" style={{ marginRight: "50px" }}>
            iPhone
          </Link>
          <Link to="/watch" style={{ marginRight: "50px" }}>
            Watch
          </Link>
          <Link to="/airpods" style={{ marginRight: "50px" }}>
            AirPods
          </Link>
          <Link to="/tv&home" style={{ marginRight: "50px" }}>
            TV&Home
          </Link>
          <Link to="/onlyonapple" style={{ marginRight: "50px" }}>
            Only on Apple
          </Link>
          <Link to="/accessories" style={{ marginRight: "50px" }}>
            Accessories
          </Link>
          <Link to="/support" style={{ marginRight: "50px" }}>
            Support
          </Link>
          <button
            style={{
              backgroundColor: "black",
              border: "none",
              marginLeft: "10px",
              marginRight: "50px",
            }}
          >
            <img
              src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
              alt="Search"
              style={{ height: "40px" }}
            />
          </button>
          <Link to="/signup" style={{ marginRight: "20px" }}>
            Login
          </Link>
        </div>
        {/* <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
       
        <button style={{backgroundColor: 'black', border: 'none', marginLeft: '10px'}}>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="Search" style={{height: '20px'}}/>
        </button>
      </div> */}
      </nav>
      
      <div >
        <h1 style={{color:'white',fontSize:'3rem',marginTop:'200px'}}>MacBook</h1>
        <img src="https://www.apple.com/v/home/ax/images/heroes/macbook-pro-14-and-16/hero_mbp_preorder__caf0s6im2nqq_large.jpg" alt="" />
      </div>
    </div>
          
  );
}

export default Navbar;
