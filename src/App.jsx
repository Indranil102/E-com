

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import AllProduct from './component/AllProduct/AllProduct'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/allProduct" element= {<AllProduct/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
       
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
