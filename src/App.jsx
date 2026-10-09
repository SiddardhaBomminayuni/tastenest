import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuTabs from './components/MenuTabs'
import OfferBanners from './components/OfferBanners'
import Reservation from './components/Reservation'
import FeaturedDishes from './components/FeaturedDishes'
import Testimonials from './components/Testimonials'
import Experts from './components/Experts'
import AppPromo from './components/AppPromo'
import News from './components/News'
import InstagramFollow from './components/InstagramFollow'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuTabs />
        <OfferBanners />
        <Reservation />
        <FeaturedDishes />
        <Testimonials />
        <Experts />
        <AppPromo />
        <News />
        <InstagramFollow />
      </main>
      <Footer />
    </>
  )
}
