import React from "react";

const Mac = () => {
  return (
    <div>
      Mac
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "400px",
          color: "white",
          background: "black",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "50px", fontWeight: "bolder" }}>
          Introducing the new <br />
          MacBook Pro and Mac mini.
        </span>
        <button
          style={{
            background: "white",
            width: "300px",
            borderRadius: "20px",
            color: "black",
            padding: "10px",
          }}
        >
          Watch the announcement
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          color: "white",
          background: "black",
          height: "auto",
          paddingTop: "60px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "orange", fontWeight: "bold" }}>New</p>
        <span style={{ fontSize: "50px", fontWeight: "bolder" }}>
          MacBook Pro <br />
          <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
            Mover. Maker. Boundary breaker.
          </span>
          .
        </span>
        <p style={{ fontWeight: "bold", margin: "20px" }}>From $1999</p>
        <span>
          <button
            style={{
              //   color: "black",
              background: "#2484df",
              width: "100px",
              borderRadius: "20px",
              color: "white",
              padding: "5px",
            }}
          >
            Order Now
          </button>

          <span style={{ color: "#2484df", paddingLeft: "15px" }}>
            Learn more
          </span>
        </span>
        <p style={{ margin: "20px" }}> Available starting 1.24</p>
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large.jpg"
          alt=""
          style={{ margin: "50px 0px", height: "70%" }}
        />
      </div>
      {/* ======================================================== */}
      <div
        style={{
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          color: "white",
          background: "black",
          height: "800px",
          paddingTop: "60px",
          textAlign: "center",
          marginBottom: "20px",
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p style={{ color: "orange", fontWeight: "bold" }}>New</p>
        <span style={{ fontSize: "50px", fontWeight: "bolder" }}>
          Mac mini
          <br />
          <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
            More muscle. More hustle.
          </span>
          .
        </span>
        <p style={{ fontWeight: "bold", margin: "20px" }}>From $599</p>
        <span>
          <button
            style={{
              background: "#2484df",
              width: "100px",
              borderRadius: "20px",
              color: "white",
              padding: "5px",
            }}
          >
            Order Now
          </button>

          <span style={{ color: "#2484df", paddingLeft: "15px" }}>
            Learn more
          </span>
        </span>
        <p style={{ margin: "20px" }}> Available starting 1.24</p>
        {/* <img
                    src="https://www.apple.com/v/mac/home/bs/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg"
                    alt=""
                    style={{ border:"2px solid red"}}
                /> */}
      </div>
      {/* /============================================================ */}
      <div>
      <div
        style={{
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "90%",
          color: "white",
          background: "white",
          height: "800px",
          textAlign: "center",
          marginBottom: "10px",
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/holiday-2023/cny23_familypage_banner__f2ocdw1w53yq_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          margin:"auto"
        }}
      >
       
      </div>
      </div>
    </div>
  );
};

export default Mac;
