import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import login from "../../assets/loginn.avif";

const AllProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [originalProducts, setOriginalProducts]=useState([])
  
  const [selectProducts, setSelectedProducts] = useState("electronics");
  const [allProducts, setAllProducts]=useState([]);
  
 //all products

  useEffect(()=>{
    const AllProducts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json(); // Parse the JSON from the response
          setAllProducts(data.products);
          setOriginalProducts(data.products)// Update state with the products array
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      AllProducts();
  },[])

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
    console.log("Original Products:", originalProducts);
  
    setSelectedProducts(category);
  
    const data = category
      ? originalProducts.filter((item) =>
          item.category.toLowerCase() === category.toLowerCase().trim()
        )
      : originalProducts;
  
    console.log("Filtered Products:", data);
    setAllProducts(data);
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
                (category) => !["lighting", "Motorcycle", "Vehicle"].includes(category.name)
              )
              .map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name} {/* Render category name */}
                </option>
              ))}
          </select>
        )}
      </div>

       {/*all product*/}
       <div className="flex gap-4 flex-wrap justify-center">
       {
           allProducts.map((AllItems, index)=>(
               <div key={index} className="border-4"> 
               <img src={AllItems.thumbnail} alt="" className="object-cover object-center  block" />
               <div className="mt-4">
               <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                 Title: {AllItems.title}
               </h3>
               <h2 className="text-gray-900 title-font text-lg font-medium">
                 Rating: {AllItems.rating}
               </h2>
               <p className="mt-1">Price: ${AllItems.price}</p>
             </div>
               </div>
           )) 
       }
     </div>
      

      
      

     
         

    </Layout>
  );
};

export default AllProduct;
