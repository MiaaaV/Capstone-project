import Header from '../components/frontpage/Header';
import Hero from '../components/frontpage/Hero';
import Specials from '../components/frontpage/Specials';
import Testimonials from '../components/frontpage/Testimonials';
import Info from '../components/frontpage/Info';
import Footer from '../components/frontpage/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <Info />
      <Footer />
    </>
  )
}

export default Home;