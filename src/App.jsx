

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
     const isProductExist=  cart.find((findItem)=>findItem.id===product.id)

     if(isProductExist){

     const upDateCart= cart.map((item)=>(
        item.id === product.id?{...item, quantity:item.quantity+1}: item

       
      ))
      setCart(upDateCart);
     }else{
      setCart([...cart,{...product, quantity:1}])
     }
  

 }

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/cart" element= {<Cart cart={cart}/>}/>
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
