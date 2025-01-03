import Gallery from "../../component/Gallery/Gallery"
import HeroSection from "../../component/Hoersection/HeroSection"
import PopularProducts from "../../component/Popularproduct/PopularProducts"

import Services from "../../component/Services/services"
import Testimonial from "../../component/Testimonial/Testimonial";




const Home = ({AddToCart}) => {
  return (
    <>
      <HeroSection/>
      <Services/>
      <PopularProducts AddToCart={AddToCart}/>
      <Gallery/>
      <Testimonial />
      
    </>
  );
};

export default Home
