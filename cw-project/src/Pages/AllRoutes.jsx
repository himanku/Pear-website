import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditMacPage from './Admin/EditMacPage'
import EditPage from './Admin/EditPage'
import Home from './Admin/Home'
import Orders from './Admin/Orders'
import Products from './Admin/Products'
import Users from './Admin/Users'
import { Login } from './Login/Login'
import { Signup } from './SignUp/Signup'
import { Home1 } from './Home1'
import Ipad from '../Components/iPad/Ipad'
import Cart from './cart/Cart'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/' element={<Home1/>}></Route> */}
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/ipad' element={<Ipad/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      {/* <Route path='/iphone' element={<Products/>}></Route> */}
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/edit/ipad/:id' element={<EditPage/>}></Route>
      <Route path='/edit/mac/:id' element={<EditMacPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes