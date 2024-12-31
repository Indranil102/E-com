import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import login from "../../assets/loginn.avif";

const AllProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelecteProducts] = useState("electronics");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all product categories
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get("https://dummyjson.com/products/categories");
        console.log("Categories Response:", res.data);
        setAllCategory(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    getAllProductsCategory();
  }, []);

  // Filter products by category
  const filterProducts = (category) => {
    console.log("Selected Category:", category);
    setSelecteProducts(category.name || category);  // Ensure correct property access
  };

  // Fetch products by selected category
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        if (selectProducts) {
          const res = await axios.get(`https://dummyjson.com/products/category/${selectProducts}`);
          console.log("API Response:", res.data);
          if (res.data && res.data.products) {
            setProducts(res.data.products);
          } else {
            setProducts([]);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, [selectProducts]);

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
              <button
                className="border bg-black text-white px-2 py-2 mt-5"
                onClick={() => filterProducts(category)}
              >
                {typeof category === "string" ? category : category.name}
              </button>
            </div>
          ))}
        </div>

        {/* Product Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {loading ? (
              <p className="text-center text-lg font-semibold">Loading products...</p>
            ) : error ? (
              <p className="text-center text-lg font-semibold text-red-600">{error}</p>
            ) : products.length > 0 ? (
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
              <p className="text-center text-lg font-semibold">No products found for this category.</p>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AllProduct;
