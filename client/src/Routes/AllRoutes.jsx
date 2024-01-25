import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SinglePage from '../pages/SinglePage'
import Bag from '../pages/Bag'
import PrivateRoute from './PrivateRoute'
import { Img } from '@chakra-ui/react'
import Address from '../pages/Address'
import Payment from '../pages/Payment'
import WishList from '../pages/WishList'
import JeansProducts from '../pages/Menbottoms/JeansProducts'
import MenFormalPantProducts from '../pages/Menbottoms/MenFormalPantProducts'
import FormalShirtProducts from '../pages/MenTops/FormalShirtProducts'
import CasualShirtProducts from '../pages/MenTops/CasualShirtProducts'
import TshirtProducts from '../pages/MenTops/TshirtProducts'
import SweatersProducts from '../pages/MenTops/SweatersProducts'
import CasualPantProducts from '../pages/Menbottoms/CasualPantProducts'
import TrackProducts from '../pages/Menbottoms/TrackProducts'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/singlepage/:id' element={ 
          <SinglePage/>}/>
           {/* <Route path='/singlepage' element={ 
             <PrivateRoute>
               <SinglePage/>
             </PrivateRoute>
         }/> */}
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/*' element={<img src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3a6336464a4d53d9b4355162/Na_June_54-min.png' />}/>
          <Route path='/JeansPants' element={<JeansProducts/>}/>
          <Route path="/menformalpant" element={<MenFormalPantProducts/>} />
          <Route path="/casualpant" element={<CasualPantProducts/>} />
          <Route path="/formalshirts"  element={<FormalShirtProducts/>} />
          <Route path="/casualshirts" element={<CasualShirtProducts/>}/>
          <Route path="/tshirts" element={<TshirtProducts/>}/>
          <Route path="/sweaters" element={<SweatersProducts/>}/>
          <Route path="/trackpants" element={<TrackProducts/>}/>

 
         

        </Routes>
    </div>
  )
}

export default AllRoutes