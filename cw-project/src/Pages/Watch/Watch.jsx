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
import Navbar from "../../Components/Navbar/Navbar";
import FooterHome from "../../Components/Footer/Footer";

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
      <Navbar/>
      <div style={{ backgroundColor: "black", width: "100%",marginTop:"30px" }}>
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
      <div>
      <div style={{ backgroundColor: "rgb(245,245,247)" }}>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            fontSize: "13px",
            color: "gray",
            textAlign: "justify",
            gap: "20px",
            paddingBottom:"40px",
          }}
        >
          <h1 style={{ textAlign: "left" }}>
            * Apple Card Monthly Installments (ACMI) is a 0% APR payment option
            available only in the U.S. to select at checkout for certain Apple
            products purchased at Apple Store locations, apple.com, the Apple
            Store app, or by calling 1-800-MY-APPLE and is subject to credit
            approval and credit limit. See support.apple.com/kb/HT211204 for
            more information about eligible products. Variable APRs for Apple
            Card other than ACMI range from 14.74% to 25.74% based on
            creditworthiness. Rates as of December 1, 2022. If you choose the
            pay‑in‑full or one‑time‑payment option for an ACMI‑eligible purchase
            instead of choosing ACMI as the payment option at checkout, that
            purchase will be subject to the variable APR assigned to your Apple
            Card. Taxes and shipping are not included in ACMI and are subject to
            your card’s variable APR. See the Apple Card Customer Agreement for
            more information. ACMI is not available for purchases made online at
            the following special stores: Apple Employee Purchase Plan;
            participating corporate Employee Purchase Programs; Apple at Work
            for small businesses; Government, and Veterans and Military Purchase
            Programs, or on refurbished devices. iPhone activation required on
            iPhone purchases made at an Apple Store with one of these national
            carriers: AT&T, Sprint, Verizon, or T‑Mobile.
          </h1>

          <ol>
            <li style={{ marginBottom: "10px" }}>
              Screen size is measured diagonally. The displays on the 14‑inch
              and 16‑inch MacBook Pro have rounded corners at the top. When
              measured as a standard rectangular shape, the screens are 14.2
              inches and 16.2 inches diagonally (actual viewable area is less).
            </li>
            <li style={{ marginBottom: "10px" }}>
              1TB = 1 trillion bytes; actual formatted capacity less.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Testing conducted by Apple in October 2020 using preproduction
              MacBook Air systems with Apple M1 chip and 8-core GPU, configured
              with 8GB of RAM and 512GB SSD. The Apple TV app movie playback
              test measures battery life by playing back HD 1080p content with
              display brightness set to 8 clicks from bottom. Battery life
              varies by use and configuration. See apple.com/batteries for more
              information.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Testing conducted by Apple in May 2022 using preproduction MacBook
              Air systems with Apple M2, 8-core CPU, 8-core GPU, 8GB of RAM, and
              256GB SSD. The wireless web test measures battery life by
              wirelessly browsing 25 popular websites with display brightness
              set to 8 clicks from bottom. The Apple TV app movie playback test
              measures battery life by playing back HD 1080p content with
              display brightness set to 8 clicks from bottom. Battery life
              varies by use and configuration. See apple.com/batteries for more
              information.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Testing conducted by Apple in May 2022 using preproduction 13‑inch
              MacBook Pro systems with Apple M2, 8‑core CPU, 10‑core GPU, 8GB of
              RAM, and 256GB SSD. The wireless web test measures battery life by
              wirelessly browsing 25 popular websites with display brightness
              set to 8 clicks from bottom. The Apple TV app movie playback test
              measures battery life by playing back HD 1080p content with
              display brightness set to 8 clicks from bottom. Battery life
              varies by use and configuration. See apple.com/batteries for more
              information.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Testing conducted by Apple in November and December 2022 using
              preproduction 16‑inch MacBook Pro systems with Apple M2 Pro,
              12‑core CPU, 19‑core GPU, 16GB of RAM, and 1TB SSD. The wireless
              web test measures battery life by wirelessly browsing 25 popular
              websites with display brightness set to 8 clicks from bottom. The
              Apple TV app movie playback test measures battery life by playing
              back HD 1080p content with display brightness set to 8 clicks from
              bottom. Battery life varies by use and configuration. See
              apple.com/batteries for more information.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Actual diagonal screen size is 23.5 inches.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In-store trade-in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores, and
              may vary between in-store and online trade-in. Some stores may
              have additional requirements. Apple or its trade-in partners
              reserve the right to refuse or limit quantity of any trade-in
              transaction for any reason. More details are available from
              Apple’s trade-in partner for trade-in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </li>
            <li style={{ marginBottom: "10px" }}>
              The Apple One free trial includes only services that you are not
              currently using through a free trial or a subscription. Plan
              automatically renews after trial until cancelled. Restrictions and
              other terms apply.
            </li>
            <li style={{ marginBottom: "10px" }}>
              $6.99/month after free trial. Only one offer per Apple ID and only
              one offer per family if you’re part of a Family Sharing group,
              regardless of the number of devices you or your family purchases.
              This offer is not available if you or your Family have previously
              accepted an Apple TV+ one year free offer. Offer good for 3 months
              after eligible device activation. Plan automatically renews until
              cancelled. Restrictions and other terms apply.
            </li>
            <li style={{ marginBottom: "10px" }}>
              $4.99/month after free trial. Only one offer per Apple ID and only
              one offer per family if you’re part of a Family Sharing group,
              regardless of the number of devices you or your family purchases.
              Offer good for 3 months after eligible device activation. Plan
              automatically renews until cancelled. Restrictions and other terms
              apply.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Offer available to new subscribers who purchase an eligible device
              on or after September 7, 2022. $9.99/month after trial. Only one
              offer per Apple ID and only one offer per family if you’re part of
              a Family Sharing group, regardless of the number of devices you or
              your family purchases. Offer good for 3 months after eligible
              device activation, from December 12, 2022. Plan automatically
              renews until cancelled. Restrictions and other terms apply.
            </li>
          </ol>
          <p>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}
            General {">"} Software Update. Tap Download and Install.
            <br/>
            <br/>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
            <br/>
            <br/>
            Available for qualifying applicants in the United States.
            <br/>
            <br/>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
            <br/>
            <br/>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877‑255‑5923 with questions about Apple Card.
          </p>
          
          <hr  style={{ border:"1px solid rgb(232,232,235)",width:"100%"}}/>
          
        </div>
      </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default Watch;
