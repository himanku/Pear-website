import React from "react";
/*
  {
    "screen":"13.6”",
    "display":"Liquid Retina display9",
    "chipversion":"Apple M2 chip",
    "cpu":"8-core",
    "gpu":"10-core",
    "selection6":"24GB",
    "tbsize":"2TB",
    "selection8":"18 hrs",
    "selection9":"",
    "selection10":"Touch ID",
    "music":"",
    "weight":"",
    "camera":"",
    "name":"",
    "image":"",
    "fromPrice":"",
    "color":""
    },
*/

const Mac = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
      {/* =============================================== */}
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
          // marginBottom: "-200px",
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          // border:"1px solid green"
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
          <p
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
          >
            Find something for everyone
            <br />
            this Lunar New Year.
          </p>
          <p
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
          >
            Shop the gift guide
          </p>
        </div>
      </div>
      {/* =================================================== */}
      <h1 style={{ fontSize: "45px", fontWeight: "bolder", marginTop: "0px" }}>
        Which Mac is right for you?
      </h1>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          margin: "40px",
        }}
      >
        <button>Laptop</button>
        <button>Desktop</button>
      </div>
      <div>cart section .....</div>
      {/* ================================================================ */}
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
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/skywalker-btm/btm_tile__foyxdms85eum_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          // border:"1px solid green",
          zoom: "100%",
        }}
      >
        <div
          style={{
            border: "0px solid red",
            marginTop: "300px",
            marginRight: "65%",
          }}
        >
          <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Behind the Mac
          </h1>
          <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
            Hear the Force.
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Learn how the pros at Skywalker Sound <br /> push the limits of
            sonic storytelling.
          </p>
          <a style={{ color: "#134677", marginTop: "40px" }}>
            Watch the film <button>play</button>
          </a>
        </div>
      </div>
      {/* ====================================================================== */}
      <div style={{ display: "flex" ,height:"500px"}}>
        <div style={{ width: "45%", marginTop: "100px",height:"500px" }}>
          <h1 style={{ fontSize: "45px", fontWeight: "bolder" }}>
            Get 3% Daily Cash <br />
            back with Apple Card.
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "normal" }}>
            And pay for your new Mac over 12 months,
            <br /> interest‑free when you choose to check out <br /> with Apple
            Card Monthly Installments.*
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "#134677" }}>
            Learn more
          </p>
        </div>
        <div
          style={{
            display: "flex",
            //   justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "45%%",
            color: "white",
            background: "white",
          }}
        >
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/retail/acmi__e6hmokx3ap0m_large.jpg"
            alt=""
          />
        </div>
      </div>
      {/* ===== */}
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "58px", fontWeight: "bolder" }}>
          Built-in Apps
        </h1>
        <p style={{ fontSize: "18px", fontWeight: "normal" }}>
          Powerful creativity and productivity tools live inside every Mac —
          apps that help you explore, connect,
          <br /> and work more efficiently.
        </p>
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/get-more/apple-gift-card/apple_gift_card_tile__d777mr3okcom_large.jpg"
          alt="dummy"
        />
        <p style={{ fontSize: "17px", fontWeight: "normal" }}>
          Safari has innovative features that let you enjoy more of the web. In
          even more ways. Built-in <br /> privacy features help protect your
          information and keep your Mac secure. An updated start <br /> page
          helps you easily and quickly save, find, and share your favorite
          sites. And Siri <br /> suggestions surface bookmarks, links from your
          reading list, iCloud Tabs, links you receive in <br /> Messages, and
          more.
        </p>
        <a href="" style={{ color: "blue", marginBottom: "100px" }}>
          Learn more about Safari
        </a>
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/bia_safari__gns2a0avylyu_large.jpg"
          alt="lap"
          width="80%"
        />
        <h1 style={{ fontSize: "45px", fontWeight: "bold", marginTop: "50px" }}>
          Pro Apps
        </h1>
        <p style={{ fontSize: "18px", fontWeight: "normal" }}>
          For professionals ready to push their creativity, these
          industry-leading apps offer maximum control over <br /> editing,
          processing, and output of music and film.
        </p>
        {/* <img src="https://www.apple.com/v/mac/home/bs/images/meta/mac__bfa414svyuc2_og.png" alt=""  /> */}
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/get-more/apple-gift-card/apple_gift_card_tile__d777mr3okcom_large.jpg"
          alt="dummy"
        />
        <p
          style={{ fontSize: "17px", fontWeight: "normal", marginTop: "30px" }}
        >
          Logic Pro puts a complete recording and MIDI production studio on your
          Mac, with <br />
          everything you need to write, record, edit, and mix like never before.
          And with a huge <br /> collection of full-featured plug-ins along with
          thousands of sounds and loops, you’ll have <br />
          everything you need to go from first inspiration to final master, no
          matter what kind of music <br /> you want to create.
        </p>
        <h1 style={{ fontSize: "58px", fontWeight: "bolder", margin: "20px" }}>
          Get more out of Mac
        </h1>
        <img
          src="https://www.apple.com/v/mac/home/bs/images/overview/get-more/apple-one/bundle__gaazdu9x3jqu_large.jpg"
          alt=""
        />
      </div>
      {/* ====================================================================== */}
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
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          // border:"1px solid green",
          zoom: "100%",
        }}
      >
        <div style={{ border: "0px solid green", margin: "300px" }}>
          <h1 style={{ fontSize: "45px", fontWeight: "bolder" }}>
            Apple at Work
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "normal" }}>
            Get the power to take your business to the next level.
          </p>
          <p style={{ fontSize: "25px", fontWeight: "normal" }}>
            Learn about Apple at Work
          </p>
          <p style={{ fontSize: "25px", fontWeight: "normal" }}>
            Learn more about Mac for business
          </p>
        </div>
      </div>
      {/* ========== */}
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
          backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/get-more/education__bq047y5fu7n6_large.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          // border:"1px solid green",
          zoom: "100%",
        }}
      >
        <div style={{ border: "0px solid green", margin: "300px" }}>
          <h1 style={{ fontSize: "45px", fontWeight: "bolder" }}>
            Apple and Education
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "normal" }}>
            Empowering educators and students to move the world forward..
          </p>
          {/* <p style={{fontSize:"25px",fontWeight:"normal"}}>Learn about Apple at Work</p>/ */}
          <p style={{ fontSize: "25px", fontWeight: "normal" }}>
            Learn about Apple and Education
          </p>
        </div>
      </div>
      {/* ===========================bottom thing=================================== */}
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
  );
};

export default Mac;
