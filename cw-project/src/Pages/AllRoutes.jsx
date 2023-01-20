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

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
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