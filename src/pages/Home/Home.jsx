import Gallery from "../../component/Gallery/Gallery"
import HeroSection from "../../component/Hoersection/HeroSection"
import PopularProducts from "../../component/Popularproduct/PopularProducts"

import Services from "../../component/Services/services"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Services/>
      <PopularProducts/>
      <Gallery/>
    </>
  )
}

export default Home
