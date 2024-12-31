import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import login from "../../assets/loginn.avif";

const AllProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch all product categories
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        setAllCategory(res.data); // Assuming res.data is an array of strings or objects
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getAllProductsCategory();
  }, []);

  // Fetch all products from a specific category
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/category/smartphones");
        setProducts(res.data.products); // Assuming res.data.products is an array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      <Layout>
        {/* Header Section */}
        <div className="relative">
          <img
            src={login}
            alt="login"
            className="object-cover w-full object-center h-[200px]"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            All Products
          </h2>
        </div>

        {/* Categories Section */}
        <div className="flex gap-3 flex-wrap p-4">
  {allCategory.map((category, index) => (
    <div className="border" key={index}>
      <button className="border bg-black
       text-white px-2 py-2 mt-5">
        {typeof category === "string" ? category : category.name}
      </button>
    </div>
  ))}
</div>

        {/* Product Section */}
        <div className="flex flex-wrap gap-3 mt-3">
          {products.map((item) => (
            <div className="border-4 p-3 mb-4" key={item.id}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Rating:</strong> {item.rating}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default AllProduct;
