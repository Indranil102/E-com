import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import login from "../../assets/loginn.avif";

const AllProduct = ({AddToCart}) => {
  const [allCategory, setAllCategory] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [selectProducts, setSelectedProducts] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setAllProducts(data.products); // Update state with all products
        setOriginalProducts(data.products); // Keep a copy of the original products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  // Fetch all product categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        console.log(response.data); // Log to inspect structure
        setAllCategory(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Filter products based on selected category
  const filterProducts = (category) => {
    console.log("Selected Category:", category);

    setSelectedProducts(category); // Update selected category state

    const filteredData =
      category === ""
        ? originalProducts // Show all products if no category is selected
        : originalProducts.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase().trim()
          );

    setAllProducts(filteredData); // Update filtered products state
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
    // You can implement further logic here, like adding the product to a cart state or calling an API.
  };

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
          <p>Loading categories...</p>
        ) : (
          <select
            name="category"
            id="category-select"
            onChange={(e) => filterProducts(e.target.value)}
            value={selectProducts}
          >
            <option value="">Filter By Category</option>
            {allCategory.map((category, index) => (
              <option key={index} value={category.name || category}>
                {category.name || category}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* All Products Section */}
      <div className="flex gap-4 flex-wrap justify-center mt-5">
        {allProducts.length > 0 ? (
          allProducts.map((product, index) => (
            <div key={index} className="border-4 p-3 w-60">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover object-center block w-full h-40"
              />
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Title: {product.title}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rating: {product.rating}
                </h2>
                <p className="mt-1">Price: ${product.price}</p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => {handleAddToCart(product);
                    AddToCart(product);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available for the selected category.</p>
        )}
      </div>
    </Layout>
  );
};

export default AllProduct;
