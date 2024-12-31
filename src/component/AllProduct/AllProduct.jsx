import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import login from "../../assets/loginn.avif";

const AllProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelecteProducts] = useState("electronics");

  // Fetch all product categories
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        console.log("Categories:", res.data); // Debug log
        setAllCategory(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getAllProductsCategory();
  }, []);

  const filterProducts = (category) => {
    console.log("Selected Category:", category);
    setSelecteProducts(category);
  };

  // Fetch products by category
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios.get(
            `https://dummyjson.com/products/category/${selectProducts}`
          );
          console.log("Products for selected category:", res.data);
          setProducts(res.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, [selectProducts]);

  return (
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
      <div className="flex gap-3 flex-wrap">
        {allCategory.length === 0 ? (
          <p>Loading categories...</p> // Show a loading message
        ) : (
          <select
            name="category"
            id="category-select"
            onChange={(e) => filterProducts(e.target.value)}
            value={selectProducts} // Dynamically set value
          >
            <option value="">Filter By Category</option>
            {allCategory
              .filter(
                (category) => !["lighting", "Motorcycle", "Vehicle"].includes(category)
              )
              .map((category, index) => (
                <option key={index} value={category}>
                  {typeof category === "string" ? category : category.name}
                </option>
              ))}
          </select>
        )}
      </div>

      {/* Product Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {products.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="lg:w-1/4 md:w-1/2 p-4 min-w-[250px] w-full border rounded-lg shadow-sm"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.thumbnail}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Title: {item.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Rating: {item.rating}
                    </h2>
                    <p className="mt-1">Price: ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold">No products found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AllProduct;
