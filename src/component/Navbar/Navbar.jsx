import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200">
          <div className="container max-auto flex justify-between p-5 items-center">
            <div>
              <h3 className="font-bold text-2xl">
                Mech <span>Shop</span>
              </h3>
            </div>
            <ul className="flex items-center text-lg justify-center font-semibold">
            <Link to='/'>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
              </Link>
             
              <li className="me-5 hover:text-gray-900 cursor-pointer">All Products </li>
              <li className="me-5 hover:text-gray-900 cursor-pointer">Mens </li>
              <li className="me-5 hover:text-gray-900 cursor-pointer">Kids </li>
            </ul>

            <div className="flex justify-center items-center gap-3">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus-outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login</button>
             <Link to='/cart'><button>Cart</button></Link>
             

            </div>
          </div>

        </header>
      </div>
    </>
  )
}

export default Navbar
