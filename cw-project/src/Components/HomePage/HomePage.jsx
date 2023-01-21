import React from "react";
import style from "./HomePage.module.css";
import blackWatch from "../../assets/black-unity-watch.jpg";
import iphone14Pro from "../../assets/iphone14-pro.jpg";
import applewatch from "../../assets/apple-watch.jpg";
import iphone14 from "../../assets/iphone-14.jpg";
import applecard from "../../assets/apple-card.jpg";
import applegiftcard from "../../assets/apple-gift-card.jpg";
import HeroSection from "../Navbar/HeroSection";
import FooterHome from "../Footer/Footer";
import Swiper from "swiper";
import Swiperrr from "./Swiperrr";


const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <div className={style.homepage_main_div}>
        {/* 1st div */}
        <div className={style.single_img_data}>
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Creativity and
            <br />
            <p style={{ marginTop: "-15px" }}>community.</p>
            <p style={{ marginTop: "-15px" }}> Woven together.</p>
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                Explore the new Black Unity watch
                <br />
                band and matching faces.
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.leran_and_by}
              >
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
            src={blackWatch}
            alt=""
            style={{ height: "250px", width: "100%" }}
          />
        </div>
        {/* 2nd div */}
        <div className={style.single_img_data}>
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Watch
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                A healthy leap ahead.
              </p>
              <p
                style={{ fontSize: "12px", fontWeight: "normal", color: "red" }}
              >
                {" "}
                SERIES 8
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.leran_and_by}
              >
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
            src={applewatch}
            alt=""
            style={{ height: "250px", width: "100%" }}
          />
        </div>
        {/* 3rd div */}
        <div className={style.single_img_data}>
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            iPhone 14 Pro
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                Pro.Beyond.
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.leran_and_by}
              >
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
            src={iphone14Pro}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />
        </div>

        {/* 4th div */}
        <div className={style.single_img_data_for_14}>
          <h1
            style={{
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            iPhone 14
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                Big and Bigger.
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.leran_and_by}
              >
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
            src={iphone14}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />
        </div>

        {/* 5th div */}
        <div className={style.single_img_data_for_gift_card}>
          {" "}
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            A gift for every wish.
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                Find something for everyone
                <br />
                this Lunar New Year. l
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.shop_the_gift}
              >
                Shop the gift guid &gt;
              </button>
              {/* <button
              style={{ marginLeft: "1rem", fontSize: "20px" }}
              className={style.leran_and_by}
            >
              Order Now &gt;
            </button> */}
            </div>
          </h1>
          <img
            src={applegiftcard}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />
        </div>

        {/* 6th div */}
        <div className={style.single_img_data_for_14}>
          {" "}
          <h1
            style={{
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Card
            <div>
              <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                Get up to 3% Daily Cash back
                <br />
                with every purchase.
              </p>
            </div>
            <div>
              <button
                style={{ fontSize: "20px" }}
                className={style.leran_and_by}
              >
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
            src={applecard}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />
        </div>
      </div>
      <Swiperrr/>
      <FooterHome/>
    </div>
  );
};

export default HomePage;
