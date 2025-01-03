import { useEffect, useState } from "react";

import axios from "axios";
import login from "../../assets/loginn.avif";
import { Link } from "react-router-dom";
const AllProduct = ({AddToCart}) => {
  const [allCategory, setAllCategory] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [selectProducts, setSelectedProducts] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const [ searchItem, setSearchItem] = useState("");

  const [minPrice, setMinPrice]= useState("")
  const [maxPrice, setMaxPrice]= useState("")

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
    
  };

  // search product

  
  const handleSearchItem =()=>{
    const searchProduct = originalProducts.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase()) 
    );
  
    setAllProducts(searchProduct); 
  }

  // Price filter 

  const handlePrice =()=>{

    let min= parseFloat(minPrice)
    let max= parseFloat(maxPrice)

    const filterPrice = originalProducts.filter((priceItem)=>(
          (!min ||priceItem.price >=min)&&(!max||priceItem.price <=max)
    ))

    setAllProducts(filterPrice);
  }

  return (
    <>
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
      <div className="flex justify-center items-center mt-3">
        {allCategory.length === 0 ? (
          <p>Loading categories...</p>
        ) : (
          <select className="bg-gray-200 text-gray-700  py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="category"
            id="category-select"
            onChange={(e) => filterProducts(e.target.value)}
            value={selectProducts}
          >
            <option value="">Filter By Category</option>
            {allCategory.slice(0,4)
            
            .map((category, index) => (
              <option key={index} value={category.name || category}>
                {category.name || category}
              </option>
            ))}
          </select>
        )}
      </div>

     {/*search item*/}
      <div className="text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3">
        <input placeholder="search item"className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus: border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placholer-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setSearchItem(e.target.value)}
        value={searchItem}
        />
         <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:rinf-4 focus:ring-gray-100  dark:focus:ring-gray-700 dark:bg-gray-800 dark-text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-400" onClick={handleSearchItem}> Search product</button>
      </div>

      {/* All product filter by price*/}

     <div className="text-center mt-3">
     <input placeholder="min price"className="border-4 px-2 py-2" onChange={(e)=>setMinPrice(e.target.value)}
        value={minPrice}
        />
        <input placeholder="max price"className="border-4 px-2 py-2 ml-3" onChange={(e)=>setMaxPrice(e.target.value)}
        value={maxPrice}
        />
         <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:rinf-4 focus:ring-gray-100  dark:focus:ring-gray-700 dark:bg-gray-800 dark-text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-400" onClick={handlePrice}> Filter by Price</button>
     </div>


      {/* All Products Section */}
      <div className="flex gap-4 flex-wrap justify-center mt-5">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div key={product.id} className="border-4 p-3 w-60">
              <Link to={`/singleProduct/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover object-center block w-full h-40"
              />
              </Link>
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
    </>
  );
};

export default AllProduct;
