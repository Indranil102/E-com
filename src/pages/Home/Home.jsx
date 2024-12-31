import Gallery from "../../component/Gallery/Gallery"
import HeroSection from "../../component/Hoersection/HeroSection"
import Layout from "../../component/Layout/Layout"
import Services from "../../component/Services/services"

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <Services/>
      <Gallery/>
    </Layout>
  )
}

export default Home
