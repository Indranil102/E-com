import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import toast from 'react-hot-toast';


const Navbar = ({cart, userName}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleChange=()=>{
    isOpen=== false? setIsOpen(true) : setIsOpen(false);
  };

  const handleLogout =() =>{
    
   auth.signOut().then(()=>{
       toast.success("logout successfullly")
    }).catch((error)=>{
      toast.error(error)
    });
  }
 
  return (
    <>
      <div>
        <header className="bg-white border-b  border-gray-200  fixed top-0 z-10 w-full">
          <div className="container max-auto flex justify-between p-5 items-center">
            <div>
              <Link to='/'>
              <h3 className="font-bold text-2xl">
                Mech<span className='text-red-500'>Shop</span>
              </h3>
              </Link>
              
            </div>

            <div className='hidden md:block'>
            <ul className="flex  items-center text-lg justify-center font-semibold">
            <Link to='/'>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
              </Link>
             <Link to='/allProduct'>
              <li className="me-5 hover:text-gray-900 cursor-pointer">All Products </li></Link>

              <Link to={"/about"}>
              <li className="me-5 hover:text-gray-900 cursor-pointer">About </li></Link>

              <Link to={"/contact"}>
              <li className="me-5 hover:text-gray-900 cursor-pointer">Contact </li>
              </Link>
            </ul>
            </div>
            
            {
              isOpen? <div >
              <ul className="flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center  justify-center font-semibold">
              <Link to='/'>
                  <li className="mt-5 hover:text-gray-900 cursor-pointer" onClick={ToggleChange}>Home</li>
                </Link>
               
               <Link to={'/allProduct'}>
                <li className="mt-5 hover:text-gray-900 cursor-pointer" onClick={ToggleChange}>All Products </li> </Link>

                <Link to={'/contact'}>
                <li className="mt-5 hover:text-gray-900 cursor-pointer" onClick={ToggleChange}>Contact </li>
                </Link>
                <Link to={'/about'}>
                <li className="mt-5 hover:text-gray-900 cursor-pointer" onClick={ToggleChange}>About </li>
                </Link>
              </ul>
              <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer'>
              <IoIosClose size={30} onClick={ToggleChange}/>
              </button>
            </div> :( ""

            )}

          


            <div className="flex justify-center items-center gap-3">
              {
                userName?( <> <Link to= '/login'>
                  <button className=" bg-gray-100 border-0 py-1 px-3 focus-outline-none hover:bg-gray-200 rounded text-base  md:mt-0 font-semibold"
                  onClick={handleLogout}>Logout</button></Link>
                  <span>{userName}</span></>):(<Link to= '/login'>
                  <button className=" bg-gray-100 border-0 py-1 px-3 focus-outline-none hover:bg-gray-200 rounded text-base  md:mt-0 font-semibold">Login</button></Link> )
              }
              



             <Link to='/cart'>
             <button className='relative'>
              <span className='absolute  top-[-5px] bg-[red] right-0 text-white px-1 rounded-full'>{cart.length}</span><FaShoppingCart size={25} /> </button></Link>
             {
              isOpen?'' : <button className=' md:hidden' onClick={ToggleChange}>
              <GiHamburgerMenu size={25} /> </button> 
             }

             
             

            </div>
          </div>

        </header>
      </div>
    </>
  )
}

export default Navbar
