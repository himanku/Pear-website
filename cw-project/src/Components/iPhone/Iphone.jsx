import { Heading } from '@chakra-ui/react'
import React from 'react'
import style from "../iPhone/Iphone.module.css"
import { TopComponent } from './TopComponent'
import logo from "../.././assets/pear_logo.png";
import axios from 'axios';
import { Button } from '@chakra-ui/react';

export const Iphone = () => {
   const [data, setdata] = React.useState([]);

  const getData = async() =>{
    let res=await axios.get("http://localhost:8080/iphone");
    return res.data
  }

  const handleClick=async(data)=>{
    let res=await axios.post("http://localhost:8080/cart",data);
    console.log(res)
  }

  React.useEffect(() => {
    getData().then((res)=>setdata(res))
  }, []);
  
  

  return (
    <div >
        <div className={style.top}>

        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/shop_iphone_light__b2toggskllle_large.svg"} title={"iPhone 14 Pro"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/iphone_12_light__cxh2ll1zwpw2_large.svg"} title={"iPhone 14"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/iphone_ios_light__b8s4ws8o77iq_large.svg"} title={"iPhone 14 Pro"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/iphone_14_pro_light__dfhcc00ur2oi_large.svg"} title={"iPhone 13"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/airpods_light__8oj157p2476a_large.svg"} title={"AirPods"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg"} title={"iPhone12"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg"} title={"Compare"}/>
        <TopComponent src={"https://www.apple.com/v/iphone/home/bk/images/chapternav/airtag_light__cb2bmnv6aoeu_large.svg"} title={"Airtags"}/>
        </div>
        {/* --------------------------------------------- */}
        <div className={style.additional}>
            <p>Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments</p>
        </div>
        {/* ------------------------------------------------------ */}
        <div className={style.beyond}>
          <div className={style.bey}>
            <p style={{color:"gray"}}>New</p>
            <Heading as="h4" size="xl" >iPhone 14 Pro</Heading>
            <Heading as="h1" size="3xl" style={{color:"purple"}}>Pro.Beyond</Heading>
            <br />
            <p >From $41.62/mo. for 24 mo. or $999 before trade‑in</p>
          </div>
          <div>

            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/hero/iphone_14_pro_hero__e4ivycyx40k2_large.jpg" alt="" />
          </div>

        </div>
        {/* ------------------------------------------------------------ */}
        <div className={style.Big}>
          <div className={style.bigger}>

             <p style={{color:"gray"}}>New</p>
            <Heading as="h4" size="xl" >iPhone 14</Heading>
            <Heading as="h1" size="3xl" style={{color:"#8A2BE2"}}>Big and Bigger</Heading>
            <br />
            <p >From $33.29/mo. for 24 mo. or $799 before trade‑in</p>

            <div>

            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/hero/iphone_14_hero__ceub5xriecgi_medium.jpg" alt="" />
          </div>

          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        <br /><br /><br />

        <div style={{display:'flex'}} className={style.cart}>
        {/* <Flex p={50} w="full" alignItems="center" justifyContent="center"> */}
      {
        data.map((ele,i)=>{
          return (
            <div className={style.cartItem}>

              <div className={style.imageComp}>

              <img src={ele.image} alt="" />
              <br />
              <img  style={{width:"50px",height:"10px"}}src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png" alt=""/>
              <br />
              </div>
              <p>{ele.name}</p>
              <p>{ele.description}</p>
              <p>₹{ele.price}</p>


              <Button onClick={()=>handleClick(ele)}>Buy</Button>
              <hr style={{FontWeight:"bold"}} />
            </div>
           
          )
        })
      }
      
      </div>



















{/* ---------------------------------------------trial-------------------------------- */}

        <br />
      <div style={{ margin: "auto" }}>
        <div className={style.pear}>
          <img
            style={{
              width: "90%",
              margin: "auto",
              position: "absolute",
              zIndex: "-1",
            }}
            src="https://www.apple.com/v/ipad/home/cd/images/overview/cny-2023/cny23_familypage_banner_ipad_envelope__ci4ppx3om9g2_large.jpg"
            alt=""
          />
          <img src={logo} style={{ color: "white", margin: "auto" }} alt="" />
          <h1>A gift for every wish.</h1>
          <h4>
            Find something for everyone this
            <br /> Lunar New Year.
          </h4>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
       <br/>

      <div className={style.why_apple_div} >
        <div className={style.why_apple}>
          <img
            style={{
              width: "90%",
              margin: "auto",
              position: "absolute",
              zIndex: "-1",
            }}
            src="https://www.apple.com/v/iphone/home/bk/images/overview/retail/why_apple__ezn1ktvka6oi_large.jpg"
            alt=""
          />
          {/* <img src={logo} style={{ color: "white", margin: "auto" }} alt="" /> */}
          <h1>Why Apple is the best  <br /> place to buy iPhone.</h1>
          <p>
          You can choose a payment option that works for you, <br /> pay less with  a trade‑in, connect your new iPhone to your carrier, and <br />  get set up quickly.
You can also chat with a Specialist anytime.
          </p>
        </div>
      </div>
            {/* -------------------------------------------------- */}
          <Heading as="h1" size="3xl" textAlign="center">Featured accessories</Heading>
            <br />
            <br />
            {/* -------------------------------------------------------- */}
    <div className={style.safe}>
      <div className={style.safe1}>
        <h1>MagSafe</h1>
        <p>Snap on a magnetic case, wallet, <br /> or both. And get faster wireless charging.</p>

      </div>
      <div className={style.safe2}>
        <img src="https://www.apple.com/v/iphone/home/bk/images/overview/accessories/magsafe__bfji5hb1mqsy_large.jpg" alt="" />
      </div>
    </div>
     {/* ------------------------------------------------- */}
     <br /><br />

     <div className={style.safe}>

      <div className={style.safe2}>
        <img src="https://www.apple.com/v/iphone/home/bk/images/overview/accessories/airtag__b5lt0bcbd9ua_large.jpg" alt="" />
      </div>
      <div className={style.safe1}>
        <h1>AirTag</h1>
        <p>Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.</p>

      </div>
    </div>

    </div>
  )
}
