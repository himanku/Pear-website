import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Admin/Home'
import Products from './Admin/Products'
import Users from './Admin/Users'
import { Login } from './Login/Login'
import { Signup } from './SignUp/Signup'
import { Home1 } from './Home1'
import { PrivateRoute } from '../Components/Auth/PrivateRoute'
import { useDispatch } from 'react-redux'
import {auth} from '../firebase'
import { setUser } from '../Redux/Authentication/action'
import HomePage from '../Components/HomePage/HomePage'
import { AdminPrivateRoute } from '../Components/Auth/AdminPrivateRoute'

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
    <Routes>
      <Route path='/dashboard' element={<AdminPrivateRoute><Home/></AdminPrivateRoute>}></Route>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes