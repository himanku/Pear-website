import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Admin/Home'
import Products from './Admin/Products'
import Users from './Admin/Users'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
    </Routes>
  )
}

export default AllRoutes