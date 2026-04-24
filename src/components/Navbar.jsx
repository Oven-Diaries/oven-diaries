import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to trigger slightly before the section fully reaches the top
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
    className={`fixed w-full h-16 z-50 ${
      scrolled ? 'bg-[#1c2070]/20 backdrop-blur-md shadow-lg' : ''
    } flex items-center`}
  >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Oven Diaries Logo" 
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
            {navLinks.map((link) => {
              const sectionName = link.href.substring(1);
              const isActive = activeSection === sectionName;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors ${isActive ? 'text-[#b8a35e]' : 'hover:text-white'}`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="tel:+918529988567"
              className="flex items-center gap-2 text-[#b8a35e] hover:text-white transition-colors ml-2 border border-[#b8a35e]/30 px-4 py-2 rounded-sm"
            >
              <Phone size={12} />
              <span className="text-[10px] tracking-widest">+91 8529988567</span>
            </a>
            
            <div className="flex items-center gap-4 ml-2 pl-6 border-l border-white/10 h-6">
              <a 
                href="https://www.instagram.com/ovendiaries__/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-[#b8a35e] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100092112357535&locale=bs_BA#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-[#b8a35e] transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#b8a35e] hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            className="lg:hidden absolute top-[calc(100%+8px)] left-0 w-full bg-[#1c2070] border border-[#b8a35e]/20 rounded-2xl shadow-2xl overflow-hidden origin-top"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
              {navLinks.map((link) => {
                const sectionName = link.href.substring(1);
                const isActive = activeSection === sectionName;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${isActive ? 'text-[#b8a35e]' : 'text-gray-200'} hover:text-[#b8a35e] block px-3 py-4 rounded-md text-base font-medium uppercase tracking-wider text-center`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex items-center justify-center gap-8 pt-6 pb-4 border-t border-white/10 mt-2">
                <a 
                  href="https://www.instagram.com/ovendiaries__/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/70 hover:text-[#b8a35e] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100092112357535&locale=bs_BA#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/70 hover:text-[#b8a35e] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
