import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen w-full bg-[#1c2070] text-white selection:bg-[#b8a35e] selection:text-white">
      <AnimatePresence>
        {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

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
