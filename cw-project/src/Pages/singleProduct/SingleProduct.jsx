import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CiDeliveryTruck } from 'react-icons/ci';


const SingleProduct = () => {
  let id = JSON.parse(localStorage.getItem("singleProduct"));
  console.log(id);
  const [data, setData] = useState({});
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/mac/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(data.image);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      SingleProduct
      <div style={{backgroundColor:"#f5f5f7",width:"100%"}}>
        <div style={{color:"gray",padding:"15px",margin:"auto"}}>
        Pay for your new Mac over 12 months at 0% APR with Apple Card.Footnote◊ Just choose Apple Card Monthly Installments when you check out to apply.<br/> <span style={{color:"blue"}}>Learn more {">"}</span>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "45px", fontWeight: "bolder" }}>
          Choose your new MacBook Pro.
        </h1>
        <p style={{ fontSize: "15px", fontWeight: "normal" }}>
          Order MacBook Pro 14” and MacBook Pro 16” now. Available starting 1.24
        </p>
      </div>
      <div>
        {data && <img src={data.image} alt="name" width="350px" />}
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-m2-icon-mac-202206?wid=51&hei=51&fmt=png-alpha&.v=1664499199970"
          alt="chip"
          style={{ margin: "20px " }}
        />
        <h1
          style={{ fontSize: "25px", fontWeight: "bolder", textAlign: "left" }}
        >
          8-Core CPU
          <br />
          10-Core GPU
          <br />
          8GB Unified Memory
          <br />
          512GB SSD Storage¹
        </h1>

        <p
          style={{ fontSize: "15px", fontWeight: "normal", textAlign: "left" }}
        >
          16-core Neural Engine <br />
          13-inch Retina display with True Tone
          <br />
          Two Thunderbolt / USB 4 ports
          <br />
          Magic Keyboard
          <br />
          Touch Bar and Touch ID
          <br />
          Force Touch trackpad
        </p>
        {data && (
          <h1
            style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}
          >
            ₹ {data.price}
          </h1>
        )}
        {data && <p>{data.description}</p>}
        <p style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}>
          Apple Trade In
          <br />
          <span
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            Get credit toward a new Mac when you <br /> trade in your eligible
            computer. Or recycle <br /> it for free.Footnote◊◊
          </span>
        </p>
        <Link>
          <button
            style={{
              backgroundColor: "#0071e3",
              color: "white",
              padding: "10px 70px",
              borderRadius: "10px",
              margin: "20px auto",
            }}
            onClick={()=>{
                // let newdata=JSON.parse(localStorage.getItem("cart")||[])
                // newdata.push(data)
                // localStorage.setItem("cart",JSON.stringify(newdata))
                axios.post(`http://localhost:8080/cart`,data)
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
            }}
          >
            Add to Cart
          </button>
        </Link>
        <h1 style={{fontSize:"15px",fontWeight:"bold",textAlign:"center",display:"flex",justifyContent:"left",alignItems:"center"}}><CiDeliveryTruck size={"40px"}/>Delivery:</h1>

        <h1 style={{fontSize:"35px",fontWeight:"bold",margin:"30px"}}>What’s in the Box</h1>
      </div>
      <div style={{display:"flex",gap:"20px",margin:"30px auto"}}>
        <div>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13-witb-space-202005?wid=576&hei=392&fmt=p-jpg&qlt=95&.v=1587262414482" alt="mac" />
        <h1>13-inch MacBook Pro</h1>
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-witb-cable-201911?wid=179&hei=392&fmt=p-jpg&qlt=95&.v=1588707220624" alt="charger" />
            <h1>USB-C Charge Cable (2 m)</h1>
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-witb-adapter-202206?wid=179&hei=392&fmt=p-jpg&qlt=95&.v=1654020202147" alt="ipad" />
            <h1>67W USB-C Power Adapter</h1>
        </div>
      </div>
      <div>
        <h1 style={{fontSize:"25px",fontWeight:"bolder",margin:"20px auto"}}>What to consider when choosing your MacBook Pro.</h1>
      </div>
      <div>
        <h1 style={{fontSize:"35px",fontWeight:"bolder",margin:"50px auto"}}>Compare Mac models</h1>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-compare-202301?wid=903&hei=321&fmt=jpeg&qlt=95&.v=1671167770786" alt=""  style={{margin:"90px auto"}} />
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecare-hero-bb-201706?wid=152&hei=152&fmt=jpeg&qlt=95&.v=1629955311000" alt=""  style={{margin:"90px auto"}}/>
        <h1 style={{fontSize:"30px",fontWeight:"bolder"}}>AppleCare+ for Mac</h1>
        <p style={{fontSize:"15px",fontWeight:"normal",textAlign:"left",width:"100%",margin:"30px auto"}}>Every Mac comes with a one-year limited warrantyand up to 90 days of complimentary technical support<br/>. AppleCare+ for Mac extends your coverage from your AppleCare+ purchase date and adds unlimited <br/> incidents of accidental damage protection, each subject to a service fee of $99 for screen damage or external enclosure damage, or<br/> $299 for other accidental damage, plus applicable tax. In addition, you’ll get <br/> 24/7 priority access to Apple experts via chat or phone. For complete details, see the terms.</p>
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
    </div>
  );
};

export default SingleProduct;
