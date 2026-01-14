import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Categories } from './components/Categories'
import { DealsSection } from './components/DealsSection'
import { FeaturedDeals } from './components/FeaturedDeals'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <DealsSection />
      <FeaturedDeals />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
