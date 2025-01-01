

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import AllProduct from './component/AllProduct/AllProduct'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { useState } from 'react'

function App() {
 const [cart , setCart]= useState([])

 const AddToCart=(product) =>{

  setCart([product])

 }

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/allProduct" element= {<AllProduct AddToCart={AddToCart}/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
       
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
