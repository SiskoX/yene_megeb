import { useState } from 'react'
 
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Food from './components/Food/Food';
import Order from './components/Order/Order';
import Checkout from './components/Order/Checkout';
import ShippingAddr from './components/Order/ShippingAddr';
function App() {
 

  return (
    <BrowserRouter className='bg-slate-900 text-white w-screen h-screen'>
      <Routes>
    <Route path="*" element={<Food to="/" />} />
 
    <Route exact path = "/order" element={<Order/>} />
    <Route exact path = "/checkout" element={<Checkout/>} />
    <Route exact path = "/shipping-address" element={<ShippingAddr/>} />
    
    </Routes>
   </BrowserRouter>
  )
}

export default App
