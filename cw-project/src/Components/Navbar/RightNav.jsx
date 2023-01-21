import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 20px;
    color: #C1C1C1;
    font-size: 13px;
  }
  li:hover{
    color:white;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #C1C1C1;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}  >
   
    <li>
    <NavLink to='/'>Home</NavLink>
    </li>
    <li>
    <NavLink to='/store'>Store</NavLink>
    </li>
    <li>
    <NavLink to='/Mac'>Mac</NavLink>
    </li>
    <li>
    <NavLink to='/ipad'>iPad</NavLink>
    </li>
    <li>
    <NavLink to='/iphone'>iPhone</NavLink>
    </li>
    <li>
    <NavLink to='/watch'>Watch</NavLink>
    </li>
    <li>
    <NavLink to='/airpods'>AirPods</NavLink>
    </li>
    <li>
    <NavLink to='/tv&home'>TV&Home</NavLink>
    </li>
    <li>
    <NavLink to='/onlyonapple'>Only on Apple</NavLink>
    </li>
    <li>
    <NavLink to='/Accessories'>Accessories</NavLink>
    </li>
    <li>
    <NavLink to='/support'>Support</NavLink>
    </li>
    <li>
    <NavLink to='/search'>Search</NavLink>
    </li>
    <li>
    <NavLink to='/signup'>Signup</NavLink>
    </li>
    <li>
    <NavLink to='/name'>Name</NavLink>
    </li>
    
    </Ul>
  )
}

export default RightNav
