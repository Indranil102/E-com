import { Link } from "react-router-dom"

const CartEmpty = () => {
  return (
    <div className="w-full h-[80vh] mt-[80px] container mx-auto bg-[#f7f6f6] px-4 py-4 shadow-lg rounded-md flex justify-center item-center ">
      <div className="flex items-center flex-col">
        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" className="w-[300px]" />
        <h3 className="text-center text-2xl font-semibold mt-3">Missing Cart item</h3>
        <Link to={"/"}>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">Go to Home</button
        ></Link>
      </div>
    </div>
  )
}

export default CartEmpty
