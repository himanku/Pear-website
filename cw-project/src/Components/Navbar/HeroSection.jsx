import React from "react";
import style from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div>
         {/* 1st Image */}
      <div style={{ backgroundColor: "black",paddingTop:'10px' }}>
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

      <div style={{ backgroundColor: "black",paddingTop:'10px',marginBottom:'12px'}}>
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
    </div>
  );
};

export default HeroSection;
