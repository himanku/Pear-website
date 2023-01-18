import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login/Login'
import { Signup } from './SignUp/Signup'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes