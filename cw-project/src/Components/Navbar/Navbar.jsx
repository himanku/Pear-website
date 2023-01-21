import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from "../../assets/pear-dark.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  color: white;
  padding: 0 ;
  display: flex;
  // margin:auto;
  position: fixed;
  z-index:2;
  top: 0px;
  background-color:black;
  justify-content: space-around;

  .logo {
    padding: 8px 0;
    // margin-left: 110px;
    background-color:black;
  }
  .logoImg{
  
    width: 80px;
    // margin-left:150px;
    margin-right:20px;
    mrgin-bottom:150px;
   cursor:pointer;
   
  }
`

const Navbar = () => {
  return (
   <div style={{width:'100%',backgroundColor:'black'}}>
     <Nav>
      <div className="logo">
         <img src={logo} alt="logo" className="logoImg" />
      </div>
      <Burger />
    </Nav>
   </div>
  )
}

export default Navbar

// //--------------------------------------------------------------------------

// import React from 'react';
// import styled from 'styled-components';
// import Burger from './Burger';

// const Nav = styled.nav`
//   width: 100%;
//   height: 55px;
//   padding: 0 20px;
//   display: flex;
//   // margin-left: 100px;
//   // justify-content: space-between;
//   background-color: black;

//   .logo {
//     padding: 15px 0;
//   }
// `

// const Navbar = () => {
//   return (
//     <Nav>
//       <div className="logo">
//         Pear.
//       </div>
//       <Burger />
//     </Nav>
//   )
// }

// export default Navbar
