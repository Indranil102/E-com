

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import AllProduct from './component/AllProduct/AllProduct'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

function App() {
 const [cart , setCart]= useState([])
 const [promocode, setPromoCode] = useState("")
 const [discount , setDiscount]=useState(0)
 const [invalid, setInvalid]= useState("Invalid PromoCode")
 // add to cart
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
  

 };
// add increase decrease
 const handleInc=(id) =>{
  const incQuantity= cart.map((item)=>(
    item.id===id ? {...item, quantity: item.quantity+1}: item
  ))
  setCart(incQuantity);

 };

 const handleDec=(id) =>{
  const decQuantity= cart.map((item)=>(
    item.id===id && item.quantity>1? {...item, quantity: item.quantity-1}: item
  ))
  setCart(decQuantity);
 };

 // handle remove
 const handleRemove=(id)=>{
  const updateByFilter =cart.filter((filterItem)=> filterItem.id!== id)

  setCart(updateByFilter);

 }

 //calculate total price

 const getTotalPrice =() =>
 {
  const totalPrice = cart.reduce((total, cartReduceItem) => {
    return total + cartReduceItem.price * (cartReduceItem.quantity || 1); // Default quantity is 1
  }, 0);

  return totalPrice - discount;
 }

 // promocode

 const applyPromoCode=()=>{
   if(promocode == "DISCOUNT10"){

        setDiscount(getTotalPrice()*0.1) ;
        setPromoCode("")
        setPromoCode("")

   }else{
     setInvalid(invalid)
   }
 }

 


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/cart" element= {<Cart cart={cart} handleDec={handleDec}  handleInc={handleInc} handleRemove={handleRemove}
          getTotalPrice={getTotalPrice}
          applyPromoCode={applyPromoCode}
          promocode={promocode}
          setPromoCode={setPromoCode}
          invalid={invalid}/>}/>

          <Route path="/allProduct" element= {<AllProduct AddToCart={AddToCart}/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
       
        </Routes> 

        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
