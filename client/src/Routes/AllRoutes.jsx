import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SinglePage from '../pages/SinglePage'
import Bag from '../pages/Bag'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/singlepage' element={<SinglePage/>}/>
          <Route path='/bag' element={<Bag/>}/>


        </Routes>
    </div>
  )
}

export default AllRoutes