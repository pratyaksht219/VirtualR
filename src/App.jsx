
import FeatureSection from './Components/FeatureSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import PricingSection from './Components/PricingSection'
import Testimonials from './Components/Testimonials'
import WorkFlow from './Components/WorkFlow'

function App() {

  return (
    <>
      <Navbar/>

      <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection/>
          <FeatureSection/>
          <WorkFlow/>
          <PricingSection/>
          <Testimonials/>
          <Footer/>
      </div>
      
    </>
  )
}

export default App
