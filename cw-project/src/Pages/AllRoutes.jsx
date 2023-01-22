import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Admin/Home'
import Products from './Admin/Products'
import Users from './Admin/Users'
import { Login } from './Login/Login'
import { Signup } from './SignUp/Signup'
import { Home1 } from './Home1'


import Mac from './Mac'
import Watch from './Watch/Watch'
import SingleProduct from './singleProduct/SingleProduct'
import Cart from './Cart/Cart'
import { PrivateRoute } from '../Components/Auth/PrivateRoute'
import { useDispatch } from 'react-redux'
import {auth} from '../firebase'
import { setUser } from '../Redux/Authentication/action'
import HomePage from '../Components/HomePage/HomePage'
import {  UserPrivateRoute } from '../Components/Auth/UserPrivateRoute'
import Orders from './Admin/Orders'
import EditPage from './Admin/EditPage'
import EditMacPage from './Admin/EditMacPage'
import { Error } from './Error'
import ScrollTop from '../Components/ScrollTop'
import Checkout from './Checkout'


const AllRoutes = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      // console.log(authUser.email);
      if (authUser){
        dispatch(setUser(authUser))
      }else {
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <ScrollTop>
    <Routes>
      <Route path='/dashboard' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/edit/ipad/:id' element={<EditPage/>}></Route>
      <Route path='/edit/mac/:id' element={<EditMacPage/>}></Route>

      <Route path='/mac' element={<Mac/>}></Route>
      <Route path='/checkout' element={<UserPrivateRoute><Checkout/></UserPrivateRoute>}></Route>
      <Route path='/watch' element={<Watch/>}></Route>
      <Route path='/singleProduct' element={<SingleProduct/>}></Route>
      <Route path='/cart' element={<UserPrivateRoute><Cart/></UserPrivateRoute>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>

      <Route path='/users' element={<Users/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </ScrollTop>
  )
}

export default AllRoutes