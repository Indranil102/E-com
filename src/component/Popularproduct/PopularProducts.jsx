import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PopularProducts = ({AddToCart}) => {
  const [PopularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const fetchPopularProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/1");
        const data = await response.json();
        setPopularProduct(data.products || []);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Error fetching products.");
      }
    };

    fetchPopularProduct();
  }, []);

  return (
    <>
      <div className="mt-10 text-center">
        <h2 className="text-5xl font-bold text-black">Popular Products</h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {PopularProduct.length > 0 ? (
              PopularProduct.map((popularItem) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  key={popularItem.id}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={popularItem.thumbnail}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {popularItem.title}
                    </h2>
                    <p className="mt-1">$ {popularItem.price} </p>
                    <button className="border bg-blue-600 px-2 py-2  text-white rounded" onClick={()=>AddToCart(popularItem)}> Add to cart</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No popular products available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
