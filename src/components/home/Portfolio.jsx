
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Portfolio from '../components/home/Portfolio';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <main className="section-light">

      {/* Navbar and Hero share one background */}
      <div id="home" className="relative">
        <Navbar />
        <Hero />
      </div>

      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </main>
  );
};

export default Home;
