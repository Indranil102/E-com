const AllProductShim = () => {
    const arrayData = new Array(10).fill(""); 
  
    return (
      <div>
        <div className="flex gap-4 flex-wrap justify-center mt-5">
          {arrayData.map((_, i) => (
            <div key={i} className="border-4 p-3 w-60">
              <div className="w-full h-[200px] bg-[#ccc] rounded-md"></div>
              <div className="mt-4">
                <h3
                  className="text-gray-500 text-xs tracking-widest 
                  h-[20px] w-[120px] title-font mb-1 bg-[#ccc]"
                ></h3>
                <h2
                  className="text-gray-900 title-font text-lg font-medium 
                  h-[20px] w-[125px] bg-[#ccc]"
                ></h2>
                <p className="mt-1 h-[20px] w-[60px] bg-[#ccc]"></p>
                {/* Add to Cart Button */}
                <button
                  className="mt-2 h-[20px] w-[120px] bg-[#ccc] rounded-md"
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AllProductShim;
  