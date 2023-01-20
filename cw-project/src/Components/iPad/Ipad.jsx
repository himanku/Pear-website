import { background, color, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import style from "./iPad.module.css";
import logo from "../.././assets/pear_light.png";

const Ipad = () => {
  return (
    <div >
      <div className={style.top}>
        <div className={style.top_1}>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/keyboard_light__emvaymybnp6q_large.svg"
              alt=""
            />
            <p>Keyboards</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadpro_light__eksnhatoqzu6_large.svg"
              alt=""
            />
            <p>iPad Air</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipados_light__iolxd8nzzcqe_large.svg"
              alt=""
            />
            <p>iPad</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_acc_light__gau97p46jyye_large.svg"
              alt=""
            />
            <p>iPad mini</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/shop_ipad_light__cruwa0cotbwy_large.svg"
              alt=""
            />
            <p>Compare</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadair_light__fwcr6ummn722_large.svg"
              alt=""
            />
            <p>Apple Pencil</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_light__fcshltpasu6i_large.svg"
              alt=""
            />
            <p>iPad Pro</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_compare_light__bdpd7ul1iasy_large.svg"
              alt=""
            />
            <p>Accessories</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadmini_light__fax9y0phijyq_large.svg"
              alt=""
            />
            <p>iPad OS</p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/chapternav/apple_pencil_light__b56nts0623aq_large.svg"
              alt=""
            />
            <p>Shop iPad</p>
          </div>
        </div>
      </div>
      <div className={style.addition}>
        <p>
          Find gifts to jumpstart their Lunar New Year. Shop the gift guide{" "}
          {">"}
        </p>
      </div>

      <div className={style.ipad_love}>
        <div className={style.image}>
          <img
            src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_medium.jpg"
            alt=""
          />
        </div>
        <div className={style.text}>
          <p>New</p>
          <h1>iPad</h1>
          <h4>Lovable. Drawable. Magical.</h4>

          <p>From $449</p>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className={style.ipad_pro}>
        <div style={{ display: "flex", width: "80%", margin: "auto" }}>
          <div className={style.text1}>
            <p style={{ color: "red" }}>New</p>
            <h1>iPad Pro</h1>
            <div style={{ display: "flex" }}>
              <h4>Supercharged by </h4>
              <img
                style={{ width: "20%", margin: "-10px 5px 0px" }}
                src="https://www.apple.com/v/ipad/home/cd/images/overview/hero/m2_chip__buj2soxeo91e_large.png"
                alt=""
              />
            </div>
            <h4>From $799</h4>
          </div>
          <div className={style.iPad_pro}>
            <img
              src="https://www.apple.com/v/ipad/home/cd/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
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
      {/* ------------------------------------------------- */}
      <div className={style.fifth}>
        <div className={style.left}>
          <h1>
            Get 3% Daily Cash back <br />
            with Apple Card.
          </h1>
          <p>
            And pay over time, interest‑free when you choose to check out with
            Apple Card Monthly Installments.
          </p>
          <br />
          <br />
          <br />
          <div>
            <img
              style={{ width: "100%" }}
              src="https://www.apple.com/v/ipad/home/cd/images/overview/apple_card_banner/acmi/apple_card_monthly_installments__fhqbbrc4alm6_large.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={style.right}>
          <h1>
            Trade in your current iPad and get credit toward a new one.
          </h1>
          <p>
            With Apple Trade In, just give us your eligible iPad and get credit
            for a new one. It’s good for you and the planet.
          </p>

          <div>
            <img
              style={{ width: "70%", paddingLeft: "100px", marginTop: "20px" }}
              src="https://www.apple.com/v/ipad/home/cd/images/overview/trade_in__ejwkdm497no2_large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}
      <div className={style.accessories}>

        <div className={style.head}>
          <h1>Accessories</h1>
          <p>Explore cases, covers, keyboards,<br /> Apple Pencil, AirPods, and more.</p>
          <br /><br />
          <img src="https://www.apple.com/v/ipad/home/cd/images/overview/accessories__gdpezee1naai_large.jpg" alt="" />

        </div>
       
      </div>
    </div>
  );
};

export default Ipad;
