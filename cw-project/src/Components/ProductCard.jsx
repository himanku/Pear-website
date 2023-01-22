import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({image,name="Apple Watch Series 8",price="2490",description="Learn more >",id="0",review="25"}) => {

  return (
    <div>
      <div  style={{ display: "flex", flexDirection: "column", gap: "10px",justifyContent:"center",alignItems:"center",textAlign:"center" }}>
        <div>
            <img src={image} alt="name"  
            style={{margin:"auto",height:"200px"}}
            
            />
            <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png" alt="" 
            style={{margin:"auto",marginTop:"20px",marginBottom:"10px"}}
            
            />
            <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>{name}</h1>
            <p style={{marginBottom:"10px"}}>M2 chip, Review:{review}</p>
            <p >From ₹{price}</p>
            <Link to={"/singleProduct"}><button style={{backgroundColor:"#0071e3",borderRadius:"10px",padding:"0px 10px",color:"white",margin:"5px"}} onClick={()=>{
              localStorage.setItem("singleProduct",JSON.stringify(id))
            }}>Buy</button></Link>
            <p style={{color:"#0071e3",marginTop:"10px"}}>{description}</p>

        </div>
        <hr style={{border:"1px solid gray",width:"250px"}} />
        <div style={{marginBottom:"20px"}}>
          <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>14.2” or 16.2”</h1>
          <p>Liquid Retina XDR display1</p>
        </div>
        <div style={{marginBottom:"25px"}}> 
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_m2__c5vv0ufcdyc2_large.png"
            alt="Apple M2 chip"
            style={{margin:"auto"}}
          />
          <p>Apple M2 chip</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>8-core</h1>
          <p>CPU</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>10-core</h1>
          <p>GPU</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png"
            alt="Up to 16GB unified memory"
            style={{margin:"auto"}}
          />
          <p>Up to 16GB unified memory</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>2TB</h1>
          <p>Maximum configurable storage2</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png"
            alt="Up to 22 hours battery life6"
            style={{margin:"auto"}}
          />
          <p>Up to 22 hours battery life6</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png"
            alt="1080p FaceTime HD camera"
            style={{margin:"auto"}}
          />
          <p>1080p FaceTime HD camera</p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png"
            alt="Six-speaker sound system"
            style={{margin:"auto"}}
          />
          <p>
            Studio-quality three‑mic array
            <br />
            Six-speaker sound system with <br />
            Spatial Audio
          </p>
        </div>
        <div style={{marginBottom:"20px"}}>
          <h1 style={{fontSize:"20px",fontWeight:"bolder"}}>3.5 lb. or 4.7 lb.</h1>
          <p>Weight</p>
        </div>
        <div style={{marginBottom:"20px"}}>
            <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png" alt="Touch ID" style={{margin:"auto"}}/>
            <p>Touch ID</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
