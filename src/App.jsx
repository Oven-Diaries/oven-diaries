import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1c2070] text-white selection:bg-[#b8a35e] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
