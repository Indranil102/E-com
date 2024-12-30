

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
       
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
