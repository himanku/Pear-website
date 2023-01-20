import { Heading } from '@chakra-ui/react'
import React from 'react'
import style from "../iPhone/Iphone.module.css"
import { TopComponent } from './TopComponent'
export const Iphone = () => {
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
            <Heading as="h4" size="xl" >iPhone 14 Pro</Heading>
            <Heading as="h1" size="3xl" style={{color:"purple"}}>Pro.Beyond</Heading>
            <br />
            <p >From $41.62/mo. for 24 mo. or $999 before trade‑in</p>

            <div>

            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/hero/iphone_14_pro_hero__e4ivycyx40k2_large.jpg" alt="" />
          </div>

          </div>
        </div>
    </div>
  )
}
