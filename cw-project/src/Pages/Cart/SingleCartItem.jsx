import axios from "axios";
import React from "react";
import Pear from "../../assets/pear_logo.png";

const SingleCartItem = ({
  name = "MacBook Air with M1 chip - Space Gray",
  price = "1200",
  image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2022-hero-blue-cell-select_FMT_WHH?",
  id
}) => {
  return (
    <div key={id}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          width: "70%",
          margin: "40px auto",
        }}
      >
        <div style={{ width: "15%" }}>
          <img
            src={image}
            alt="product"
            width={"100%"}
          />
        </div>
        <div style={{ width: "85%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div>
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                {name}
              </span>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  margin: "20px 0px",
                }}
              >
                Pay 0% APR for 12 months:
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  color: "#267cd3",
                }}
              >
                Show product details {">"}
              </p>
            </div>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
              ₹{price}
              </span>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  margin: "20px 0px",
                }}
              >
                ₹16699.50/mo.per
              </p>
              <p
                style={{
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#267cd3",
                }}
              >
                <button onClick={()=>{
                  axios.delete(` http://localhost:8080/cart/${id}`)
                  .then(res=>res.data)
                  .catch(err=>console.log(err))
                  location.reload()
                }}>Remove</button>
              </p>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid gray",
              width: "100%",
              margin: "30px 0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left" }}>
            <div>
              <img src={Pear} alt="" width={"60px"}/>
            </div>
            <div style={{marginLeft:"0px"}}>
              <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Add PearCare+ for iPad (10th generation) for $69.00
              </h1>
              <p style={{ fontSize: "15px", fontWeight: "normal" }}>
                Protect your iPad, Pear Pencil, and Pear-branded keyboard from
                accidental drops and spills with PearCare+ — as often as you
                need.
              </p>
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#267cd3",
                }}
              >
                Learn More {">"}
              </h1>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#267cd3",
                }}
              >
                Add
              </h1>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid gray",
              width: "100%",
              margin: "30px 0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              Add free engraving
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#267cd3",
                }}
              >
                Add
              </h1>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid gray",
              width: "100%",
              margin: "30px 0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              Add free engraving
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#267cd3",
                }}
              >
                Add
              </h1>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid gray",
              width: "100%",
              margin: "30px 0px",
            }}
          />
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%"}}>
            <h1 style={{fontSize:"15px",fontWeight:"bold"}}>Find out how soon you can get this item. <span style={{color:"#267cd3"}}>Enter zip code</span></h1>
            <div style={{display:"flex",gap:"200px"}}>
              <p>In stock and ready to ship.</p>
              <p>Pick up at an Apple Store near you.</p>
            </div>
          </div>
        </div>
      </div>
      <hr
            style={{
              border: "1px solid gray",
              width: "90%",
              margin: "30px auto",
            }}
          />
    </div>
  );
};

export default SingleCartItem;
