import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";


const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-white border-b relative border-gray-200">
          <div className="container max-auto flex justify-between p-5 items-center">
            <div>
              <Link to='/'>
              <h3 className="font-bold text-2xl">
                Mech<span className='text-red-500'>Shop</span>
              </h3>
              </Link>
              
            </div>

            {/*<div className='hidden md:block'>
            <ul className="flex  items-center text-lg justify-center font-semibold">
            <Link to='/'>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
              </Link>
             
              <li className="me-5 hover:text-gray-900 cursor-pointer">All Products </li>
              <li className="me-5 hover:text-gray-900 cursor-pointer">Mens </li>
              <li className="me-5 hover:text-gray-900 cursor-pointer">Kids </li>
            </ul>
            </div>
            */}

          <div className=''>
            <ul className="flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-[red] text-white items-center  justify-center font-semibold">
            <Link to='/'>
                <li className="mt-5 hover:text-gray-900 cursor-pointer">Home</li>
              </Link>
             
              <li className="mt-5 hover:text-gray-900 cursor-pointer">All Products </li>
              <li className="mt-5 hover:text-gray-900 cursor-pointer">Mens </li>
              <li className="mt-5 hover:text-gray-900 cursor-pointer">Kids </li>
            </ul>
            <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer'>
            <IoIosClose size={30}/>
            </button>
          </div>


            <div className="flex justify-center items-center gap-3">
              <button className=" bg-gray-100 border-0 py-1 px-3 focus-outline-none hover:bg-gray-200 rounded text-base  md:mt-0 font-semibold">Login</button>
             <Link to='/cart'><button><FaShoppingCart size={25} /></button></Link>

             <button className=' md:hidden'>
              <GiHamburgerMenu size={25} /> </button>
             

            </div>
          </div>

        </header>
      </div>
    </>
  )
}

export default Navbar
