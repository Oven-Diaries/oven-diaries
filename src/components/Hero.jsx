import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/gps-cs-s/APNQkAEPy4v3bFEGGODqnZrhctWolVM1BNj5Yc06RsrQVbFQeI9HQ20nkV7o31UVPfmDmlJg94EeoDu98DiOYihOhzI0Y-elnpKDpKCpaGnbVkOQbZV6iHGzTO3pyNAgHFfh0w6oeK8=s1360-w1360-h1020-rw)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2070] via-[#1c2070]/90 to-[#1c2070]/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-[#b8a35e]/10 rounded-full hidden md:block"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#b8a35e]/10 blur-[100px] rounded-full hidden md:block"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#b8a35e] font-serif italic text-xl md:text-2xl mb-4 block">A Bite of Heaven</span>
          <h1 className="text-6xl md:text-8xl font-bold mt-2 leading-[0.9] text-white uppercase mb-6 tracking-tight">
            Welcome to <br />
            <span className="text-[#b8a35e] font-epica capitalize font-normal tracking-normal">OVEN DIARIES</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 leading-relaxed max-w-lg mx-auto mb-10 text-sm md:text-base font-medium"
        >
        At Oven Diaries, every bite carries intention and craft. From freshly baked morning breads to indulgent evening desserts, our kitchen is always in motion, creating flavors that stay with you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#menu" 
            className="bg-[#b8a35e] text-[#1c2070] px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#c9b77d] transition-colors w-full sm:w-auto"
          >
            Explore Menu
          </a>
          <a 
            href="#about" 
            className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#b8a35e] transition-colors w-full sm:w-auto justify-center"
          >
            Our Story &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
