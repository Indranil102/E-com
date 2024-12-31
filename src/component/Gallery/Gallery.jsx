import shoe from '../../assets/shoe.jpg'
import bag from '../../assets//girls bag.jpg'
import manF from '../../assets/man-formal.jpeg'
import apple from '../../assets/Apple.webp'
import watch from '../../assets/watches.jpg'
import serum from '../../assets/serum.avif'
const Gallery = () => {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto flex flex-wrap">
          
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500s">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block " src={shoe} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={bag} />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src={manF} />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500s">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src= {apple}/>
                </div>
                <div className="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={watch} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={serum} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Gallery;
  