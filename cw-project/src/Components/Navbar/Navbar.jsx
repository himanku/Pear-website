import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pear-dark.png";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
      
        // height: "100px",
      }}
    >
      <nav
        style={{
          color: "#C1C1C1",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          width: "80%",
          margin:"auto",
          position: "relative",
          position: "sticky",
          top: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              marginRight: "50px",
              // marginLeft: "180px",
              color: "#C1C1C1",
            }}
          >
            <img
              src={logo}
              alt="Apple"
              style={{ height: "25px", fontSize: "13px" }}
            />
          </Link>
          <Link
            to="/store"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Store
          </Link>
          <Link
            to="/mac"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Mac
          </Link>
          <Link
            to="/ipad"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            iPad
          </Link>
          <Link
            to="/iphone"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            iPhone
          </Link>
          <Link
            to="/watch"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Watch
          </Link>
          <Link
            to="/airpods"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            AirPods
          </Link>
          <Link
            to="/tv&home"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            TV&Home
          </Link>
          <Link
            to="/onlyonapple"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Only on Apple
          </Link>
          <Link
            to="/accessories"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Accessories
          </Link>
          <Link
            to="/support"
            style={{ marginRight: "50px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
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
              style={{ height: "40px", fontSize: "13px" }}
            />
          </button>
          <Link
            to="/signup"
            style={{ marginRight: "20px", fontSize: "13px" }}
            className={style.navbr_link_hover}
          >
            Login
          </Link>
        </div>
      </nav>
      {/* 1st Image */}
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            marginTop: "150px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          MacBook Pro
          <div>
            <p style={{ fontSize: "25px", fontWeight: "normal" }}>
              {" "}
              Supercharged by M2 Pro and M2 Max.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                color: "grey",
                marginTop: "10px",
              }}
            >
              Available starting 1.24
            </p>
          </div>
          <div>
            <button style={{ fontSize: "20px" }} className={style.leran_and_by}>
              Learn More &gt;
            </button>
            <button
              style={{ marginLeft: "1rem", fontSize: "20px" }}
              className={style.leran_and_by}
            >
              Order Now &gt;
            </button>
          </div>
        </h1>
        <img
          src="https://www.apple.com/v/home/ax/images/heroes/macbook-pro-14-and-16/hero_mbp_preorder__caf0s6im2nqq_large.jpg"
          alt="macbook"
        />
      </div>

      <div style={{ backgroundColor: "white", height: "12px" }}></div>
      {/* 2nd Image */}
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            marginTop: "150px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Mac Mini
          <div>
            <p style={{ fontSize: "25px", fontWeight: "normal" }}>
              {" "}
              Supercharged by M2 Pro and M2 Max.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                color: "grey",
                marginTop: "10px",
              }}
            >
              Available starting 1.24
            </p>
          </div>
          <div>
            <button style={{ fontSize: "20px" }} className={style.leran_and_by}>
              Learn More &gt;
            </button>
            <button
              style={{ marginLeft: "1rem", fontSize: "20px" }}
              className={style.leran_and_by}
            >
              Order Now &gt;
            </button>
          </div>
        </h1>
        <img
          src="https://www.apple.com/v/home/ax/images/heroes/mac-mini/hero_macmini_preorder__ixuialh97nyq_large.jpg"
          alt="macmini"
        />
      </div>

      <div style={{ backgroundColor: "white", height: "10px" }}></div> 
    </div>
  );
}

export default Navbar;
