import React from "react";
import watch from "../../assets/watch.png";
import { Grid } from "@chakra-ui/react";
import unity from "./img/unity.png";
import ultra from "./img/ultra.png";
import watch1 from "./img/watch1.png";
import watch2 from "./img/watch2.png";
import watch3 from "./img/watch3.png";
import watch4 from "./img/watch4.png";
import watch5 from "./img/watch5.png";

import ProductCard from "../../Components/ProductCard";

const Watch = () => {
  const data = [
    {
      id: 1,
      image: "https://www.apple.com/v/watch/bb/images/compare/compare_s8__q5ebcy3sahme_large.jpg",
    },
    {
      id: 2,
      image: "https://www.apple.com/v/watch/bb/images/compare/compare_se__fjdos6x4rmmy_large.jpg",
    },
    {
      id: 3,
      image: "https://www.apple.com/v/watch/bb/images/compare/compare_ultra__bzeon0dzb49y_large.jpg",
    },
  ];
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Watch
      <div style={{ backgroundColor: "black", width: "100%" }}>
        <img src={watch} alt="watch" style={{ width: "80%", margin: "auto" }} />
      </div>
      <div style={{ backgroundColor: "red", width: "100%" }}>
        <h1
          style={{
            backgroundColor: "red",
            color: "white",
            width: "35%",
            margin: "auto",
            padding: "10px",
            fontSize: "15px",
          }}
        >
          Find gifts to jumpstart their Lunar New Year. Shop the gift guide{" "}
          {">"}
        </h1>
      </div>
      <div style={{ backgroundColor: "#000000" }}>
        <img
          src={unity}
          alt="unity"
          style={{ width: "101%", margin: "auto" }}
        />
        <h1 style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}>
          Inspired by the creative process of mosaic, the new Black Unity <br />
          watch band and matching watch face ◊ symbolize the vibrancy of <br />{" "}
          Black communities and the power of unity.
          <br />
          <br /> Black Unity Sport Loop <br />
          $49
        </h1>
        <div>
          <button
            style={{
              backgroundColor: "rgb(0,113,227)",
              color: "white",
              padding: "3px 15px",
              borderRadius: "15px",
              fontSize: "18px",
            }}
          >
            Buy
          </button>
          <button
            style={{
              borderBottom: "1px solid green",
              borderTop: "1px solid red",
              borderLeft: "1px solid yellow",
              borderRadius: "15px",
              borderRight: "1px solid yellow",
              color: "white",
              margin: "20px",
              padding: " 3px 15px",
              fontSize: "18px",
            }}
          >
            Find out more
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#f5f5f7" }}>
        <img
          src={ultra}
          alt="ultra"
          style={{ width: "100%", margin: "auto" }}
        />
        <img
          src={watch1}
          alt="watch1"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <img
          src={watch2}
          alt="watch2"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
      <div>
        <img
          src={watch3}
          alt="watch3"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Which Apple Watch is right for you?
      </h1>
   
        <Grid templateColumns={{base:`repeat(1,1fr)`,sm:`repeat(2,1fr)`,lg:`repeat(3,1fr)`}} margin={"auto"} width={"70%"}>
        {data.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
        </Grid>
      <div
        style={{
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "95%",
          color: "white",
          background: "white",
          height: "800px",
          textAlign: "center",
          marginBottom: "10px",
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/holiday-2023/cny23_familypage_banner__f2ocdw1w53yq_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          // border:"1px solid green",
          zoom: "100%",
        }}
      >
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/holiday-2023/cny23_familypage_banner_bunnylogo__dr5frkhw4g8y_large.png"
          alt=""
          style={{ marginTop: "200px" }}
        />

        <h1
          style={{
            fontSize: "45px",
            fontWeight: "bolder",
            marginTop: "20px",
          }}
        >
          A gift for every wish.
        </h1>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          Find something for everyone
          <br />
          this Lunar New Year.
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          Shop the gift guide
        </p>
      </div>
      <div>
        <img src={watch4} alt="watch4" style={{width:"95%",margin:"auto"}} />
      </div>
      <div>
        <img src={watch5} alt="watch5"  style={{width:"96%",margin:"auto"}}/>
      </div>
    </div>
  );
};

export default Watch;
